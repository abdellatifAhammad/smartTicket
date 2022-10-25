/**
 * This file contains all application's style relative to fonts
 */
import { StyleSheet } from 'react-native'

/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function ({ FontSize, Colors }) {
  return StyleSheet.create({
    h1:{
      fontSize: 30,
      color: Colors.text,
      fontFamily:'Poppins-SemiBold',
      color:Colors.text,
    },
    h2:{
      fontSize: 25,
      color: Colors.text,
      fontFamily:'Poppins-SemiBold',
      color:Colors.text,
    },
    h3:{
      fontSize: 20,
      color: Colors.text,
      fontFamily:'Poppins-SemiBold',
      color:Colors.text,
    },
    h4:{
      fontSize: 15,
      color: Colors.text,
      fontFamily:'Poppins-SemiBold',
      color:Colors.text,
    },
    h5:{
      fontSize: 14,
      color: Colors.text,
      fontFamily:'Poppins-SemiBold',
      color:Colors.text,
      fontWeight:'600',
    },
    a:{
      fontSize: 15,
      color: Colors.tet,
      fontFamily:'Poppins-Medium',
      color:Colors.primary,
      fontWeight:'600',
    },
    p:{
      fontSize: 14,
      color: Colors.tet,
      fontFamily:'Poppins-Medium',
      color:Colors.textMute,
      fontWeight:'600',
    },

    textSmall: {
      fontSize: FontSize.small,
      color: Colors.text,
      fontFamily:'Poppins'
    },
    textRegular: {
      fontSize: FontSize.regular,
      color: Colors.text,
      fontFamily:'Poppins'
    },
    textLarge: {
      fontSize: FontSize.large,
      color: Colors.text,
      fontFamily:'Poppins'
    },
    titleSmall: {
      fontSize: FontSize.small * 2,
      fontWeight: 'bold',
      color: Colors.text,
      fontFamily:'Poppins'
    },
    titleRegular: {
      fontSize: FontSize.regular * 2,
      fontWeight: 'bold',
      color: Colors.text,
      fontFamily:'Poppins'
    },
    titleLarge: {
      fontSize: FontSize.large * 2,
      fontWeight: 'bold',
      color: Colors.text,
      fontFamily:'Poppins'
    },
    textCenter: {
      textAlign: 'center',
    },
    textJustify: {
      textAlign: 'justify',
    },
    textLeft: {
      textAlign: 'left',
    },
    textRight: {
      textAlign: 'right',
    },
  })
}
