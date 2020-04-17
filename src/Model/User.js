const User = {
    "uid": String(),
    "displayName": String(),
    "photoURL": String(),
    "email": String(),
    "emailVerified": Boolean(),
    "phoneNumber": String(),
    "isAnonymous": Boolean(),
    "tenantId": String(),
    "providerData": [{
        "uid": String(),
        "displayName": String(),
        "photoURL": String(),
        "email": String(),
        "phoneNumber": String(),
        "providerId": String()
    }],
    "apiKey": String(),
    "appName": Object(),
    "authDomain": String(),
    "stsTokenManager": {
        "apiKey": String(),
        "refreshToken": String(),
        "accessToken": String(),
        "expirationTime": Number()
    },
    "redirectEventId": String(),
    "lastLoginAt": String(),
    "createdAt": String(),
    "multiFactor": { "enrolledFactors": [] }
}

export default User