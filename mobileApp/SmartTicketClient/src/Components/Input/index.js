import { useTheme } from '@/Hooks';
import { Colors } from '@/Theme/Variables';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Input = ({ label, placeholder, password, icon,style }) => {
    const { Fonts, Common, Layout } = useTheme()
    return (
        <View style={[{...style}]}>
            <Text style={[Fonts.h4]}>{label}</Text>
            <View style={[Common.textInput, Layout.rowCenter]}>
                <TextInput placeholder={placeholder} secureTextEntry={password} style={[Fonts.p, { paddingLeft: 25, fontWeight: '600', width: icon ? '85%' : '100%' }]} cursorColor={Colors.text}></TextInput>
                {icon ?
                    <TouchableOpacity>
                        <Icon name={icon} size={22} color={Colors.text}></Icon>
                    </TouchableOpacity> : <></>}
            </View>
        </View>
    )
};

export default Input;
