import React, { Component } from "react";
import { Container } from "reactstrap";
import CarouselComp from "./carouselComponent";
import CategoriesComp from "./CategoriesComponent";
import Deals from "./DealsComponent";
import Products from "./ProductsComponent";

class Home extends Component {
    render() {
        return (
            <div>
                <CarouselComp />
                <Deals deals={this.props.deals} />
                <CategoriesComp categories={this.props.categories} />
                <div className='row'>
                    <div className='offset-2 offset-md-4 mt-4'>
                        <h2>Latest <span className="text-success">Products</span></h2>
                    </div>
                </div>
                <Products products={this.props.products} />
            </div>
        )
    }
}

export default Home;