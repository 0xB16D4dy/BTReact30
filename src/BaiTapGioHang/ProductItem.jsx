import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { prod,addCart } = this.props;
    return (
      <div className="card">
        <img className="card-img-top my-2" src={prod.hinhAnh} alt="Title" style={{height:400}} />
        <div className="card-body border-top">
          <h4 className="card-title pb-md-2">{prod.tenSP}</h4>
          <button className="btn btn-success me-2" onClick={()=>{
            this.props.viewDetail(prod)
          }}>Xem chi tiết</button>
          <button
            className="btn btn-danger"
            onClick={()=>{
              addCart(prod)
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
