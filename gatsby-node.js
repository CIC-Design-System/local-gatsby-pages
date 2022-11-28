const path = require(`path`);
const axios = require('axios');

const crypto = require('crypto');


exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  let url = "/us/";
  const usTemplate = path.resolve(`src/templates/us.js`)
  const stateTemplate = path.resolve(`src/templates/state.js`)
  const cityTemplate = path.resolve(`src/templates/city.js`)
  const momentTemplate = path.resolve(`src/templates/moment.js`)
  let componentName = null;
  
  return graphql(`
  query USQuery {
    allWpPage {
      nodes {
        id
        title
        status
        slug
        parentId
        databaseId
        template {
          templateName
        }
        uri
      }
    }
  }  
  
  `, { limit: 2000 }).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.allWpPage.nodes.forEach(edge => {
        url = edge.slug;
        switch (edge.template.templateName ) {
            case "State":
                componentName = stateTemplate;
                break;
            case "City Moment":
                componentName = cityTemplate;
                break;
            case "Moment Feed":
                componentName = momentTemplate;
                break;
        }
      createPage({
        // Path for this page — required
        path: `${edge.uri}`,
        component: componentName,
        context: {
            id: edge.id,
            title: edge.title,
            status: edge.status,
            parentId: edge.parentId,
            databaseId: edge.databaseId,
            slug: url,
            templateName: edge.template.templateName
        },
      })
    })
  })
}

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions;
  // fetch raw data from the randomuser api
  const getData = () => axios.post(`https://local.checkintocash.com/wp-content/themes/bb-theme-child/api/api.php`);
  // await for results
  const res = await getData();

  let full_state = "";
  let min_state = "";
  // map into these results and create nodes

  res.data.map((state, i) => {
    // Create your node object
    full_state = state.state;
    min_state = state.state_min;

    state.cities.map((city, i) => {
      const userNode = {
        id: city.ID, 
        parent: `__SOURCE__`,
        internal: {
          type: `MomentFeed`, // name of the graphQL query --> allRandomUser {}
          // contentDigest will be added just after
          // but it is required
        },
        children        : [],
        state           : full_state,
        state_min       : min_state,
        locality        : city.locality,
        name            : city.name,
        zip             : city.postal_code,
        address         : city.address,
        status          : city.status,
        momentfeed_id   : city.momentfeed_id,
        corporate_id    : city.corporate_id,
        post_name       : city.post_name,
        phone           : city.phone
      }

      // Get content digest of node. (Required field)
      const contentDigest = crypto
        .createHash(`md5`)
        .update(JSON.stringify(userNode))
        .digest(`hex`);
      // add it to userNode
      userNode.internal.contentDigest = contentDigest;

      // Create node with the gatsby createNode() API
      createNode(userNode);

    });




  });

  return;
}
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bootstrap/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}