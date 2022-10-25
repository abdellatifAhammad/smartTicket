import Header from '@/Components/Header';
import { useTheme } from '@/Hooks';
import { Colors } from '@/Theme/Variables';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QrContainer = ({navigation,route }) => {
    const { Fonts, Layout, Common, Images } = useTheme();

    return (
        <View style={{ backgroundColor: Colors.primary, flex: 1 }}>
            <Header navigation={navigation}></Header>
            <ScrollView showsVerticalScrollIndicator={false} style={{ borderTopLeftRadius: 35, borderTopRightRadius: 35, backgroundColor: Colors.white, flex: 1, marginTop: 30, paddingBottom: 50, paddingHorizontal: 20, paddingVertical: 20 }}>
                <Text style={[Fonts.h2, { textAlign: 'center', marginTop: 60 }]} >Scan Qr to validate</Text>
                <Text style={[Fonts.p, { textAlign: 'center', marginTop: 10 }]}>This qr code is for the resturant service to be scanned</Text>
                <View style={[Layout.rowCenter, { marginTop: 30 }]}>
                    <QRCode
                        size={210}
                        value={route.params?.value}
                        color={Colors.textMute}
                    />
                </View>
            </ScrollView>
        </View>
    )
};

export default QrContainer;
