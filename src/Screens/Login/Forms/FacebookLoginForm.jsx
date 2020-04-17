import React from 'react'
import { Button } from 'react-bootstrap'
import UserAuthenticationHandler from '../../../Handlers/UserAuthenticationHandler'
import Providers from '../../../Model/Providers'

export default function FacebookLoginForm() {

    const signIn = () => {
        UserAuthenticationHandler.signInWithProvider(Providers.facebook)
    }

    return (
        <Button onClick={signIn}>login with facebook</Button>
    )
}
