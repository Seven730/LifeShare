import UserAuthenticationHandler from './UserAuthenticationHandler'


export default class UserUpdateHandler {

    static errorHandler = () => { }

    static changeEmail(event) {
        event.preventDefault()
        const { target } = event
        const primary = target.querySelector("#primary")
        UserAuthenticationHandler.changeEmail(primary.value, UserUpdateHandler.errorHandler)
    }

    static changeUsername(event) {
        event.preventDefault()
        const { target } = event
        const primary = target.querySelector("#primary")
        UserAuthenticationHandler.changeUsername(primary.value, UserUpdateHandler.errorHandler)
    }

    static changePassword(event) {
        event.preventDefault()
        const { target } = event
        const primary = target.querySelector("#primary")
        const secondary = target.querySelector("#secondary")
        UserAuthenticationHandler.changePassword(primary.value, secondary.value, UserUpdateHandler.errorHandler)
    }
}