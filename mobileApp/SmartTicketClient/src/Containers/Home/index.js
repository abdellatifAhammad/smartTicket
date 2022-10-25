import AlertBox from '@/Components/Alert';
import Header from '@/Components/Header';
import Select from '@/Components/Select';
import { useTheme } from '@/Hooks';
import { Colors } from '@/Theme/Variables';
import React, { useRef } from 'react';
import { useState } from 'react';
import { Dimensions, Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Carousel from 'react-native-reanimated-carousel';
import { interpolate } from 'react-native-reanimated';

const HomeContainer = ({navigation}) => {
    const [activated, setActivated] = useState(false);
    const { width, height } = Dimensions.get('window');
    const scrollRef = useRef();
    const { Layout, Fonts, Common, Images } = useTheme();
    const animationStyle = React.useCallback(
        (value) => {
            'worklet';
            const zIndex = interpolate(value, [-1, 0, 1], [10, 20, 30]);
            const rotateZ = `${interpolate(
                value,
                [-1, 0, 1],
                [-45, 0, 45]
            )}deg`;
            const translateX = interpolate(
                value,
                [-1, 0, 1],
                [-width, 0, width]
            );

            return {
                transform: [{ rotateZ }, { translateX }],
                zIndex,
            };
        },
        []
    );
    return (
        <View style={{ backgroundColor: Colors.primary, flex: 1 }}>
            <Header navigation={navigation}></Header>
            <ScrollView showsVerticalScrollIndicator={false} style={{ borderTopLeftRadius: 35, borderTopRightRadius: 35, backgroundColor: Colors.white, flex: 1, marginTop: 30, paddingBottom: 50, paddingHorizontal: 20, paddingVertical: 20 }}>
                {activated ?
                    <View>
                        <AlertBox style={{ marginTop: 15 }} type={"warning"} text={'You have to Activate your Account to Start using Smart Ticket'}></AlertBox>
                        <Image source={Images.man} style={{ width: '40%', marginHorizontal: '25%' }}></Image>
                        <View style={{ marginHorizontal: 10 }}>
                            <Text style={[Fonts.h4, { marginVertical: 20 }]}>
                                How to activate my account ?
                            </Text>
                            <Text style={[Fonts.p, { marginVertical: 10 }]}>
                                1 - Visit the resto to confirm your identity .
                            </Text>
                            <Text style={[Fonts.p, { marginVertical: 10 }]}>
                                2- add balance to your account.
                            </Text>
                            <Text style={[Fonts.p, { marginVertical: 10 }]}>
                                3- Take your Tickets and Enjoy .
                            </Text>
                        </View>
                    </View> :
                    <View style={{ marginTop: 20 }}>
                        <View style={[Layout.row]}>
                            <Icon name="filter-outline" size={20} color={Colors.text} ></Icon>
                            <Text style={[{ marginHorizontal: 10 }, Fonts.h5]}>Today Tickets</Text>
                        </View>
                        <View>
                            <Carousel
                                loop={false}
                                width={width - 40}
                                height={180}
                                autoPlay={false}
                                mode="stack"
                                data={[...new Array(3).keys()]}
                                style={[{ marginTop: 20 }, Common.shdow]}
                                scrollAnimationDuration={1000}
                                // onSnapToItem={(index) => setCurrentSlide(index)}
                                snapEnabled={true}
                                renderItem={({ index }) => (
                                    <TouchableOpacity onPress={()=>{navigation.navigate('Scan Qr',{value:"abdellatif"})}} style={{ width: '100%', height: 150, padding: 10 }}>
                                        <View style={[{ position: 'absolute', zIndex: 3, top: 20, left: 35, width: 150 }]}>
                                            <Text style={[Fonts.h2, { color: 'white' }]}>Launch Meal</Text>
                                            <Text style={[Fonts.h5, { color: 'white', opacity: 0.8 }]}>
                                                25,DEC 2022
                                            </Text>
                                        </View>
                                        <ImageBackground source={Images.ticket} style={{ width: '100%', height: '100%' }}></ImageBackground>
                                    </TouchableOpacity>
                                )}
                                customAnimation={animationStyle}
                                ref={scrollRef}
                            />
                            <TouchableOpacity onPress={() => { scrollRef.current.next() }} style={[{ elevation: 3, backgroundColor: 'white', width: 35, height: 35, borderRadius: 20, position: 'absolute', top: 75, right: 2, zIndex: 4, }, Layout.rowCenter]}>
                                <Icon name="chevron-forward-outline" size={25}></Icon>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { scrollRef.current.prev() }} style={[{ elevation: 3, backgroundColor: 'white', width: 35, height: 35, borderRadius: 20, position: 'absolute', top: 75, left: 2, zIndex: 4, }, Layout.rowCenter]}>
                                <Icon name="chevron-back-outline" size={25}></Icon>
                            </TouchableOpacity>
                        </View>
                        <View style={[Layout.row]}>
                            <Icon name="card-outline" size={20} color={Colors.text} ></Icon>
                            <Text style={[{ marginHorizontal: 10 }, Fonts.h5]}>Your Balance</Text>
                        </View>
                        <View style={[Layout.rowCenter, { marginTop: 20 }]}>
                            <Text style={[Fonts.h1, { color: Colors.primary }]}>
                                100.00<Text style={[Fonts.h3]}> DH</Text>
                            </Text>
                        </View>

                        <View style={[Layout.row, { marginVertical: 15 }]}>
                            <Icon name="wallet-outline" size={20} color={Colors.text} ></Icon>
                            <Text style={[{ marginHorizontal: 10 }, Fonts.h5]}>Latest Payments</Text>
                        </View>

                        <View style={{ paddingHorizontal: 10 }}>
                            <View style={[Layout.row, Layout.justifyContentBetween, { backgroundColor: 'rgba(19, 24, 43, 0.09)', padding: 10, borderRadius: 10 }]}>
                                <Text style={[Fonts.p, { color: 'rgba(19, 24, 43, 0.75)' }]}>Date</Text>
                                <Text style={[Fonts.p, { color: 'rgba(19, 24, 43, 0.75)' }]}>Total Price</Text>
                            </View>
                            <View style={{ padding: 10 }}>
                                <View style={[Layout.row, Layout.justifyContentBetween, { marginVertical: 10 }]}>
                                    <Text style={[Fonts.p]}>12 DEC ,2022</Text>
                                    <Text style={[Fonts.p, { color: Colors.error }]}>-50.00 DH</Text>
                                </View>
                                <View style={[Layout.row, Layout.justifyContentBetween, { marginVertical: 10 }]}>
                                    <Text style={[Fonts.p]}>12 DEC ,2022</Text>
                                    <Text style={[Fonts.p, { color: Colors.primary }]}>+100.00 DH</Text>
                                </View>
                                <View style={{ marginBottom: 40 }}></View>
                            </View>
                        </View>
                    </View>}
            </ScrollView>
        </View>
    )
};

export default HomeContainer;