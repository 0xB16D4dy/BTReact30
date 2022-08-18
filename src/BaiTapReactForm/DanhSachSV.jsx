import React, { Component } from 'react'
import { connect } from 'react-redux'

class DanhSachSV extends Component {
  renderTable = (arrSinhVien) => {
    return arrSinhVien.map((sv) => { 
      return (
        <tr key={sv.id}> 
              <td>{sv.id}</td>
              <td>{sv.name}</td>
              <td>{sv.sdt}</td>
              <td>{sv.email}</td>
              <td>
                <button className='btn btn-danger me-2'>Delete</button>
                <button className='btn btn-primary'>Edit</button>
              </td>
            </tr>
      )
     })  
  }
  render() {
    let {arrSinhVien} = this.props
    return (
      <div className='mt-3'>
        <table className="table">
          <thead className='bg-dark text-white'>
            <tr>
              <th>Mã SV</th>
              <th>Họ và Tên</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.renderTable(arrSinhVien)}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  arrSinhVien:state.reactFormReducer.arrSinhVien
})


export default connect(mapStateToProps)(DanhSachSV)