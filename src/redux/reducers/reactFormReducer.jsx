const initialState = {
  arrSinhVien: [
    {
      id: 1,
      name: 'Nguyễn Văn A',
      sdt: '0987654321',
      email: 'nguyenvana@gmail.com',
    },
    {
      id: 2,
      name: 'Nguyễn Văn B',
      sdt: '0987654321',
      email: 'nguyenvanb@gmail.com',
    },
  ],
  sinhVien:{
    id:0,
    name:'',
    sdt:0,
    email:''
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'HANDLE_SUBMIT':{
      let {sinhVienCapNhat} = payload;
      let arrSinhVienUpdate = [...state.arrSinhVien];
      let sinhVienCurrent = arrSinhVienUpdate.find(sv => sv.id === sinhVienCapNhat.id);
      if(!sinhVienCurrent){
        arrSinhVienUpdate.push(sinhVienCapNhat);
      }else{
        alert('Sinh Viên Đã tồn tại');
      }
      state.arrSinhVien = arrSinhVienUpdate;
      return {...state}
    }
    case 'HANDLE_CHANGE_INPUT': {
      let{value,id} = payload;
      let sinhVienCapNhat = {...state.sinhVien};
      sinhVienCapNhat[id] = value;
      state.sinhVien = sinhVienCapNhat;
      return {...state}
    }
    default:
      return state;
  }
};
