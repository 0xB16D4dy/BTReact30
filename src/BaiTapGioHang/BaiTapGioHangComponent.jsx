import React, { Component } from "react";
import Cart from "./Cart";
import ProductList from "./ProductList";

const data = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./imgCart/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./imgCart/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./imgCart/applephone.jpg",
  },
];

export default class BaiTapGioHangComponent extends Component {
  state = {
    detailProduct: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./imgCart/vsphone.jpg",
    },
    cartProduct: [
      {
        maSP: 1,
        tenSP: "VinSmart Live",
        soLuong: 1,
        giaBan: 5700000,
        hinhAnh: "./imgCart/vsphone.jpg",
      },
    ],
  };
  viewDetail = (current) => {
    this.setState({
      detailProduct: current,
    });
  };

  addCart = (currentProd) => {
    let ProductCart = {
      maSP: currentProd.maSP,
      tenSP: currentProd.tenSP,
      soLuong: 1,
      giaBan: currentProd.giaBan,
      hinhAnh: currentProd.hinhAnh,
    };
    let cartUpdate = [...this.state.cartProduct];
    let index = cartUpdate.findIndex((prod) => prod.maSP === ProductCart.maSP);
    if (index !== -1) {
      //Tạo sản phẩm mới
      cartUpdate[index].soLuong += 1;
    } else {
      //Tăng số lượng sản phẩm đã có
      cartUpdate.push(ProductCart);
    }

    this.setState({
      cartProduct: cartUpdate,
    });
  };

  delCart = (currentProd) => {
    // console.log(currentProd)
    let id = currentProd.maSP;
    let cartUpdate = [...this.state.cartProduct];
    let index = cartUpdate.findIndex((prod) => prod.maSP === id);
    if (index !== -1) {
        cartUpdate.splice(index, 1);
      }
    //Cách 2: filter
    // let id = currentProd.maSP;
    // let cartUpdate =this.state.cartProduct.filter(prod=>prod.maSP !== id)
    
    this.setState({
      cartProduct: cartUpdate
    })
  };

  increaseDecreaseAmount = (id, flag) => {
    //flag === true: tăng số lượng, flag === flase: giảm số lượng
    let cartUpdate = [...this.state.cartProduct];
    let index = cartUpdate.findIndex(prod => prod.maSP === id);
    if(flag){
      cartUpdate[index].soLuong++;
    }else{
      if (cartUpdate[index].soLuong > 1){
        cartUpdate[index].soLuong--;
      }
    }

    this.setState({
      cartProduct: cartUpdate
    })
  }

  render() {
    let totalQuantity = this.state.cartProduct.reduce((total, current) => {
      return (total += current.soLuong);
    }, 0);
    return (
      <div className="container">
        <h3 className="text-success text-center py-4">Bài Tập Giỏ Hàng</h3>
        <Cart cartProduct={this.state.cartProduct} delCart={this.delCart} increaseDecreaseAmount={this.increaseDecreaseAmount}/>
        <div className="text-end">
          <span
            className="text-danger fw-bold"
            style={{ cursor: "pointer" }}
            data-bs-toggle="modal"
            data-bs-target="#modelId"
          >
            Giỏ hàng ({totalQuantity})
          </span>
        </div>
        <ProductList
          arrProduct={data}
          viewDetail={this.viewDetail}
          addCart={this.addCart}
          currentProduct={this.state.detailProduct}
        />
      </div>
    );
  }
}
