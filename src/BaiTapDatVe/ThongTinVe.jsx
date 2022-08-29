import React, { Component } from 'react';
import { connect } from 'react-redux';
import { huyGheAction } from '../redux/actions/BaiTapDatVeActions';

class ThongTinVe extends Component {
  render() {
    return (
      <div className='col-4 mt-5'>
        <h3 className='text-light text-center' style={{ fontSize: '35px' }}>
          Danh Sách Ghế bạn chọn
        </h3>
        <div className='mt-5'>
          <button className='gheDuocChon me-2'></button>
          <span className='text-light' style={{ fontSize: '30px' }}>
            ghế đã đặt
          </span>
          <br />
          <button className='gheDangChon me-2'></button>
          <span className='text-light' style={{ fontSize: '30px' }}>
            ghế đang chọn
          </span>
          <br />
          <button className='ghe me-2' style={{marginLeft:'0'}}></button>
          <span className='text-light' style={{ fontSize: '30px' }}>
            ghế chưa đặt
          </span>
        </div>
        <div>
          <table className='table' border={3}>
            <thead>
              <tr className='text-light' fontSize={20}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </thead>
            <tbody className='text-warning'>
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr key={index}>
                    <td>{gheDangDat.soGhe}</td>
                    <td>{gheDangDat.gia.toLocaleString()}</td>
                    <td>
                      <button className='btn btn-danger' onClick={()=>{
                        this.props.dispatch(huyGheAction(gheDangDat))
                      }}>xoá</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot className='text-light'>
              <td>
                Tổng tiền
              </td>
              <td>
                {this.props.danhSachGheDangDat.reduce((total,current,index)=>{
                 return total+=current.gia;
                },0).toLocaleString()}
              </td>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  danhSachGheDangDat: state.DatVeReducer.danhSachGheDangDat,
});

export default connect(mapStateToProps)(ThongTinVe);
