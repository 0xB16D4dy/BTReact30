import React, { Component } from 'react'
import DanhSachSV from './DanhSachSV'
import FormSV from './FormSV'

export default class ReactForm extends Component {
  render() {
    return (
      <div className='container my-5'>
        <FormSV/>
        <DanhSachSV/>
      </div>
    )
  }
}
