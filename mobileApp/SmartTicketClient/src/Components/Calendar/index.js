import { useTheme } from '@/Hooks';
import { Colors } from '@/Theme/Variables';
import moment from 'moment';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { ActivityIndicator, Dimensions, Text, TouchableOpacity, View } from 'react-native';

const Calendar = ({ month }) => {
    const [days,setDays] = useState([]);
    var NUM_DAYS = [];
    const { Common, Layout, Fonts } = useTheme();
    const {width,height} = Dimensions.get('window');
    const [listOfDays,setListOfDays] = useState([]);
    const [loading,setLaoding] = useState(true);

    useEffect(() => {
        setLaoding(true)
        let list=[];
        const year = moment(Date.now()).year();
        for (let index = 0; index < 7; index++) {
            list.push(moment(year+ "-"+month+"-"+(index+1),'YYYY-MMM-DD').format('dd').substring(0,1))
        }
        setListOfDays(list);
        setDays(new Array(moment(moment(Date.now()).year() + "-" + month, "YYYY-MMM").daysInMonth()).fill('m'));
        setLaoding(false);
    }, [month]);

    return (
        <>
        {!loading?
        <View>
            <View style={[Layout.row, { flexWrap: 'wrap',justifyContent:'space-between'}]}>
                {listOfDays.map((el, index) => {
                    return (
                        <TouchableOpacity key={"claDay-" + index} style={[Common.calanderDaysNames]}>
                                <Text style={[Fonts.h5, { color: Colors.text, lineHeight: 20 }]}>{el}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
            <View style={[Layout.row, { flexWrap: 'wrap',}]}>
                {days.map((ele, index) => {
                    if (ele == "l") {
                        return (
                            <TouchableOpacity key={"cla-" + index} style={[Common.calanderDay]}>
                                <Text style={[Fonts.h5, { color: Colors.textMute, lineHeight: 20 }]}>{index + 1}</Text>
                            </TouchableOpacity>
                        )
                    } else {
                        return (
                            <TouchableOpacity key={"cla-" + index} style={[Common.calanderDayActive]}>
                                <Text style={[Fonts.h5, { color: Colors.textMute, lineHeight: 20 }]}>{index + 1}</Text>
                            </TouchableOpacity>
                        )
                    }
                })}
            </View>
        </View>:<ActivityIndicator size={"large"} style={{marginTop:50}}></ActivityIndicator>}
        </>
    )
};

export default Calendar;
