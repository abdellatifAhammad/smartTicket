/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import { StyleSheet } from 'react-native'
import buttonStyles from './components/Buttons'
/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function ({ Colors, ...args }) {
  return {
    button: buttonStyles({ Colors, ...args }),
    ...StyleSheet.create({
      backgroundPrimary: {
        backgroundColor: Colors.primary,
      },
      backgroundReset: {
        backgroundColor: Colors.transparent,
      },
      textInput: {
        borderWidth: 1,
        borderColor: Colors.primary,
        backgroundColor: Colors.white,
        borderRadius:10,
        color: Colors.text,
        maxHeight: 50,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
      },
      primaryBtn:{
        backgroundColor:Colors.primary,
        height:50,
        width:'100%',
        display:'flex',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:10,
        elevation:2
      },
      select:{
        borderRadius:10,
        borderWidth: 1,
        borderColor: Colors.primary,
        backgroundColor: Colors.white,
      },
      calanderDayActive:{
        width:40,
        height:40,
        borderRadius:20,
        borderWidth: 1,
        backgroundColor:Colors.successLight,
        borderColor: Colors.primary,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginRight:5,
        marginBottom:8
      },
      calanderDaysNames:{
        width:40,
        height:40,
        backgroundColor:Colors.white,
        // borderRadius:20,
        // borderWidth: 1,
        // borderColor: Colors.primary,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginRight:8,
        marginBottom:8
      },
      calanderDay:{
        width:40,
        height:40,
        backgroundColor:Colors.white,
        borderRadius:20,
        borderWidth: 1,
        borderColor: Colors.primary,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginRight:8,
        marginBottom:8
      },
      dangerAlert:{
        backgroundColor:Colors.error,
        padding:15,
        borderRadius:10
      },
      warningAlert:{
        backgroundColor:Colors.warning,
        padding:15,
        borderRadius:10
      },
      successAlert:{
        backgroundColor:Colors.success,
        padding:15,
        borderRadius:10
      }
    }),
  }
}
