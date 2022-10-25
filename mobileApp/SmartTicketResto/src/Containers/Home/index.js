import React, { useState, useEffect } from 'react';
import {
    Dimensions, Image, ImageBackground, ScrollView, PermissionsAndroid,
    Platform, Text, TextInput, TouchableOpacity, View, Alert, ActivityIndicator
} from 'react-native';
import AlertBox from '@/Components/Alert';
import Header from '@/Components/Header';
import Select from '@/Components/Select';
import { useTheme } from '@/Hooks';
import { Colors } from '@/Theme/Variables';
import Icon from 'react-native-vector-icons/Ionicons';
import { CameraScreen } from 'react-native-camera-kit';

var Sound = require('react-native-sound');

Sound.setCategory('Playback');

var sound = new Sound('ding.mp3',Sound.MAIN_BUNDLE, error => {
    if (error) {
        console.log('failed to load the sound', error);
        return;
    }
    // if loaded successfully
});


// 

const HomeContainer = ({ navigation }) => {
    // const [activated, setActivated] = useState(false);
    const { width, height } = Dimensions.get('window');
    const { Layout, Fonts, Common, Images } = useTheme();
    const [qrvalue, setQrvalue] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        sound.setVolume(1);
        return () => {
            sound.release();
        };
    }, []);

    // const qrRef = useRef();

    // const onSuccess = (e) => {

    //     console.error(e.data)
    // };

    const onBarcodeScan = (qrvalue) => {
        // Called after te successful scanning of QRCode/Barcode
        setLoading(true)
        console.log(qrvalue);
        setQrvalue(qrvalue);
        sound.play(success => {
            if (success) {
                console.log('successfully finished playing');
                setLoading(false)
            } else {
                console.log('playback failed due to audio decoding errors');
                //   setLoading(false)
            }
        });
    };

    const onOpneScanner = () => {
        // To Start Scanning
        if (Platform.OS === 'android') {
            async function requestCameraPermission() {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.CAMERA,
                        {
                            title: 'Camera Permission',
                            message: 'App needs permission for camera access',
                        },
                    );
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        // If CAMERA Permission is granted
                        setQrvalue('');
                    } else {
                        alert('CAMERA permission denied');
                    }
                } catch (err) {
                    alert('Camera permission err', err);
                    console.warn(err);
                }
            }
            // Calling the camera permission function
            requestCameraPermission();
        } else {
            setQrvalue('');
        }
    };

    useEffect(() => {
        onOpneScanner();
        Sound.setCategory('Playback');
    }, [])

    return (
        <View style={{ backgroundColor: Colors.primary, flex: 1 }}>
            <Header navigation={navigation}></Header>
            <ScrollView showsVerticalScrollIndicator={false} style={{ borderTopLeftRadius: 35, borderTopRightRadius: 35, backgroundColor: Colors.white, flex: 1, marginTop: 30, paddingBottom: 50, paddingHorizontal: 20, paddingVertical: 20 }}>
                <Text style={[Fonts.h2, { textAlign: 'center', marginTop: 60 }]} >Scan Qr to validate</Text>
                <Text style={[Fonts.p, { textAlign: 'center', marginTop: 10 }]}>Please put the camera on the Qr code</Text>
                <View style={{ height: 350, marginTop: 20, overflow: 'hidden', borderRadius: 20 }}>
                    {!loading ?
                        <CameraScreen
                            showFrame={false}
                            // Show/hide scan frame
                            scanBarcode={true}
                            // Can restrict for the QR Code only
                            laserColor={'blue'}
                            // Color can be of your choice
                            frameColor={'yellow'}
                            // If frame is visible then frame color
                            // colorForScannerFrame={'black'}
                            // Scanner Frame color
                            onReadCode={(event) => onBarcodeScan(event.nativeEvent.codeStringValue)}
                        /> : <View style={{ padding: 20 }}>
                            <ActivityIndicator style={{ marginTop: 40 }} size={"large"}></ActivityIndicator>
                            <Text style={[Fonts.h4, { textAlign: 'center', color: Colors.textMute, marginTop: 30 }]}>Please wait for check !</Text>
                        </View>}
                </View>
            </ScrollView>
        </View>
    )
};

export default HomeContainer;