import {
    Action, SET_COLOR
} from './actions'

const initialstate = {
    color: ''
}

export default (state = initialstate, action: Action) => {
    console.log(action)
    switch (action.type) {
        case SET_COLOR:
            return {
                ...state,
                color: action.payload
            }
        default:
            return state
    }
}