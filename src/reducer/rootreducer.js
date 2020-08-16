import state from "../constant/index"
import { CHANGE_STAGE, CHOOSE_PROJECT,CHOOSE_PAYMENT, WRITE_DATA } from "../action/action"

const reducer = (data = state, action) => {

    switch (action.type) {
        case CHANGE_STAGE: {
            const currentStage = data.stage;
            if (currentStage + action.payload < 4 && currentStage + action.payload > 0) {
                return {
                    ...data,
                    stage: currentStage + action.payload
                }
            }
            return data
        }
        case CHOOSE_PROJECT:{
            return {
                ...data,
                project: action.payload
            }
        }
        case CHOOSE_PAYMENT:{
            return {
                ...data,
                payment: action.payload
            }
        }
        case WRITE_DATA:{
            let newStore = {...data};
            newStore[action.payload.key] = action.payload.value;
            return newStore
        }
        default:
            return data
    }
}

export default reducer;