import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardBlock, CardBody, CardImg, CardText, CardTitle, Jumbotron } from "reactstrap";

class Cart extends Component {
    Total = 0;
    AddProduct(product) {
        if (product) {
            product.quantity += 1;
            this.Total += product.discountedPrice * product.quantity;
            this.UpdateUI(product);
        }
    }
    RemoveProduct(product) {
        if (product) {
            debugger;
            product.quantity -= 1;
            this.Total -= product.discountedPrice * product.quantity;
            this.UpdateUI(product);
        }

    }
    UpdateUI(product) {
        // let total = document.getElementById('Total');
        // if (total) total.innerText = this.Total;
        if (product.quantity) {
            let price = document.getElementById(product.id + '-Price');
            let discountedprice = document.getElementById(product.id + '-discountedPrice');
            let savedprice = document.getElementById(product.id + '-savedPrice');
            let quan = document.getElementById(product.id + '-quan');
            if (price) price.innerText = product.discountedPrice + " x " + product.quantity;
            if (discountedprice) discountedprice.innerText = 'Rs.' + product.discountedPrice * product.quantity;
            if (savedprice) savedprice.innerText = "Saved Rs. " + (product.price * product.quantity - product.discountedPrice * product.quantity);
            if (quan) quan.innerText = product.quantity;
        }
        else {
            let withItems = document.getElementById(product.id + '-WithItem');
            if (withItems) {
                withItems.remove();
            }
        }
    }
    DeleteProduct(product) {
        let withItems = document.getElementById(product.id + '-WithItem');
        let mainDiv = document.getElementById('MainDiv');
        if (withItems) {
            withItems.remove();
        }
        if (mainDiv.children.length == 0) {
            mainDiv.innerHTML = ' <div  className = "jumbotron col-12 my-2"> <h3>No item added in the basket</h3>  <h2> Would you like to <a href="/products"> Shop</a>? </h2> </div> '
        }
    }
    render() {
        let cartView = this.props.cartproduct.map((product) => {
            let productQuantity = product.quantity;
            if (productQuantity) {
                const productview =
                    <div >
                        <div className='row border'>
                            <span className='col-2 border borderMargin'>
                                <img src={product.image} height="100px" />
                            </span>
                            <span className='content_center col-9'>
                                <span className='col-5'>
                                    {product.name}&nbsp;{product.desc}
                                    <br />
                                    <span>
                                        <small id={product.id + '-Price'}>{product.discountedPrice} x {productQuantity}</small>
                                    </span>
                                </span>
                                <span className='col-3'>
                                    <p><button className="btn btn-success" onClick={() => this.RemoveProduct(product)}>-</button>   <span id={product.id + '-quan'}>{productQuantity}</span>   <button className="btn btn-success" onClick={() => this.AddProduct(product)}>+</button></p>
                                </span>
                                <span className='col-4'>
                                    <span id={product.id + '-discountedPrice'}>Rs. {product.discountedPrice * productQuantity}</span>
                                    <div className='text-success'><small id={product.id + '-savedPrice'}> Saved Rs. {product.price * productQuantity - product.discountedPrice * productQuantity}</small></div>
                                </span>
                                <button type="button" className="btn btn-danger m-1" onClick={() => this.DeleteProduct(product)}>X</button>
                            </span>
                        </div>

                    </div >
                this.Total += product.discountedPrice * productQuantity;
                return (
                    <div className="col-12 my-2" id={product.id + '-WithItem'}>
                        {productview}
                    </div>
                );
            }
            else {
                return null;
            }
        });
        if (this.Total == 0) {
            cartView =
                <div className="col-12 my-2" id='NoItem'>
                    <Jumbotron>
                        <h3>No item added in the basket</h3>
                        <h2>
                            Would you like to
                            <Link to='products'> Shop</Link>?
                        </h2>
                    </Jumbotron>
                </div>
        }
        return (
            <div className="container my-4" >
                <div className="row" id='MainDiv'>
                    {cartView}
                </div>
                <div className='row'>
                    <div className='col-12 col-md-5 offset-md-7'>
                        <Card style={{
                            backgroundColor: 'floralWhite'
                        }}>
                            <CardTitle>
                                <div>
                                    <span className='col-6'>Sub Total:</span>
                                    <span className='col-6 offset-6'> Rs. <span id='Total'>{this.Total}</span></span>
                                </div>
                                <div>
                                    <span className='col-6'>Delivery Charges:</span>
                                    <span className='col-6 offset-4 p'> Rs. 19.7</span>
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