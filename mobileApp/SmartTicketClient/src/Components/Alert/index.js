import { useTheme } from '@/Hooks';
import { Colors } from '@/Theme/Variables';
import React from 'react';
import { Text, View } from 'react-native';

const AlertBox = ({text,type,style}) => { 
    const  {Common,Fonts} = useTheme();
    const types = {"danger":Common.dangerAlert,"success":Common.successAlert,"warning":Common.warningAlert}
    return(
    <View style={[types[type],{...style}]}>
        <Text style={[Fonts.h5,{color:Colors.white}]}>{text}</Text>
    </View>
)};

export default AlertBox;
