import Header from '@/Components/Header';
import Input from '@/Components/Input';
import { useTheme } from '@/Hooks';
import { Colors } from '@/Theme/Variables';
import React from 'react';
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const RegisterContainer = ({navigation }) => {
    const { Images, Layout, Common,Fonts } = useTheme();
    return (
        <View style={{ backgroundColor: Colors.primary, flex: 1 }}>
            {/* <Header></Header> */}
            <View style={[{ width: '100%', marginTop: 30 }, Layout.rowCenter]}>
                <View style={[{ width: 100 * 1.3, height: 55 * 1.3 }]}>
                    <ImageBackground style={{ height: '100%' }} source={Images.logo}></ImageBackground>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{ borderTopLeftRadius: 35,borderTopRightRadius: 35, backgroundColor: Colors.white, flex: 1, marginTop: 30, paddingBottom: 50, paddingHorizontal: 20, paddingVertical: 20 }}>
                <Text style={[Fonts.h2,{textAlign:'center',marginTop:15}]}>
                Let’s get started !
                </Text>
                <Text style={[Fonts.p,{textAlign:'center',marginTop:10}]}>Create an accunt to start using smart ticket</Text>
                <Input style={{marginTop:20}} label={"First Name"} placeholder="first name"></Input> 
                <Input style={{marginTop:20}} label={"Last Name"} placeholder="last name"></Input> 
                <Input style={{marginTop:20}} label={"School Email"} placeholder="example@insea.ac.ma"></Input> 
                <Input style={{marginTop:10}} label={"Password"} password={true} placeholder="password" icon={'eye'}></Input>  
                <Input style={{marginTop:10}} label={"Confirm Password"} password={true} placeholder="password" icon={'eye-off'}></Input>  
                <TouchableOpacity style={[Common.primaryBtn,{marginTop:20}]}>
                    <Text style={[Fonts.h3,{color:Colors.white}]}>
                        Register
                    </Text>
                </TouchableOpacity>
                <View style={[Layout.rowHCenter,Layout.justifyContentBetween,{marginTop:25}]}>
                    <View style={{height:2,width:'40%',backgroundColor:Colors.primary}}></View>
                    <Text>Or</Text>
                    <View style={{height:2,width:'40%',backgroundColor:Colors.primary}}></View>
                </View>
                <View style={[Layout.rowCenter]}>
                 <Text style={[Fonts.h5,{color:Colors.textMute,textAlign:'center',marginTop:20,lineHeight:40}]}>Already have an account ? , </Text>
                 <TouchableOpacity onPress={()=>{navigation.navigate('Login')}} style={[Layout.rowVCenter,{height:40}]}><Text style={[Fonts.h5,{color:Colors.success,lineHeight:55,marginLeft:5,textAlign:'center'}]}>Login</Text></TouchableOpacity>
                </View>
                <View style={{marginBottom:60}}></View>
            </ScrollView>
        </View>
    )
};

export default RegisterContainer;
