
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
                case "testimonials":
                    url = `${process.env.GATSBY_MF_TESTIMONIALS}${process.env.GATSBY_MF_TOKEN}&corporate_id=${data}&star_rating=5&limit=3`;
                    break;
                default:
                    url = ``;
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

    //EndPoint Call For the Loans
    const getStoreLoans = async ( data, endpoint) => {
        let url = null
        try {
            switch (endpoint) {
                case "loans":
                    url = `${process.env.GATSBY_LOANS_API}`;
                    break;
                default:
                    url = ``;
                    break;
            }
            const resp = await callLoansAPI(data, url);
            return resp; 
        } 
        catch (error) {
            return error
        }
    }
    const callLoansAPI = ( data, url  ) => {
        return new Promise((resolve, reject) => {
            axios.post(url, data, { headers: { "Content-Type": "text/plain" } })
            .then(response => {
                resolve (response);
            })
            .catch(function (error) {
                reject(error);
            });
        });
    }

    //Newsletter Endpoint
    
    const saveNewsletter = async ( mail,number, type) => {
        let url = `${process.env.GATSBY_NEWSLETTER}`;
        try {
            switch (type) {
                case "email":
                    number = "-";
                    break;
                default:
                    mail = "-";
                    break;
            }
            const resp = await callNewsletter( mail,number, type, url);
            return resp; 
        } 
        catch (error) {
            return error
        }
    }
    const callNewsletter = (  mail,number, type, url  ) => {
        const data = {
            'mail': mail,
            'number': number,
            'section': type,
        }
        return new Promise((resolve, reject) => {
            axios.post(url, data, { headers: { "Content-Type": "text/plain" } })
            .then(response => {
                resolve (response);
            })
            .catch(function (error) {
                reject(error);
            });
        });
    } 

    return {
        getStoreInfo,
        getStoreLoans,
        saveNewsletter
    }
}
