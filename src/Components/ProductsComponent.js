import React, { Component } from "react";
import { Card, CardBody, CardHeader, CardImg, CardText, CardTitle } from "reactstrap";

class Products extends Component {
    render() {
        var colnumber = 0;
        const products = this.props.products.map((product) => {
            colnumber++;
            const productview =
                <Card>
                    <CardImg>
                        {/* <img src={require("../assets/images/product-1.png")} alt="Product1" /> */}
                    </CardImg>
                    <CardBody>
                        <CardTitle>
                            {product.name}
                        </CardTitle>
                        <CardText>
                            <div>
                                {product.discountedPrice}  <small className="lineThrough"> {product.price} </small>
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
                <div className="col-4 my-2">
                    {productview}
                </div>
            );
        })
        return (
            <div class="box-container" >
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