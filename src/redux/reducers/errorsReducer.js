const errorsReducer = (state = {}, action) => {
    switch (action.type) {
        case "SET_ERROR":
            return { ...state, ...{ [action.errorName]: action.msg } };
        default: return state;
    }
}
export default errorsReducer;
