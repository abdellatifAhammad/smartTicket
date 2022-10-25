import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@/Hooks';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { Colors } from '@/Theme/Variables';


const Header = ({navigation}) => {
    const {Layout,Common,Fonts} = useTheme();
    return (
        <View style={[Layout.rowHCenter,Layout.justifyContentBetween, {marginHorizontal:20,paddingTop:20}]}>
            <TouchableOpacity onPress={()=>navigation.openDrawer()} style={{padding:1}}>
                <Icon name="menu" size={24} color={Colors.white} ></Icon>
            </TouchableOpacity>
            <View style={[Layout.rowHCenter, {}]}> 
                <Text style={[Fonts.textSmall,{marginHorizontal:10,color:Colors.white,opacity:0.85}]}>Hi, abdellatif</Text>
                <View style={{borderRadius:20,width:35,height:35,overflow:'hidden',backgroundColor:Colors.white}}>
                    {/* <ImageBackground source={{uri:'https://images.unsplash.com/photo-1661961110218-35af7210f803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'}} style={{width:35,height:35,backgroundColor:'gray',borderRadius:20}} ></ImageBackground> */}
                </View>
            </View>
        </View>
    )
};

export default Header;
