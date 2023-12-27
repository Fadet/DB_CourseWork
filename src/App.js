import 'bootstrap/dist/css/bootstrap.min.css';
import React, {createContext, useEffect, useState} from 'react';
import './App.css';
import {Header} from "./Header";
import {Body} from "./Body";
import {getCategories} from "./ProtoAPI";
import {ShoppingCart} from "./ShoppingCart";
import {Auth, Login} from "./Login";

export const CartDataContext = createContext(null);
export const ShoppingCartContext = createContext(null);

export const SignInSignUpContext = createContext(null);

function App() {
    const [categoriesInfo, setCategoriesInfo] = useState({});
    const [showCart, setShowCart] = useState(false);
    const [showSignInSignUp, setShowSignInSignUp] = useState({signIn: false, signUp: false});
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
            } catch (err) {
                console.error(err);
            }
        }

        callback();
    }, [])

    return (
        <div className="App">
            <CartDataContext.Provider value={[cartData, setCartData]}>
                <ShoppingCartContext.Provider value={[showCart, setShowCart]}>
                    <SignInSignUpContext.Provider value={[showSignInSignUp, setShowSignInSignUp]}>
                        <Header categoriesInfo={categoriesInfo}/>
                        <ShoppingCart show={showCart} onHide={() => {
                            setShowCart(false);
                        }}></ShoppingCart>
                    </SignInSignUpContext.Provider>
                </ShoppingCartContext.Provider>
                <Body categoriesInfo={categoriesInfo}/>
            </CartDataContext.Provider>
            <Login show={showSignInSignUp.signIn}
                   onHide={() => setShowSignInSignUp({...showSignInSignUp, signIn: false})}
                   showauth={() => setShowSignInSignUp({signIn: false, signUp: true})}
            />
            <Auth show={showSignInSignUp.signUp}
                  onHide={() => setShowSignInSignUp({...showSignInSignUp, signUp: false})}
                  showlogin={() => setShowSignInSignUp({signIn: true, signUp: false})}
            />
        </div>
    );
}

export default App;
