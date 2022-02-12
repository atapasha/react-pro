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
      <button className='btn btn-primary' onClick={this.handleReset}> Reset</button>

        {this.state.products.map((p, index) => (
          <Product onDelete={this.handleDelete} id={p.id} key={index} productName={p.productName} count={p.count}>lorrm  eposon </Product>
        ))}
      </>
    );
  }

  handleDelete=(productId)=>{
  const newProducts =this.state.products.filter(p=>p.id !==productId);
  this.setState({products:newProducts})
    
  }
  

  handleIncrement=(productId)=>{
    const newProducts = [...this.state.products];
    const index=newProducts.findIndex(p=>p.id===productId)
    this.setState({products:newProducts})
    newProducts[index].count+=1;
    this.setState({products:newProducts})
    }
    

handleReset(){
  // const newProducts= 
  console.log(this.state)
  // this.state.products.map(p=>{
  //   // p.count=0;
  //   console.log(p)
  //   return p
  // });
  // this.setState({producs:newProducts})
 }

}

export default Products;
