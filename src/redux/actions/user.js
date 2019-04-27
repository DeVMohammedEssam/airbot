import axios from "axios";
export const travellerOnChange = (userData) => ({
    type: "TRAVELLER_ON_CHANGE",
    userData
})
export const companyOnChange = (userData) => ({
    type: "COMPANY_ON_CHANGE",
    userData
})
export const setUserType = (userType) => ({
    type: "SET_USER_TYPE",
    userType
})

export const logout = () => ({
    type: "LOGOUT"
})


const innerLogin = (userData) => ({
    type: "LOGIN",
    userData: {
        email: userData.email,
        gender: userData.gender,
        type: userData.type,
        id: userData.id
    }
})
export const login = () => {
    return (dispatch) => {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
        axios.get("http://localhost:5000/api/user/").then(({ data }) => {
            console.log(data)
            dispatch(innerLogin(data.user));

        })
    }


}


