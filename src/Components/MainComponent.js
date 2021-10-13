import { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PRODUCTS } from '../assets/data/products';
import Products from './ProductsComponent';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: PRODUCTS
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
                    {/* <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} /> */}
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;
