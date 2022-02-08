import React, { Component } from "react";

class Product extends Component {
  state = {
    count: 122,
    product: this.props.count,
  };
  render() {
    const { productName } = this.props;

    return (
      <>
        <div>
          <span ClassName="m-2 text-info  "> {productName}</span>
          <span className="m-2 badge">{this.format()}</span>
          <button
            onClick={this.handleIncrement}
            className="m-2 btn-sm btn-success"
          >
            +
          </button>
          <button
            onClick={this.handleDecrement}
            className="m-2 btn btn-sm btn-warning"
          >
            -
          </button>
          <button
            onClick={this.handleDelete(55)}
            className="m-2 btn-sm btn-danger"
          >
            delete
          </button>

          <p>{this.props.children}</p>
        </div>
      </>
    );
  }

  handleIncrement = () => {
    console.log("increment", this);
  };

  handleDecrement = () => {
    console.log("decrement");
  };

  handleDelete = () => {
     this.props.onDelete(this.props.id)
  };

  format() {
    if (this.state.count === 0) {
      return "aero";
    } else {
      return this.state.count;
    }
  }
}

export default Product;
