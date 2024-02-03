const SUCCESS = "SUCCESS"
const ERROR = "ERROR"
export function showSuccess(data){
    return {
        type: SUCCESS,
        payload:data
    }
}

export function showError(errormm){
    return {
        type: ERROR,
        payload: errormm
    }
}
