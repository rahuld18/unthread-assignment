const storeReducer = (state = {firstName: "", lastName: "", mobileNo: "", storeName: "", storeIndustry: ""}, action) => {
    switch (action.type) {
        case "firstName":
            return {...state, firstName: action.payload};
        case "lastName":
            return {...state, lastName: action.payload};
        case "mobileNo":
            return {...state, mobileNo: action.payload};
        case "storeName":
            return {...state, storeName: action.payload};
        case "storeIndustry":
            return {...state, storeIndustry: action.payload};
        default:
            return state;
    }
}

export default storeReducer;