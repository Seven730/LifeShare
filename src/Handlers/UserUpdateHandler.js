import UserAuthenticationHandler from './UserAuthenticationHandler'


export default class UserUpdateHandler {

    static errorHandler = () => {}

    static changeEmail(event) {
        event.preventDefault()
        const {target} = event
        const primary = target.querySelector("#primary")
        UserAuthenticationHandler.changeEmail(primary.value, UserUpdateHandler.errorHandler)
    }

    static changeUsername(event) {
        event.preventDefault()
        const {target} = event
        const primary = target.querySelector("#primary")
        console.log(primary.value)
        // UserAuthenticationHandler.changeUsername(primary.value)
    }

    static changePassword(event) {
        event.preventDefault()

    }
}