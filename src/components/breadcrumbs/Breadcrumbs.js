import React from 'react'
import { statesList, upperCase } from '../../selectors/getType';
    
export default function Breadcrumbs() {
    const states = statesList(); 
    const printBread = () =>{
        let link = null
        if (typeof window !== `undefined`){
            link =  window.location.pathname; 
        }
        if(link !== null){
        const bread_reverse = link.split('/');
        let [text, url] = ["", ""];
        return(
            bread_reverse.map((value, index) => {
                if(value !== ""){
                    switch (index) {
                        case 1:
                            text = value.toUpperCase().replace(/\-/g, ' ') 
                            break;
                        case 2:
                            const full_state = states.filter(custom => custom.state === value.toUpperCase());
                            text = upperCase(full_state[0].url.replace(/\-/g, ' ') )
                            break;
                        default:
                            text = upperCase(value.replace(/\-/g, ' '))
                            break;
                    }
                    url = printUrl(bread_reverse, index)
                    return(
                        <a key={`bread-${index}`} href={`${url}`}> &gt; {text} </a>
                    )
                }
            }) 
        )

        }
    }
    const printUrl = (bread_reverse, index) => {
        let str = ""
        bread_reverse.map((value, num) => { 
            if(value !== "" && index >=  num){
                    str+=  "/"+value
            } 
        }) 
         return str;
    } 
    return (
        <div className="cic-breadcrumbs cic-caption">
            <a href="/">{process.env.GATSBY_BRAND}</a> 
            {
                printBread()
            }
            </div>
    )
}
