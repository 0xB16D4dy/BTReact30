import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  render() {
    const { arrProduct,currentProduct,viewDetail,addCart } = this.props;
    return (
      <div className="container">
        <div className="row">
          {arrProduct.map((prod, index) => {
            return <div className="col-4" key={index}>
              <ProductItem prod={prod} viewDetail={viewDetail} addCart={addCart}/>
            </div>
          })}
        </div>
        <div className="my-5">
          <div className="row">
            <div className="col-4">
              <h3 className="text-center">Name</h3>
              <img
                src={currentProduct.hinhAnh}
                alt="..."
                className="w-100"
              />
            </div>
            <div className="col-8">
              <h3>Thông số kỹ thuật</h3>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Màn hình</td>
                    <td>{currentProduct.manHinh}</td>
                  </tr>
                  <tr>
                    <td>Hệ điều hành</td>
                    <td>{currentProduct.heDieuHanh}</td>
                  </tr>
                  <tr>
                    <td>Camera trước</td>
                    <td>{currentProduct.cameraTruoc}</td>
                  </tr>
                  <tr>
                    <td>Camera sau</td>
                    <td>{currentProduct.cameraSau}</td>
                  </tr>
                  <tr>
                    <td>RAM</td>
                    <td>{currentProduct.ram}</td>
                  </tr>
                  <tr>
                    <td>ROM</td>
                    <td>{currentProduct.rom}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
