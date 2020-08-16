export const CHANGE_STAGE = 'CHANGE_STAGE'
export const CHOOSE_PAYMENT = 'CHOOSE_PAYMENT'
export const CHOOSE_PROJECT = 'CHOOSE_PROJECT'
export const WRITE_DATA = 'WRITE_DATA'


export function changeStage(data){
    return {
        type: CHANGE_STAGE,
        payload: data
    }
}

export function chooseProject(data){
    return {
        type: CHOOSE_PROJECT,
        payload: data
    }
}

export function choosePayment(data){
    return {
        type: CHOOSE_PAYMENT,
        payload: data
    }
}

export function writeData(data){
    return {
        type: WRITE_DATA,
        payload: data
    }
}