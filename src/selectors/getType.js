
 export const getType = ( store, alias) => { 
    return store.data.data.find(custom => custom.alias === alias);
 }
 