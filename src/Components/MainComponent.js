import { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route } from 'react-router-dom';
import Products from './ProductsComponent';
import { PRODUCTS } from '../shared/products';
import Home from './HomeComponent';
import { DEALS } from '../shared/deals';
import { CATEGORIES } from '../shared/categories';
import Contactus from './ContactusComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: PRODUCTS,
            deals: DEALS,
            categories: CATEGORIES
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
                    <Route exact path="/home" component={() => <Home deals={this.state.deals} categories={this.state.categories} products={this.state.products} />} />
                    <Route path='/contactus' component={() => <Contactus />} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;
