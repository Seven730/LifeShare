import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import RedirectHandler from "./RedirectHandler";

const AUTH = firebase.auth;
const PASSWORD_SHOULD_BE_THE_SAME = "Passwords should be the same"

export default class UserAuthenticationHandler {

    static user;

    static addListener(callback) {
        const myCallback = (user) => {
            UserAuthenticationHandler.user = user
            callback(user)
        }
        AUTH().onAuthStateChanged(myCallback)
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
                        firebase.firestore().collection('users').doc(currUser.uid).set({
                            email: currUser.email,
                            username: currUser.displayName

                        }).then(() => {
                            RedirectHandler.redirectToImages()
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
                RedirectHandler.redirectToImages()
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
            }).then(() => { RedirectHandler.redirectToImages() })
        })
    }

    static signOut() {
        AUTH().signOut()
            .then(() => RedirectHandler.redirectToHome())
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
                }).then(() => { RedirectHandler.redirectToAccount() })
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
                }).then(() => { RedirectHandler.redirectToAccount() })
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
            .then(() => RedirectHandler.redirectToAccount())
            .catch(error => {
                console.error(error)
                return onErrorMessageHandler(error.message)
            })
    }




}