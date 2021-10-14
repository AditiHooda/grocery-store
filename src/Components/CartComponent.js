import React, { Component } from "react";
import { Card, CardBlock, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

class Cart extends Component {
    render() {
        debugger;
        let Total = 0;
        const cartView = this.props.cartproduct.map((product) => {
            let productQuantity = product.quantity != null ? product.quantity : 1;
            const productview =
                <Card>
                    <CardImg src={product.image}>
                    </CardImg>
                    <CardBody className='text-center'>
                        <CardText>
                            <div>
                                {product.name}&nbsp;{product.desc}
                                <div>
                                    {product.discountedPrice} x {productQuantity}
                                </div>
                                <div>
                                    <p><button className="btn btn-green">-</button>   {productQuantity}   <button className="btn btn-success">+</button></p>
                                </div>
                                <div>
                                    <span>Rs. {product.discountedPrice * productQuantity}</span>
                                    <div className='text-green'><small> Saved Rs. {product.price * productQuantity - product.discountedPrice * productQuantity}</small></div>
                                </div>
                                <button type="button" className="btn btn-danger m-1">Remove</button>
                            </div>
                        </CardText>
                    </CardBody>
                </Card>
            Total += product.discountedPrice;
            return (
                <div className="col-12 col-md-4 my-2">
                    {productview}
                </div>
            );
        });
        return (
            <div className="container my-4">
                <div className="row">
                    {cartView}
                </div>
                <div className='row'>
                    <div className='col-12 col-md-5 offset-md-7'>
                        <Card style={{
                            backgroundColor: 'floralWhite'
                        }}>
                            <CardTitle>
                                <div>
                                    <p>Sub Total:
                                        <span style={{
                                            float: 'right'
                                        }}> Rs. {Total}</span>
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        Delivery Charges:
                                        <span style={{
                                            float: 'right'
                                        }}> Rs. 19.7</span>
                                    </p>
                                </div>
                            </CardTitle>
                        </Card>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-5 offset-md-7 my-3'>
                        <button className='btn btn-success col-12'>Checkout</button>
                    </div>
                </div>
            </div>
        );

    }
}

export default Cart;