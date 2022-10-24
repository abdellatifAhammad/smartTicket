import Calendar from '@/Components/Calendar';
import Header from '@/Components/Header';
import Select from '@/Components/Select';
import { useTheme } from '@/Hooks';
import { Colors } from '@/Theme/Variables';
import moment from 'moment';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Dimensions, ScrollView, Text, View } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';

const ReservationContainer = ({navigation}) => {
    const [selected,setSelected] = useState(moment(Date.now()).format("MMM"))
    const { width, height } = Dimensions.get('window');
    const { Layout, Fonts, Common, Images } = useTheme();


    return (
        <View style={{ backgroundColor: Colors.primary, flex: 1 }}>
            <Header navigation={navigation}></Header>
            <ScrollView showsVerticalScrollIndicator={false} style={{ borderTopLeftRadius: 35, borderTopRightRadius: 35, backgroundColor: Colors.white, flex: 1, marginTop: 30, paddingBottom: 50, paddingHorizontal: 20, paddingVertical: 20 }}>
                <View style={[Layout.row,{marginTop:20}]}>
                    <Icon name="filter-outline" size={20} color={Colors.text} ></Icon>
                    <Text style={[{ marginHorizontal: 10 }, Fonts.h5]}>Ticket Reservation</Text>
                </View>
                <Select style={{marginTop:25}} selectValue={(val)=>{setSelected(val)}} defaultValue={selected}  data={moment.monthsShort()} label="Month"></Select>
                <Text style={[{marginVertical:20}, Fonts.h5]}>Calendar</Text>
                <Calendar month={selected}></Calendar>
            </ScrollView>
        </View>
    )
};

export default ReservationContainer;
