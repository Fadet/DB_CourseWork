import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Container} from "react-bootstrap";
import {CategoryBlock} from "./CategoryBlock";
import loading from './img/loading.gif'
import background from './img/background.jpg';
import './Body.css'

export function Body({categoriesInfo}) {
    const categories = categoriesInfo.categoriesList;

    return (
        <div style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: "center",
            marginTop: "-15px",
            marginBottom: "-15px"
        }}>
            <Container style={{marginTop: "70px", backgroundColor: "white"}}
                       className={"align-items-center justify-content-center"}>
                {(categories !== undefined) && categories.map((category) =>
                    <>
                        <h1 key={category.id}>{category.nameru}</h1>
                        {category.subcategoriesList.map((subcategory) =>
                            <CategoryBlock categoryInfo={subcategory} key={subcategory.id}/>)}
                    </>)}
                {(categories === undefined) &&
                    <div className={"loading"}>
                        <img src={loading} alt={""}/>
                        <h2 style={{textAlign: "center", marginTop: "10px"}}>Загрузка...</h2>
                    </div>}
            </Container>
        </div>

    )

}