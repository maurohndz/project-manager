import { CHENGE_COLOR } from '../types/appTypes.js'

export const changeColorLayout = (color) => {
  return {
    type: CHENGE_COLOR,
    payload: color
  }
}
