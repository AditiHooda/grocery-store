import React, { Component } from "react";
import CarouselComp from "./carouselComponent";
import CategoriesComp from "./CategoriesComponent";
import Deals from "./DealsComponent";

class Home extends Component {
    render() {
        return (
            <div>
                <CarouselComp />
                <Deals deals={this.props.deals} />
                <CategoriesComp categories={this.props.categories} />
            </div>
        )
    }
}

export default Home;