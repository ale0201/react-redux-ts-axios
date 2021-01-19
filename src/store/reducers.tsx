import initData from './initstate'

interface Action {
  type: string,
  data: object
}

const reducers = (state: Action = initData, action: Action) => {
  if (action.type === 'login') {
    return { ...state, ...action }
  }
  return state
}

export default reducers