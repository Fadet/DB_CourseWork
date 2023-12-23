import 'bootstrap/dist/css/bootstrap.min.css';
import React, {createContext, useEffect, useState} from 'react';
import './App.css';
import {Header} from "./Header";
import {Body} from "./Body";
import {getCategories} from "./ProtoAPI";

export const CartDataContext = createContext(null);

function App() {
    const [categoriesInfo, setCategoriesInfo] = useState({});
    const [cartData, setCartData] = useState(() => {
        const saved = localStorage.getItem("cart_data");
        const initialValue = JSON.parse(saved);
        return initialValue || [];
    });

    useEffect(() => {
        async function callback() {
            try {
                const resp = await getCategories();
                setCategoriesInfo(resp);
            }
            catch (err) {
                console.error(err);
            }
        }
        callback();
    }, [])

    return (
        <div className="App">
            <CartDataContext.Provider value={[cartData, setCartData]}>
                <Header categoriesInfo={categoriesInfo}/>
                <Body categoriesInfo={categoriesInfo}/>
            </CartDataContext.Provider>
        </div>
    );
}

export default App;
