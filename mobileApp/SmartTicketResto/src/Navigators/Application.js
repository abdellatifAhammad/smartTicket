import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { StartupContainer } from '@/Containers'
import { useTheme } from '@/Hooks'
import MainNavigator from './Main'
import { navigationRef } from './utils'
import { Colors } from '@/Theme/Variables'
import LoginContainer from '@/Containers/Auth/Login'
import RegisterContainer from '@/Containers/Auth/Register'

const Stack = createStackNavigator()

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: Colors.primary }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={'light-content'} backgroundColor={Colors.primary} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Startup" component={StartupContainer} />
          {false?
          <>
          <Stack.Screen
            name="Login"
            component={LoginContainer}
            options={{
              animationEnabled: false,
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterContainer}
            options={{
              animationEnabled: false,
              headerShown: false
            }}
          />
          </>
          :
          <Stack.Screen
            name="Main"
            component={MainNavigator}
            options={{
              animationEnabled: false,
              headerShown: false
            }}
          />}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default ApplicationNavigator
