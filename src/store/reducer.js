import { INTER, READY, SAVE_ANSWER, SAVE_LOGIN, SAVE_LOGOUT, TIME } from "./type"

export const initialState = {
  isLogin:false,
  already:false,
  timer:null,
  answers:[],
  
}

// blacklist = list of non persisted state
// export const blacklist = ['chatActive']

export const RootReducer = (state = initialState, action) => {
  switch (action.type) {
 
    case SAVE_LOGIN:
      return { ...state, isLogin: true }
      case SAVE_LOGOUT:
        return { ...state, isLogin: false }
        case READY:
          return { ...state, already: true }
          case TIME:
          return { ...state, timer: action.timer }
          case SAVE_ANSWER:
          return { ...state, answers: action.answers }
          
    default:
      return state
  }
}
