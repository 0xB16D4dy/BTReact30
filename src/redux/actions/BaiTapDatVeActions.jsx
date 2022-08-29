import { DAT_GHE, HUY_GHE } from "../types/BaiTapDatVeTypes"

export const datGheAction = (ghe) => {
    return {
        type:DAT_GHE,
        payload:{
            ghe:ghe
        }
    }
}

export const huyGheAction = (ghe) => {
    return {
        type:HUY_GHE,
        payload:{
            soGhe:ghe.soGhe
        }
    }
}