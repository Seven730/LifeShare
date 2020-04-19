import * as firebase from "firebase/app";
import "firebase/auth";
import {path as ImageGalleryPath} from "../Screens/ImageGallery/ImageGallery"
import {path as HomePath} from "../Screens/Home/Home"
import { createBrowserHistory } from "history"


const PASSWORD_SHOULD_BE_THE_SAME = "Passwords should be the same"

export default class UserAuthenticationHandler {

    static addListener(callback) {
        firebase.auth().onAuthStateChanged(callback)
    }

    static setValidationResult(message) {
        return { error: true, message }
    }

 
    static validateRegistration(state) {
        const { password, passwordRepeat } = state;
        if (password !== passwordRepeat) return UserAuthenticationHandler.setValidationResult(PASSWORD_SHOULD_BE_THE_SAME)

        return { error: false }
    }

    static register(state, onErrorMessageHandler) {
        const { email, password, username } = state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                firebase.auth().currentUser.updateProfile({displayName:username})
                .then(user=>{
                    UserAuthenticationHandler.redirectToImages()
                })
            })
            .catch((error) => {
                console.error(error)
                return onErrorMessageHandler(error.message)
            })
    }

    static signInWithPassword(state, onErrorMessageHandler) {
        const { email, password } = state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                UserAuthenticationHandler.redirectToImages()
            })
            .catch((error) => {
                console.error(error)
                return onErrorMessageHandler(error.message)
            })

    }

    static signInWithProvider(provider) {
        firebase.auth().signInWithPopup(provider).then(result => {
            UserAuthenticationHandler.redirectToHome()
        })
    }

    static signOut() {
        firebase.auth().signOut()
            .then(() => UserAuthenticationHandler.redirectToHome())
            .catch(e => console.error(e))
    }

    static redirectToImages() {
        const history = createBrowserHistory()
        history.push(ImageGalleryPath)
        history.go()
    }
    static redirectToHome() {
        const history = createBrowserHistory()
        history.push(HomePath)
        history.go()
    }

}