import React from 'react'
import { Button } from 'react-native'

function GoogleSignin() {
    return (
        <Button
            title="Google Sign-in"
            onPress={() => onGoogleButtonPress().then(() => console.log('Sign with google'))}
        />
    )
}