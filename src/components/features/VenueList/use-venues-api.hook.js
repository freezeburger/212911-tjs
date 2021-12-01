import React from 'react';

const URL = 'http://localhost:5050/venues';

const getVenuesFromRESTAPI = () => {

    // fetch utilise les PROMISE comme strétgie de gestion des callback
    return fetch(URL)
        .then(res => res.json() /* transformation du JSON en Object */)
        .catch(err => false /* Do something with error */)

}

export const useVenuesApi = ( delay = 3000 ) => {

    const [venues, setVenues] = React.useState([]/* initial value */)

    const initEffect = () => {
        // Code a faire à l'INSERTION du composant 
        console.log('Start Polling Server');

        const timer = setInterval(
            () => getVenuesFromRESTAPI().then(setVenues)
            , delay );

        const cleanupEffect = () => {
            // Code a faire à la SUPPRESSION du composant 
            clearInterval(timer);
        }
        return cleanupEffect;
    }
    React.useEffect(initEffect, [ /* condition sur une prop de redéclenchcement de l'effet */ ]);

    return [venues];

}