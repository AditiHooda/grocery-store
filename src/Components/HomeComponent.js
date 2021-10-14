import React, { Component } from "react";
import CarouselComp from "./carouselComponent";
import CategoriesComp from "./CategoriesComponent";
import Contactus from "./ContactusComponent";
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
                    <div className='offset-3 offset-md-5 mt-4'>
                        <h2>Latest <span className="text-success">Products</span></h2>
                    </div>
                </div>
                <Products products={this.props.products} />
                <Contactus />
            </div>
        )
    }
}

export default Home;