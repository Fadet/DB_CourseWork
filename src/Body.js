import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Container} from "react-bootstrap";
import {CategoryBlock} from "./CategoryBlock";
import loading from './img/loading.gif'
import './Body.css'
export function Body({categoriesInfo}) {
    const categories = categoriesInfo.categoriesList;

    return (
        <Container style={{marginTop: "70px"}} className={"align-items-center justify-content-center"}>
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

    )

}