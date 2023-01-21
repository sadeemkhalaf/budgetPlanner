import React from 'react'
import { Image, ImageRequireSource } from 'react-native'
import { authStyles } from './styles'


const logo = require('./../../../assets/imgs/short-logo.png') as ImageRequireSource;

const LogoHeader = () => {
    return (
        <Image source={logo} resizeMode={'contain'} style={[authStyles.headerLogo]} />
    )
}

export default LogoHeader