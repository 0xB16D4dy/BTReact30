import { DAT_GHE, HUY_GHE } from "../types/BaiTapDatVeTypes";

const initialState = {
  danhSachGheDangDat: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case DAT_GHE:{
      let {ghe}  = payload;
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      let index = danhSachGheDangDatUpdate.findIndex(gheDangdat=>gheDangdat.soGhe === ghe.soGhe)
      if (index !== -1){
        danhSachGheDangDatUpdate.splice(index,1);
      }
      else
      {
        danhSachGheDangDatUpdate.push(ghe)
      }
      state.danhSachGheDangDat = danhSachGheDangDatUpdate
      return {...state}
    }
    case HUY_GHE:{
      let {soGhe} = payload
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      state.danhSachGheDangDat = danhSachGheDangDatUpdate.filter(gheDangDat=>gheDangDat.soGhe !== soGhe)
      return {...state}
    }
    default:
      return state;
  }
};
