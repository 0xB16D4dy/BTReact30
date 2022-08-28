import React, { Component } from 'react';
import { connect } from 'react-redux';

class FormSV extends Component {
  state = {
    sinhVien: {
      id: '',
      name: '',
      sdt: '',
      email: '',
    },
    errors: {
      id: '',
      name: '',
      sdt: '',
      email: '',
    },
  };

  handleChange = (tagInput) => {
    let { id, value, pattern } = tagInput;
    let dataType = tagInput.getAttribute('data-type');
    let newValue = { ...this.state.sinhVien };
    let newError = { ...this.state.errors };
    let errorMess = '';
    if (value.trim() === '') {
      errorMess += `${id} không được bỏ trống`;
    } else {
      if (id === 'name') {
        let regex = new RegExp(pattern);
        if (!regex.test(value)) {
          errorMess += `${id} không đúng định dạng`;
        }
      }
      if (dataType === 'phone') {
        let regex = new RegExp(pattern);
        if (!regex.test(value)) {
          errorMess += `${id} không đúng định dạng`;
        }
      }
      if (id === 'email') {
        let regex = new RegExp(pattern);
        if (!regex.test(value)) {
          errorMess += `${id} không đúng định dạng`;
        }
        value = value.toLowerCase();
      }
    }

    newValue[id] = value;
    newError[id] = errorMess;
    this.setState({
      sinhVien: newValue,
      errors: newError,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    let { errors, sinhVien } = this.state;
    const action = {
      type: 'HANDLE_SUBMIT',
      payload: {
        stateSinhVien: { ...this.state },
      },
    };
    for (let key in errors) {
      if (errors[key] !== '') {
        valid = false;
        break;
      }
    }
    for (let key in sinhVien) {
      if (sinhVien[key] === '') {
        errors[key] = `${key} không được bỏ trống`;
        valid = false;
      }
    }
    if (!valid) {
      this.setState({
        errors: errors,
      });
      return alert('Dữ liệu không hợp lệ');
    }
    this.props.dispatch(action);
  };
  handleUpdate = () => {
    let { errors, sinhVien } = this.state;
    let valid = true;
    const action = {
      type: 'HANDLE_UPDATE',
      payload: {
        sinhVienUpdate: this.state.sinhVien,
        isEdit: false,
      },
    };
    for (let key in errors) {
      if (errors[key] !== '') {
        valid = false;
        break;
      }
    }
    for (let key in sinhVien) {
      if (sinhVien[key] === '') {
        errors[key] = `${key} không được bỏ trống`;
        valid = false;
      }
    }
    if (!valid) {
      this.setState({
        errors: errors,
      });
      return alert('Dữ liệu không hợp lệ');
    }
    this.props.dispatch(action);
  };
  // static getDerivedStateFromProps(newProps, currentState) {
  //   console.log(newProps.sinhVienEdit.id,currentState.sinhVien.id)
  //   if (currentState.sinhVien.id === newProps.sinhVienEdit.id){
  //       currentState.sinhVien = newProps.sinhVienEdit
  //     return currentState
  //   }
  //   return null
  // }
  componentWillReceiveProps(newProps) {
    this.setState({
      sinhVien: newProps.sinhVienEdit,
    });
  }
  render() {
    let { id, name, sdt, email } = this.state.sinhVien;
    let { isEdit } = this.props;
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
            {isEdit ? (
              <input
                type='text'
                id='id'
                className='form-control'
                value={id}
                disabled={true}
              />
            ) : (
              <input
                type='text'
                id='id'
                className='form-control'
                value={id}
                onChange={(e) => {
                  this.handleChange(e.target);
                }}
              />
            )}
            <p className='text-danger'>{this.state.errors.id}</p>
          </div>
          <div className='col-6'>
            <label className='form-label'>Họ và Tên</label>
            <input
              type='text'
              id='name'
              className='form-control'
              pattern='^([a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+)$'
              value={name}
              onChange={(e) => {
                this.handleChange(e.target);
              }}
            />
            <p className='text-danger'>{this.state.errors.name}</p>
          </div>
          <div className='col-6'>
            <label className='form-label'>Số điện thoại</label>
            <input
              type='text'
              id='sdt'
              pattern='(84|0[3|5|7|8|9])+([0-9]{8})\b'
              data-type='phone'
              className='form-control'
              value={sdt}
              onChange={(e) => {
                this.handleChange(e.target);
              }}
            />
            <p className='text-danger'>{this.state.errors.sdt}</p>
          </div>
          <div className='col-6'>
            <label className='form-label'>Email</label>
            <input
              type='text'
              id='email'
              className='form-control'
              pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}'
              value={email}
              onChange={(e) => {
                this.handleChange(e.target);
              }}
            />
            <p className='text-danger'>{this.state.errors.email}</p>
          </div>
          <div className='form-group my-3'>
            <button className='btn btn-success me-2' type='submit'>
              Thêm sinh viên
            </button>
            <button
              className='btn btn-primary'
              type='button'
              onClick={() => {
                this.handleUpdate();
              }}
            >
              Cập nhật
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  sinhVienEdit: state.reactFormReducer.sinhVienEdit,
  isEdit: state.reactFormReducer.isEdit,
});

export default connect(mapStateToProps)(FormSV);
