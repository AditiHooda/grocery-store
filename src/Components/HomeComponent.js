import React, { Component } from "react";
import CarouselComp from "./carouselComponent";
import Deals from "./DealsComponent";

class Home extends Component {
    render() {
        return (
            <div>
                <CarouselComp />
                <Deals deals={this.props.deals} />
            </div>
        )
    }
}

export default Home;