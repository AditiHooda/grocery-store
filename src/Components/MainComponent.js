import { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Products from './ProductsComponent';
import CarouselComp from './carouselComponent';
import { PRODUCTS } from '../shared/products';
import Home from './HomeComponent';
import { DEALS } from '../shared/deals';
import Deals from './DealsComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: PRODUCTS,
            deals: DEALS
        }
    }


    render() {
        const ProductsPage = () => {
            return (
                <Products products={this.state.products} />
            )
        }
        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/products" component={ProductsPage} />
                    <Route exact path="/home" component={() => <Home deals={this.state.deals} />} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;
