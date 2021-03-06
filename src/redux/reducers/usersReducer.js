const defaultState = {
    userType: "",
    traveller: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "male",
        age: "",
        phone: ""
    },
    company: {
        password: "",
        companyName: "",
        companyEmail: "",
        address: "",
        establishment_date: "",
        describtion: "",
        companyPasswordConfirmation: "",
        facebookLink: "",
        LinkedInLink: "",
        twitterLink: "",
        imageFileReader: ""
    },
    loggedUser: null

};
const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_USER_TYPE":
            return { ...state, userType: action.userType }
        case "TRAVELLER_ON_CHANGE":
            return ({ ...state, traveller: { ...state.traveller, ...action.userData } });
        case "COMPANY_ON_CHANGE":
            return { ...state, company: { ...state.company, ...action.userData } };

        case "LOGIN":
            return ({ ...state, loggedUser: { ...action.userData } });
        case "LOGOUT":
            localStorage.removeItem("token")
            return { ...state, loggedUser: null };
        default: return state;
    }
}

export default userReducer;