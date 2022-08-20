import React, { Component } from 'react';
import { connect } from 'react-redux';

class FormSV extends Component {
  handleChange = (sinhVien) =>{
    let {id,value} = sinhVien;
    const action = {
      type:'HANDLE_CHANGE_INPUT',
      payload:{
        id,
        value
      }
    }
    this.props.dispatch(action);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let { sinhVien } = this.props;
    const action = {
      type: 'HANDLE_SUBMIT',
      payload: {
        sinhVienCapNhat: { ...sinhVien },
      },
    };
    this.props.dispatch(action);
  };
  componentWillReceiveProps(newProps){
    // const action = {
    //   sinhVienCapNhat:newProps.sinhVienCapNhat
    // }
    // this.props.dispatch(action)
    console.log(newProps);
    console.log('componentWillReceiveProps')
  }
  render() {
    return (
      <div className='card'>
        <h3 className='card-header text-center bg-dark text-white'>
          Thông tin sinh viên
        </h3>
        <form
          className='card-body form-group row gx-4'
          onSubmit={this.handleSubmit}
        >
          <div className='col-6'>
            <label className='form-label'>Mã SV</label>
            <input type='text' id='id' className='form-control' onChange={(e)=>{
              this.handleChange(e.target)
            }}/>
          </div>
          <div className='col-6'>
            <label className='form-label'>Họ và Tên</label>
            <input type='text' id='name' className='form-control' onChange={(e)=>{
              this.handleChange(e.target)
            }}/>
          </div>
          <div className='col-6'>
            <label className='form-label'>Số điện thoại</label>
            <input type='text' id='sdt' className='form-control' onChange={(e)=>{
              this.handleChange(e.target)
            }}/>
          </div>
          <div className='col-6'>
            <label className='form-label'>Email</label>
            <input type='email' id='email' className='form-control' onChange={(e)=>{
              this.handleChange(e.target)
            }}/>
          </div>
          <div className='form-group my-3'>
            <button className='btn btn-success me-2' type='submit'>
              Thêm sinh viên
            </button>
            <button className='btn btn-primary' type='button'>
              Cập nhật
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  sinhVien: state.reactFormReducer.sinhVien,
});

export default connect(mapStateToProps)(FormSV);
