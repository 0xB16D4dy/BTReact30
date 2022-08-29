import React, { Component } from 'react';
import { connect } from 'react-redux';
import danhSachGhe from '../assets/models/danhSachGhe.json'
import HangGhe from './HangGhe';

class DanhSachGhe extends Component {
  renderHangGhe = () => {
    return danhSachGhe.map((hangGhe,index)=>{
        return <div key={index}>
            <HangGhe hangGhe={hangGhe} soHangGhe={index}/>
        </div>
    })
  };
  render() {
    return (
      <div className='col-8 text-center text-light'>
        <h3 className='text-uppercase display-4 text-warning'>
          Đặt vé Xem phim cyberlearn
        </h3>
        <div className='mt-2' style={{ fontSize: '25px' }}>
          Màn hình
        </div>
        <div
          className='mt-2'
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <div className='screen'></div>
        </div>
        {this.renderHangGhe()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(DanhSachGhe);
