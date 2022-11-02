
 export const getType = ( store, alias) => { 
    return store.data.data.find(custom => custom.alias === alias);
 }
 

 
 export const statesList = () => { 
   const statesUrls = [
      { state:    'AL', url:    'alabama' },
      { state:    'AK', url:    'alaska' },
      { state:    'AZ', url:    'arizona' },
      { state:    'AR', url:    'arkansas' },
      { state:    'CA', url:    'california' },
      { state:    'CO', url:    'colorado' },
      { state:    'CT', url:    'connecticut' },
      { state:    'DE', url:    'delaware' },
      { state:    'FL', url:    'florida' },
      { state:    'GA', url:    'georgia' },
      { state:    'HI', url:    'hawaii' },
      { state:    'ID', url:    'idaho' },
      { state:    'IL', url:    'illinois' },
      { state:    'IN', url:    'indiana' },
      { state:    'IA', url:    'iowa' },
      { state:    'KS', url:    'kansas' },
      { state:    'KY', url:    'kentucky' },
      { state:    'LA', url:    'louisiana' },
      { state:    'ME', url:    'maine' },
      { state:    'MD', url:    'maryland' },
      { state:    'MA', url:    'massachusetts' },
      { state:    'MI', url:    'michigan' },
      { state:    'MN', url:    'minnesota' },
      { state:    'MS', url:    'mississippi' },
      { state:    'MO', url:    'missouri' },
      { state:    'MT', url:    'montana' },
      { state:    'NE', url:    'nebraska' },
      { state:    'NV', url:    'nevada' },
      { state:    'NH', url:    'new-hampshire' },
      { state:    'NJ', url:    'new-jersey' },
      { state:    'NM', url:    'new-mexico' },
      { state:    'NY', url:    'new-york' },
      { state:    'NC', url:    'north-carolina' },
      { state:    'ND', url:    'north-dakota' },
      { state:    'OH', url:    'ohio' },
      { state:    'OK', url:    'oklahoma' },
      { state:    'OR', url:    'oregon' },
      { state:    'PA', url:    'pennsylvania' },
      { state:    'RI', url:    'rhode-island' },
      { state:    'SC', url:    'south-caroling' },
      { state:    'SD', url:    'south-dakota' },
      { state:    'TN', url:    'tennessee' },
      { state:    'TX', url:    'texas' },
      { state:    'UT', url:    'utah' },
      { state:    'VT', url:    'vermont' },
      { state:    'VA', url:    'virginia' },
      { state:    'WA', url:    'washington' },
      { state:    'WV', url:    'west-virginia' },
      { state:    'WI', url:    'wisconsin' },
      { state:    'WY', url:    'wyoming' },
  ];
   return statesUrls;
}
