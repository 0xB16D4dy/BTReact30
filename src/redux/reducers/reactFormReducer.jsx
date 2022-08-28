const initialState = {
  arrSinhVien: [
    {
      id: '1',
      name: 'Nguyễn Văn A',
      sdt: '0987654321',
      email: 'nguyenvana@gmail.com',
    },
    {
      id: '2',
      name: 'Nguyễn Văn B',
      sdt: '0987654321',
      email: 'nguyenvanb@gmail.com',
    },
  ],
  arrSinhVienSearch: [],
  sinhVienEdit: {
    id: '',
    name: '',
    sdt: '',
    email: '',
  },
  isSearch: false,
  isEdit: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'HANDLE_SUBMIT': {
      let { sinhVien } = payload.stateSinhVien;
      let arrSinhVienUpdate = [...state.arrSinhVien];
      let sinhVienCurrent = arrSinhVienUpdate.find(
        (sv) => sv.id === sinhVien.id
      );
      if (!sinhVienCurrent) {
        arrSinhVienUpdate.push(sinhVien);
      } else {
        alert('Sinh Viên Đã tồn tại');
      }
      state.arrSinhVien = arrSinhVienUpdate;
      return { ...state };
    }
    case 'HANDLE_DELETE': {
      let { id } = payload;
      let arrSinhVienUpdate = [...state.arrSinhVien];
      arrSinhVienUpdate = arrSinhVienUpdate.filter((sv) => sv.id !== id);
      state.arrSinhVien = arrSinhVienUpdate;
      return { ...state };
    }
    case 'HANDLE_EDIT': {
      let { sinhVienEdit, isEdit } = payload;
      let sinhVienEditUpdate = { ...state.sinhVienEdit };
      sinhVienEditUpdate = sinhVienEdit;
      state.sinhVienEdit = sinhVienEditUpdate;
      state.isEdit = isEdit;
      return { ...state };
    }
    case 'HANDLE_UPDATE': {
      let { sinhVienUpdate, isEdit } = payload;
      let arrSinhVienUpdate = [...state.arrSinhVien];
      let sinhVienEditUpdate = arrSinhVienUpdate.find(
        (sv) => sv.id === sinhVienUpdate.id
      );
      if (sinhVienEditUpdate) {
        for (let key in sinhVienEditUpdate) {
          sinhVienEditUpdate[key] = sinhVienUpdate[key];
        }
      }
      console.log(arrSinhVienUpdate);
      state.arrSinhVien = arrSinhVienUpdate;
      state.isEdit = isEdit;
      return { ...state };
    }
    case 'HANDLE_SEARCH': {
      let { valueSearch, isSearch } = payload;
      let arrSinhVienUpdate = [...state.arrSinhVien];
      arrSinhVienUpdate = arrSinhVienUpdate.filter(
        (sv) =>
          sv.id === valueSearch.trim() ||
          sv.name.toLowerCase().includes(valueSearch.trim().toLowerCase())
      );
      state.arrSinhVienSearch = arrSinhVienUpdate;
      state.isSearch = isSearch;
      return { ...state };
    }
    default:
      return state;
  }
};
