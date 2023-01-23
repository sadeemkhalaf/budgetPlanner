import React from 'react'
import { Image, ImageRequireSource } from 'react-native'
import { authStyles } from '../../screens/auth/styles'


const logo = require('./../../../assets/imgs/short-logo.png') as ImageRequireSource;

export const LogoHeader = () => {
    return (
        <Image source={logo} resizeMode={'contain'} style={[authStyles.headerLogo]} />
    )
}
