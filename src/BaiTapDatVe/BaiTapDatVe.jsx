import React, { Component } from 'react';
import DanhSachGhe from './DanhSachGhe';
import ThongTinVe from './ThongTinVe';
import '../assets/styles/BaiTapBookingTicket.css'

export default class BaiTapDatVe extends Component {
  render() {
    let backgroundStyle = {
      position: 'fixed',
      width: '100%',
      height: '100%',
      backgroundImage: "url('./img/bgmovie.jpg')",
      backgroundSize: '100%',
    };
    return (
      <div className='bookingMovie' style={backgroundStyle}>
        <div
          style={{
            backgroundColor: 'rgba(0,0,0,0.7)',
            position: 'fixed',
            width: '100%',
            height: '100%',
          }}
        >
          <div className='container-fluid'>
            <div className="row">
            <DanhSachGhe />
            <ThongTinVe />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


