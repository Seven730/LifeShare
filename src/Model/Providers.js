import * as firebase from 'firebase/app'
import 'firebase/auth'

const facebookProvider = () => {
    const provider = new firebase.auth.FacebookAuthProvider()
    provider.addScope('email')
    provider.setCustomParameters({
        'display': 'popup'
    });
    return provider
}

const Providers = {
    'google': new firebase.auth.GoogleAuthProvider(),
    'facebook': facebookProvider()
}

export default Providers