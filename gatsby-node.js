const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
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
  
  `, { limit: 1500 }).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.allWpPage.nodes.forEach(edge => {
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
            default:
                componentName = usTemplate;
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
            templateName: edge.template.templateName
        },
      })
    })
  })
}