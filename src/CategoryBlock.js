import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from 'react';
import {ProductCard} from "./ProductCard";
import {Row, Container} from "react-bootstrap";
import {getProducts} from "./ProtoAPI";
import './CategoryBlock.css';

export function CategoryBlock({categoryInfo}) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function callback() {
            try {
                const resp = await getProducts(null, {'categoryId': categoryInfo.id});
                setProducts(resp.productsList);
            } catch (err) {
                console.error(err);
            }

        }

        callback();
    }, [categoryInfo.id]);

    return (
        <>
            <div id={categoryInfo.nameen} style={{scrollMarginTop: "56px"}}></div>
            <div className={"mb-5  "}>
                <h2 className={"mb-3"}>
                    {categoryInfo.nameru}
                </h2>
                <Container>
                        <Row md={4} sm={1} className={"g-4 justify-content-center justify-content-md-start"}>
                            {products.map((product) =>
                                <ProductCard product={product} key={product.id}/>
                            )}
                        </Row>
                </Container>
            </div>
        </>
    );
}