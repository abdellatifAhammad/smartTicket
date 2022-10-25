import { useTheme } from '@/Hooks';
import { Colors } from '@/Theme/Variables';
import moment from 'moment';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { ActivityIndicator, Alert, Dimensions, Modal, Text, TouchableOpacity, View } from 'react-native';
// import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';


const Calendar = ({ month }) => {
    const [days, setDays] = useState([]);
    var NUM_DAYS = [];
    const { Common, Layout, Fonts } = useTheme();
    const { width, height } = Dimensions.get('window');
    const listOfDays = ['SA', 'SU', 'MO', 'TU', 'WE', 'TH', 'FR'];
    const [loading, setLaoding] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [breakfast, setBreakFast] = useState(false);
    const [dinner, setDinner] = useState(false);
    const [lunch, setLunch] = useState(false);


    useEffect(() => {
        setLaoding(true)
        let list = [];
        const year = moment(Date.now()).year();
        const days_num = moment(year + "-" + month, "YYYY-MMM").daysInMonth();
        var first_day_name = moment(year + "-" + month + "-" + 1, "YYYY-MMM-DD").format('dd')
        first_day_name = listOfDays.indexOf(String(first_day_name).toUpperCase());
        for (let index = -first_day_name; index < days_num; index++) {
            if (index < 0) {
                list.push(['empty'])
            } else {
                list.push(['m', index])
            }
        }
        setDays(list);
        setTimeout(function () {
            setLaoding(false);
        }, 400);
    }, [month]);





    return (
        <>
            {/* Modal for handling the select option */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    // Alert.alert('No changes',"You didn't change anything !");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={[Layout.colVCenter, { paddingBottom: 40, width: '100%', backgroundColor: Colors.primary, position: 'absolute', bottom: 0, elevation: 5, borderTopLeftRadius: 40, borderTopRightRadius: 40, padding: 20 }]}>
                    <View style={[{ height: 4, width: 80, backgroundColor: 'white', borderRadius: 20, marginBottom: 20 }]}></View>
                    <Text style={[Fonts.h2, { textAlign: 'center', color: Colors.white }]}>you already reserved !</Text>
                    <Text style={[Fonts.h3, { color: Colors.white, opacity: 0.7, marginTop: 20 }]}>15  DEC , 2022</Text>
                    <View style={[Layout.rowHCenter, { marginTop: 20 }]}>
                        <TouchableOpacity
                            onPress={() => { setBreakFast(!breakfast) }}
                            style={[Layout.rowHCenter, { opacity: breakfast ? 1 : 0.7,height: 40, marginHorizontal: 5, backgroundColor: Colors.white, paddingVertical: 5, paddingHorizontal: 5, borderRadius: 20, transform: [{ scale: 1 }] }]}
                        // onPressIn={() => { offset1.value = withSpring(1.2) }}
                        >
                            <>
                                {breakfast ?
                                    <View style={[Layout.rowCenter, { width: 30, height: 30, backgroundColor: Colors.primary, borderRadius: 20, marginHorizontal: 2 }]}>
                                        <Icon name='checkmark-outline' size={22} color={Colors.white}></Icon>
                                    </View> : <></>}
                                <Text style={[Fonts.h5, { color: !breakfast ? Colors.text : Colors.primary, marginHorizontal: 8 }]}>
                                    Breakfast
                                </Text>
                            </>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => { setDinner(!dinner) }}
                            style={[Layout.rowHCenter, { height: 40, marginHorizontal: 5, backgroundColor: Colors.white, opacity: dinner ? 1 : 0.7, paddingVertical: 5, paddingHorizontal: 5, borderRadius: 20, transform: [{ scale: 1 }] }]}
                        // onPressIn={() => { offset1.value = withSpring(1.2) }}
                        >
                            <>
                                {dinner ?
                                    <View style={[Layout.rowCenter, { width: 30, height: 30, backgroundColor: Colors.primary, borderRadius: 20, marginHorizontal: 2 }]}>
                                        <Icon name='checkmark-outline' size={22} color={Colors.white}></Icon>
                                    </View> : <></>}
                                <Text style={[Fonts.h5, { color: !dinner ? Colors.text : Colors.primary, marginHorizontal: 8 }]}>
                                    Dinner
                                </Text>
                            </>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => { setLunch(!lunch) }}
                            style={[Layout.rowHCenter, { opacity: lunch ? 1 : 0.7,height: 40, marginHorizontal: 5, backgroundColor: Colors.white, paddingVertical: 5, paddingHorizontal: 5, borderRadius: 20, transform: [{ scale: 1 }] }]}
                        // onPressIn={() => { offset1.value = withSpring(1.2) }}
                        >
                            <>
                                {lunch ?
                                    <View style={[Layout.rowCenter, { width: 30, height: 30, backgroundColor: Colors.primary, borderRadius: 20, marginHorizontal: 2 }]}>
                                        <Icon name='checkmark-outline' size={22} color={Colors.white}></Icon>
                                    </View> : <></>}
                                <Text style={[Fonts.h5, { color: !lunch ? Colors.text : Colors.primary, marginHorizontal: 8 }]}>
                                    lunch
                                </Text>
                            </>
                        </TouchableOpacity>
                    </View>
                    <View style={[{ width: '100%', paddingHorizontal: 20, marginTop: 20 }]}>
                        <Text style={[Fonts.h5, {}]}>
                            Total Ticket's Cost
                        </Text>
                        <Text style={[Fonts.h2, { color: Colors.white, marginTop: 10 }]}>
                            - 4.00 DH
                        </Text>
                    </View>
                    {/* <View style={[{width:'100%',paddingHorizontal:20,marginTop:20}]}>
                        <Text style={[Fonts.h5,{color:Colors.text}]}>
                            Your Balance
                        </Text>
                        <Text style={[Fonts.h2,{color:Colors.white,marginTop:10}]}>
                            100.00 DH
                        </Text>
                    </View> */}
                    <TouchableOpacity style={[Common.primaryBtn, { backgroundColor: Colors.white, marginTop: 40, width: '90%' }]}>
                        <Text style={[Fonts.h3, { color: Colors.primary, elevation: 0 }]}>Reserve</Text>
                        {/* <ActivityIndicator size={'large'}></ActivityIndicator> */}
                    </TouchableOpacity>
                </View>
            </Modal>
            {!loading ?
                <View>
                    <View style={[Layout.row, { flexWrap: 'wrap', justifyContent: 'space-between' }]}>
                        {listOfDays.map((el, index) => {
                            return (
                                <TouchableOpacity key={"claDay-" + index} style={[Common.calanderDaysNames]}>
                                    <Text style={[Fonts.h5, { color: Colors.text, lineHeight: 20 }]}>{el.substring(0, 1)}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                    <View style={[Layout.row, { flexWrap: 'wrap', }]}>
                        {days.map((ele, index) => {
                            if (ele[0] == "l") {
                                return (
                                    <TouchableOpacity onPress={() => { setModalVisible(!modalVisible); }} key={"cla-" + index} style={[Common.calanderDay]}>
                                        <Text style={[Fonts.h5, { color: Colors.textMute, lineHeight: 20 }]}>{ele[1] + 1}</Text>
                                    </TouchableOpacity>
                                )
                            } else if (ele[0] == "m") {
                                return (
                                    <TouchableOpacity onPress={() => { setModalVisible(!modalVisible); }} key={"cla-" + index} style={[Common.calanderDayActive]}>
                                        <Text style={[Fonts.h5, { color: Colors.textMute, lineHeight: 20 }]}>{ele[1] + 1}</Text>
                                    </TouchableOpacity>
                                )
                            } else {
                                return (
                                    <TouchableOpacity key={"cla-" + index} style={[Common.calanderDayEmpty]}>
                                    </TouchableOpacity>
                                )
                            }
                        })}
                    </View>
                </View> : <ActivityIndicator size={"large"} style={{ marginTop: 50 }}></ActivityIndicator>}
        </>
    )
};

export default Calendar;
