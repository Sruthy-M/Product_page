import React from 'react';

import DecreasedButton from './DecreasedButton';
import './App.css';
import hairoil from './hairoil.png';
import facewash from './facewash.png';
import AddToCart from './AddToCart';


class Product extends React.Component{
    constructor(props){
        super(props);
        this.renderImage = this.renderImage.bind(this);
        this.savePriceAndQty = this.savePriceAndQty.bind(this);
    }

    renderImage() {
        switch(this.props.product.imgurl) {
           case 'hairoil' :
                return hairoil;
            case 'facewash' :
                return facewash;
            default : return null;
        }
    }

    savePriceAndQty(qty,price) {
        this.props.saveDetails(qty,price);
    }
    render() {
        return (
            <div className= "productList">
            <div className= "shiftLeft">
            <img align="center" src={this.renderImage()} alt={this.props.product.imgurl} width="90" height="80" />
            <br/>
            {this.props.product.offerText}
            </div>
            <div className= "shiftRight">
            {this.props.product.Productname}
            <br/>
            
            {this.props.product.Quantity}
            <br/>
            
            Rs   {this.props.product.Price}
            </div>
            
            <DecreasedButton productDetail ={this.props.product} qty={this.props.qty} price={this.props.price} DecreasedButtonCallBack = {this.savePriceAndQty} />
            <AddToCart productDetail ={this.props.product} qty={this.props.qty} price={this.props.price} AddCartCallBack = {this.savePriceAndQty}/>
            </div>
        )
    }
}

export default Product;
