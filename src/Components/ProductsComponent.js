import React, { Component } from "react";
import { Card, CardBody, CardHeader, CardImg, CardText, CardTitle } from "reactstrap";

class Products extends Component {

    render() {
        const products = this.props.products.map((product) => {
            const productview =
                <Card>
                    <div>
                        {product.discount != "0%" ? <span className="badge badge-danger"> Discount -{product.discount}</span> : <span className="badge badge-success">New Arrival</span>}
                        <CardImg src={product.image} height="280px">
                        </CardImg>
                    </div>
                    <CardBody>
                        <CardTitle>
                            {product.name}
                        </CardTitle>
                        <CardText>
                            <div>
                                {product.discountedPrice} {product.discountedPrice != product.price ? <small className="lineThrough"> {product.price} </small> : null}
                                <div class="quantity">
                                    <span>quantity: </span>
                                    <input type="number" min="1" max="1000" value="1" />
                                    <span> /kg </span>
                                </div>
                                <button type="button" className="btn btn-success m-1">Add to Cart</button>
                            </div>
                        </CardText>
                    </CardBody>
                </Card>
            return (
                <div className="col-12 col-md-4 my-2">
                    {productview}
                </div>
            );
        });
        return (
            <div class="box-container">
                <div className="container">
                    <div className="row">
                        {products}
                    </div>
                </div>
            </div >
        );
    }
}

export default Products;