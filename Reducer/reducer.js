const reducer = (state, action) => {
    switch (action.type) {
        case "PAYMENT":
            return { ...state, payment: action.payload }
            break;
        case "SAVING":
            return { ...state, saving: action.payload }
            break;
        case "MONDAY":
            return { ...state, monday: action.payload }
            break;
        case "TUSEDAY":
            return { ...state, tuseday: action.payload }
            break;
        case "WEDNESDAY":
            return { ...state, wednesday: action.payload }
            break;
        case "THIRTHDAY":
            return { ...state, thirthday: action.payload }
            break;
        case "FRIDAY":
            return { ...state, friday: action.payload }
            break;
        case "SATURDAY":
            return { ...state, saturday: action.payload }
            break;
        case "SUNDAY":
            return { ...state, sunday: action.payload }
            break;
        case "ALL":
            return state
            break;
        default:
            return state
    }
}

export default reducer