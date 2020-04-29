import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { path as ImageGalleryPath } from "../Screens/ImageGallery/ImageGallery"
import { path as HomePath } from "../Screens/Home/Home"
import { createBrowserHistory } from "history"
import { path as MyGalleryPath } from "../Screens/MyPhotos/MyPhotos"


const AUTH = firebase.auth;
const PASSWORD_SHOULD_BE_THE_SAME = "Passwords should be the same"

export default class UserAuthenticationHandler {

    static addListener(callback) {
        AUTH().onAuthStateChanged(callback)
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
        AUTH().createUserWithEmailAndPassword(email, password)
            .then((user) => {

                const currUser = firebase.auth().currentUser
                currUser.updateProfile({ displayName: username })
                    .then(() => {
                        console.log(currUser);
                        firebase.firestore().collection('users').doc(currUser.uid).set({
                            email: currUser.email,
                            username: currUser.displayName

                        }).then(() => {
                            UserAuthenticationHandler.redirectToImages()
                        })

                    })
            })
            .catch((error) => {
                console.error(error)
                return onErrorMessageHandler(error.message)
            })
    }


    static signInWithPassword(state, onErrorMessageHandler) {
        const { email, password } = state;
        AUTH().signInWithEmailAndPassword(email, password)
            .then(() => {
                UserAuthenticationHandler.redirectToImages()
            })
            .catch((error) => {
                console.error(error)
                return onErrorMessageHandler(error.message)
            })

    }

    static signInWithProvider(provider) {
        AUTH().signInWithPopup(provider).then(result => {
            const currUser = AUTH().currentUser
            firebase.firestore().collection('users').doc(currUser.uid).set({
                email: currUser.email,
                username: currUser.displayName
            }).then(() => { UserAuthenticationHandler.redirectToHome() })
        })
    }

    static signOut() {
        AUTH().signOut()
            .then(() => UserAuthenticationHandler.redirectToHome())
            .catch(e => console.error(e))
    }

    static changeEmail(newEmail, onErrorMessageHandler = () => { }) {
        const user = AUTH().currentUser
        if (!user) return
        user.updateEmail(newEmail)
            .then(() => {
                const currUser = AUTH().currentUser
                firebase.firestore().collection('users').doc(currUser.uid).set({
                    email: currUser.email,
                    username: currUser.displayName
                }).then(() => { UserAuthenticationHandler.redirectToHome() })
            })
            .catch((error) => {
                console.error(error)
                return onErrorMessageHandler(error.message)
            })
    }

    static changeUsername(username, onErrorMessageHandler = () => { }) {
        const user = AUTH().currentUser
        if (!user) return
        user.updateProfile({ displayName: username })
            .then(() => {
                const currUser = AUTH().currentUser
                firebase.firestore().collection('users').doc(currUser.uid).set({
                    email: currUser.email,
                    username: currUser.displayName
                }).then(() => { UserAuthenticationHandler.redirectToHome() })
            })
            .catch(error => {
                console.error(error)
                return onErrorMessageHandler(error.message)
            })
    }

    static changePassword(password, passwordRepeat, onErrorMessageHandler = () => { }) {
        const user = AUTH().currentUser
        if (!user) return
        const result = UserAuthenticationHandler.validateRegistration({ password, passwordRepeat })
        if (result.error) {
            onErrorMessageHandler(result.message)
            return
        }
        user.updatePassword(password)
            .then(() => UserAuthenticationHandler.redirectToHome())
            .catch(error => {
                console.error(error)
                return onErrorMessageHandler(error.message)
            })
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
    static redirectToMyGallery() {
        const history = createBrowserHistory()
        history.push(MyGalleryPath)
        history.go()
    }


}