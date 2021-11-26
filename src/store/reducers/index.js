import { combineReducers } from "redux";
import users from "./users"
import types from "./types"
import  brands from "./brands"
import device from "./device"
export default combineReducers({
  users,
  types,
  brands,
  device
})
