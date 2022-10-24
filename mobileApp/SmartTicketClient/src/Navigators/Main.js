import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  DrawerContentScrollView,
  createDrawerNavigator,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import { HomeContainer, ReservationContainer } from '@/Containers'
import LoginContainer from '@/Containers/Auth/Login';
import RegisterContainer from '@/Containers/Auth/Register';
import QrContainer from '@/Containers/Qr';
import { Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '@/Theme/Variables';
import { useTheme } from '@/Hooks';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

function CustomDrawerContent(props) {

  return (
    <DrawerContentScrollView  {...props}>
      {/* <DrawerItemList {...props} /> */}
      <View style={[{ backgroundColor: Colors.primary, width: '100%', height: 90, position: 'absolute', top: 0, }]}>
        <View style={[{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:50,padding:15}]}>
        <Text style={{
          fontSize: 15,
          color: Colors.text,
          fontFamily: 'Poppins-SemiBold',
          color: Colors.white,
          // marginLeft:15,
          lineHeight:22
        }}>
          Smart Ticket
        </Text>
        <TouchableOpacity onPress={()=>{props.navigation.closeDrawer()}}>
          <Icon name="close-outline" size={25} color={Colors.white}></Icon>
        </TouchableOpacity>
        </View>
      </View>
      <View style={{ backgroundColor: Colors.white, borderTopLeftRadius: 20, borderTopRightRadius: 20, marginTop: 55 }}>
        <DrawerItem
          label="Home"
          onPress={() => props.navigation.navigate('Home')}
        />
        <DrawerItem
          label="Reserve Tickets"
          onPress={() => props.navigation.navigate('Reserve Ticket')}
        />
      </View>
    </DrawerContentScrollView>
  );
}


// @refresh reset
const MainNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={CustomDrawerContent} initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeContainer} options={{ headerShown: false }} />
      <Drawer.Screen name="Scan Qr" component={QrContainer} options={{ headerShown: false }} />
      <Drawer.Screen name="Reserve Ticket" component={ReservationContainer} options={{ headerShown: false }} />
    </Drawer.Navigator>
  )
}

export default MainNavigator
