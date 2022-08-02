import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    const { cartProduct,delCart,increaseDecreaseAmount } = this.props;
    let renderCart = (arrCart) => {
      return arrCart.map((prod, index) => {
        return (
          <tr key={index}>
            <td className="text-center">{prod.maSP}</td>
            <td>
              <img src={prod.hinhAnh} alt="100" width={100} />
            </td>
            <td>{prod.tenSP}</td>
            <td>
              <button className="btn btn-primary me-2" onClick={() => { 
                increaseDecreaseAmount(prod.maSP,true)
               }}>
                <i
                  className="fa fa-plus"
                  aria-hidden="true"
                ></i>
              </button>
              {prod.soLuong}
              <button className="btn btn-primary ms-2" onClick={() => { 
                increaseDecreaseAmount(prod.maSP,false)
               }}>
                <i
                  className="fa fa-minus"
                  aria-hidden="true"
                ></i>
              </button>
            </td>
            <td>{prod.giaBan.toLocaleString()} VND</td>
            <td>{(prod.giaBan* prod.soLuong).toLocaleString()} VND</td>
            <td>
              <button className="btn btn-danger" onClick={()=>{
                delCart(prod)
              }}>Delete</button>
            </td>
          </tr>
        );
      });
    };
    return (
      <div>
        <div>
          {/* Button trigger modal */}
          {/* <button
            type="button"
            className="btn btn-primary btn-lg"
            data-bs-toggle="modal"
            data-bs-target="#modelId"
          >
            Launch
          </button> */}
          {/* Modal */}
          <div
            className="modal fade"
            id="modelId"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="modelTitleId"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl" role="document">
              <div
                className="modal-content"
              >
                <div className="modal-header">
                  <h5 className="modal-title">Giỏ hàng</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <table className="table table-borderless">
                    <thead className="table-dark">
                      <tr>
                        <th>Mã sản phẩm</th>
                        <th>Hình ảnh</th>
                        <th>Tên sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th>Thành tiền</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>{renderCart(cartProduct)}</tbody>
                    <tfoot>
                      <tr>
                        <td colSpan={5}></td>
                        <th>Tổng tiền</th>
                        <td>{cartProduct.reduce((total,current) => { 
                            return total += current.giaBan*current.soLuong
                         },0).toLocaleString()} VND</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
