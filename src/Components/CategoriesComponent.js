import React, { Component } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

class CategoriesComp extends Component {
    render() {
        if (this.props.categories != null) {
            const categories = this.props.categories.map((category) => {
                const categoryView =
                    <Card>
                        <CardTitle className='text-center my-2'>
                            <h3>{category.name}</h3>
                        </CardTitle>
                        <CardText className='text-center my-2'>
                            {category.desc}
                        </CardText>
                        <CardImg src={category.img} height="150px">
                        </CardImg>
                        <CardBody className='text-center my-2'>
                            <button type='button' className='btn btn-success'>Shop Now</button>
                        </CardBody>
                    </Card>
                return (
                    <div className="col-12 col-md-4 my-2">
                        {categoryView}
                    </div>
                );
            });
            return (
                <div class="box-container">
                    <div className="container">
                        <div className='row'>
                            <div className='offset-2 offset-md-4'>
                                <h2>SHOP BY <span className="text-success">CATEGORY</span></h2>
                            </div>
                        </div>
                        <div className="row">
                            {categories}
                        </div>
                    </div>
                </div >
            );
        }
        else {
            return (<div></div>);
        }
    }
}

export default CategoriesComp;