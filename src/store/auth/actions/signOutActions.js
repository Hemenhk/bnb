import axios from "axios"


export const signOutAction = async () => {
    await axios.post("https://movstar-api.herokuapp.com/api/users/signout")
}