export const changeFirstName = val => {
    console.log("in changeFirstName", val)
    return {
        type: "firstName",
        payload: val
    }
}

export const changeLastName = val => {
    return {
        type: "lastName",
        payload: val
    }
}

export const changeMobileNo = val => {
    return {
        type: "mobileNo",
        payload: val
    }
}

export const changeStoreName = val => {
    return {
        type: "storeName",
        payload: val
    }
}

export const changeStoreIndustry = val => {
    return {
        type: "storeIndustry",
        payload: val
    }
}