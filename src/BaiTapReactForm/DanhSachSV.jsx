import React, { Component } from 'react';
import { connect } from 'react-redux';

class DanhSachSV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrSinhVienCurrent: [],
    };
  }
  renderTable = (arraySV) => {
    return arraySV.map((sv, index) => {
      return (
        <tr key={index}>
          <td>{sv.id}</td>
          <td>{sv.name}</td>
          <td>{sv.sdt}</td>
          <td>{sv.email}</td>
          <td>
            <button
              className='btn btn-danger me-2'
              onClick={() => {
                const action = {
                  type: 'HANDLE_DELETE',
                  payload: {
                    id: sv.id,
                  },
                };
                this.props.dispatch(action);
              }}
            >
              Delete
            </button>
            <button
              className='btn btn-primary'
              onClick={() => {
                const action = {
                  type: 'HANDLE_EDIT',
                  payload: {
                    sinhVienEdit: sv,
                  },
                };
                this.props.dispatch(action);
              }}
            >
              Edit
            </button>
          </td>
        </tr>
      );
    });
  };
  handleSearch = (tagInput) => {
    const action = {
      type: 'HANDLE_SEARCH',
      payload: {
        valueSearch: tagInput.value,
      },
    };
      this.props.dispatch(action);
  }
  static getDerivedStateFromProps(newProps,currentState){
    if(newProps.arrSinhVienSearch.length!==0){
      currentState.arrSinhVienCurrent =  newProps.arrSinhVienSearch;
    }
    else{
      currentState.arrSinhVienCurrent = newProps.arrSinhVien;
    }
    return currentState
  }
  render() {
    let { arrSinhVienCurrent } = this.state;
    return (
      <div className='mt-3'>
        <div className='search-wrapper d-flex my-3' role='search'>
          <input
            className='form-control me-2'
            type='search'
            placeholder='Search id or name'
            aria-label='Search'
            onChange={(e) => {
              this.handleSearch(e.target);
            }}
          />
          <button className='btn btn-outline-success' type='submit'>
            Search
          </button>
        </div>
        <table className='table'>
          <thead className='bg-dark text-white'>
            <tr>
              <th>Mã SV</th>
              <th>Họ và Tên</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderTable(arrSinhVienCurrent)}</tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  arrSinhVien: state.reactFormReducer.arrSinhVien,
  arrSinhVienSearch: state.reactFormReducer.arrSinhVienSearch,
});

export default connect(mapStateToProps)(DanhSachSV);
