'use client';

// import { useRef } from 'react';
// import { Provider } from 'react-redux';
// import { makeStore } from '../lib/store';
// import { makeStore } from '../app/lib/store';
// import { makeStore } from '../app/lib/store';

// export default function StoreProvider({ children }) {
//     const storeRef = useRef();
//     if (!storeRef.current) {
//         // Create the store instance the first time this renders
//         storeRef.current = makeStore();
//     }


//     return <Provider store={storeRef.current}>{children}</Provider>;
// }


// import { Provider } from 'react-redux';
// import { makeStore } from '../app/lib/store'; // Update the path if necessary
// // import '../styles/globals.css'; // Import your global styles here

// const store = makeStore(); // Initialize the store outside the component

// export default function StoreProvider({ Component, pageProps }) {
//     return (
//         <Provider store={store}>
//             <Component {...pageProps} />
//         </Provider>
//     );
// }

// app/lib/StoreProvider.js

import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore } from '../app/lib/store';

export default function StoreProvider({ children }) {
    const storeRef = useRef();

    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore();
    }

    return <Provider store={storeRef.current}>{children}</Provider>;
}



