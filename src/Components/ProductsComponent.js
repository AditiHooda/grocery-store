import React, { Component } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

class Products extends Component {

    render() {
        const products = this.props.products.map((product) => {
            const productview =
                <Card className='borderOnHover'>
                    <div>
                        {product.discount != "0%" ? <h4><span className="badge badge-danger badge-lg"> Discount -{product.discount}</span></h4> : <h4><span className="badge badge-success">New Arrival</span></h4>}
                        <CardImg src={product.image} height="250px">
                        </CardImg>
                    </div>
                    <CardTitle className='text-center'>
                        {product.name}
                    </CardTitle>
                    <CardTitle className='text-center'>
                        {product.desc}
                    </CardTitle>
                    {/* <CardBlock className='text-center'>
                        {product.desc}
                    </CardBlock> */}
                    <CardBody className='text-center productBody'>
                        <CardText>
                            <div>
                                MRP. {product.discountedPrice != product.price ? <small className="lineThrough"> {product.price} </small> : null} {product.discountedPrice}
                                <div>
                                    <span style={{
                                        backgroundImage: 'url(assets/images/deliveryTruck.svg)',
                                        width: '30px',
                                        height: '25px',
                                        backgroundSize: '30px',
                                        backgroundRepeat: 'no-repeat'
                                    }}>&emsp;&emsp;<small>Standard Delivery: Today 6:30PM - 8:30PM</small></span>
                                </div>
                                <div class="m-1">
                                    <span>quantity: </span>
                                    <input type="number" min="1" max="100" placeholder='1' />
                                    <span> /kg </span>
                                </div>
                                <button type="button" className="btn btn-success m-1" onClick={() => this.props.onClick(product)}>Add to Cart</button>
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
            <div className="container my-4">
                <div className="row">
                    {products}
                </div>
            </div >
        );
    }
}

export default Products;