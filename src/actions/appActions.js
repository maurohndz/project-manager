import { CHANGE_BOARD_COLOR } from '../types/dataTypes'

export const changeBoardColor = (color) => {
  return {
    type: CHANGE_BOARD_COLOR,
    payload: color.value
  }
}
