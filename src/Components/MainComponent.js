import { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Routes, Route } from 'react-router-dom';
import Products from './ProductsComponent';
import { PRODUCTS } from '../shared/products';
import Home from './HomeComponent';
import { DEALS } from '../shared/deals';
import { CATEGORIES } from '../shared/categories';
import Contactus from './ContactusComponent';
import Cart from './CartComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: PRODUCTS,
            deals: DEALS,
            categories: CATEGORIES,
            cartProduct: PRODUCTS
        }
        this.AddToCart = this.AddToCart.bind(this)
    }
    AddToCart(product) {
        product.quantity += 1;
        this.state.cartProduct.push(product);
        this.setState({
            cartProduct: this.state.cartProduct
        });
    }

    render() {

        const SearchedProduct = ({ match }) => {
            return (
                <Products products={this.state.products.filter((product) => product.name.toLowerCase().includes(match.params.productName.toLowerCase()) ||
                    product.category.toLowerCase() === (match.params.productName.toLowerCase()))} />
            )
        }
        return (
            <div className="body">
                <Header />
                {/* Switch replaced to routes from react-router-dom v6 */}
                <Routes>
                    <Route exact path="/products" element={<Products products={this.state.products} onClick={this.AddToCart} />} />
                    <Route path="/products/:productName" element={SearchedProduct} />
                    <Route exact path="/" element={<Home deals={this.state.deals} categories={this.state.categories} products={this.state.products} onClick={this.AddToCart} />} />
                    <Route path='/contactus' element={<Contactus />} />
                    <Route path='/cart' element={<Cart cartproduct={this.state.cartProduct} />} />
                </Routes>
                <Footer />
            </div>
        );
    }
}

export default Main;
