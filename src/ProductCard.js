import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Button, Card} from "react-bootstrap";

export function ProductCard({name, url, price}) {
    return (
        <Card style={{ width: '18.75rem'}} className={"me-4 ms-3 ms-md-0"}>
            <Card.Img variant="top" src={url} style={{height: "15rem",  objectFit: "contain",}}/>
            <Card.Body className={""}>
                <Card.Title className={"text-start mb-3"}>{name}</Card.Title>
                <Card.Text as={"div"} className={"text-start"}>
                    <div className={"justify-content-between d-inline-flex"}>
                        <div className={"pt-2 fw-semibold"}>
                            {price}
                        </div>
                        <Button style={{marginLeft: "60px", width: "100px", borderRadius: "20px"}} variant={"warning"}>Выбрать</Button>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

// export function ProductCardPlaceholder() {
//     return (
//         <Card style={{ width: '18rem'}} className={"me-4 ms-3 ms-md-0"}>
//             <div className={"justify-content-center"}>
//                 <Card.Img variant="top" src={url} style={{height: "30vh",  objectFit: "contain",}}/>
//             </div>
//             <Card.Body>
//                 <Card.Title>{name}</Card.Title>
//                 <Card.Text>
//                     {price}
//                 </Card.Text>
//             </Card.Body>
//         </Card>
//     );
// }