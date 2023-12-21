import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from 'react';
import './App.css';
import {Header} from "./Header";
import {Body} from "./Body";
import {getCategories} from "./ProtoAPI";

function App() {
    const [categoriesInfo, setCategoriesInfo] = useState({});

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
            <Header categoriesInfo={categoriesInfo}/>
            <Body categoriesInfo={categoriesInfo}/>
        </div>
    );
}

export default App;
