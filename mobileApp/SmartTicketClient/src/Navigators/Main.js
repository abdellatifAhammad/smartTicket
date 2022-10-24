import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeContainer, ReservationContainer } from '@/Containers'

const Tab = createBottomTabNavigator()
const Drawer  = createDrawerNavigator()

// @refresh reset
const MainNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeContainer} options={{headerShown: false}} />
      <Drawer.Screen name="Reserve" component={ReservationContainer} options={{headerShown: false}} />

    </Drawer.Navigator>
  )
}

export default MainNavigator
