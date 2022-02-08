import React, { Component } from "react";
import Product from "./product";

class Products extends Component {
  state = {
    products: [
      { id: 1, count: 2, productName: "laptopp" },
      { id: 2, count: 3, productName: "phone" },
      { id: 3, count: 2, productName: "airpod" },
    ],
  };
  render() {
    return (
      <>
        {this.state.products.map((p, index) => (
          <Product onDelete={this.handleDelete} id={p.id} key={index} productName={p.productName} count={p.count} />
        ))}
      </>
    );
  }

  handleDelete=(productId)=>{
      console.log(productId)
  }

}

export default Products;
