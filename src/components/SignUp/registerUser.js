import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebase";

export const regUser = async (email, password) => {
    const user = await createUserWithEmailAndPassword(auth, email, password)
        .catch(error => console.error(error))
    return user
}