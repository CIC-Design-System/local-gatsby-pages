
import axios from 'axios';

export const ApiHooks = () => {

//EndPoint Call For the Content
const getStoreInfo = async ( data, endpoint) => {
    let url = null
    try {
        switch (endpoint) {
            case "store":
                url = `${process.env.GATSBY_MF_LOCATIONS}${data}`;
                break;
            case "store_content":
                url = `${process.env.GATSBY_MF_CONTENT}${data}/blueprints/localPage?=`;
                break;
            case "store_locator":
                url = `${process.env.GATSBY_MF_STORE_LOCATOR}${data}&radius=30&pageSize=3`;
                break;
        }
        const resp = await callMomentAPI(url);
        return resp; 
    } 
    catch (error) {
        return error
    }
 }
 const callMomentAPI = (url) => {
    return new Promise((resolve, reject) => {
        
        axios.get(url, { headers: { "Authorization": process.env.GATSBY_API_KEY } })
        .then(response => {
            resolve (response);
        })
        .catch(function (error) {
            reject(error);
        });
    });
  } 

 return {
    getStoreInfo
 }
}
