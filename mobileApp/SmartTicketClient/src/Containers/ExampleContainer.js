import React, { useState, useEffect } from 'react'
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Brand } from '@/Components'
import { useTheme } from '@/Hooks'
import { useLazyFetchOneQuery } from '@/Services/modules/users'
import { changeTheme } from '@/Store/Theme'

const ExampleContainer = () => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const dispatch = useDispatch()

  const [userId, setUserId] = useState('9')
  const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
    useLazyFetchOneQuery()

  useEffect(() => {
    fetchOne(userId)
  }, [fetchOne, userId])

  const onChangeTheme = ({ theme, darkMode }) => {
    dispatch(changeTheme({ theme, darkMode }))
  }

  return (
    <ScrollView
      style={Layout.fill}
      contentContainerStyle={[
        Layout.fill,
        Layout.colCenter,
        Gutters.smallHPadding,
      ]}
    >
       <Text style={[Fonts.h1]}>h1</Text>
                <Text style={[Fonts.h2]}>h2</Text>
                <Text style={[Fonts.h3]}>h3</Text>
                <Text style={[Fonts.h4]}>h4</Text>
                <Text style={[Fonts.h5]}>h5</Text>
                <Text style={[Fonts.a]}>a</Text>
                <Text style={[Fonts.p]}>p</Text>
                <View>
                <Text style={[Fonts.h4]}>Label is here</Text>
                <View style={[Common.textInput, Layout.rowCenter]}>
                    <TextInput style={[Fonts.p, { paddingLeft: 10, fontWeight: '600', width: '85%' }]} cursorColor={Colors.text}></TextInput>
                    <TouchableOpacity>
                        <Icon name="eye" size={22} color={Colors.text}></Icon>
                    </TouchableOpacity>
                </View>
                </View>
                <TouchableOpacity style={[Common.primaryBtn]}>
                    <Text style={[Fonts.h3,{color:Colors.white}]}>
                        Login
                    </Text>
                </TouchableOpacity>
                <Select data={['October']} label="Test"></Select>
                <TouchableOpacity style={[Common.calanderDayActive]}>
                    <Text style={[Fonts.h4,{color:Colors.primary,}]}>
                        1
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[Common.calanderDay]}>
                    <Text style={[Fonts.h4,{color:Colors.primary,}]}>
                        1
                    </Text>
                </TouchableOpacity>
                <View style={{marginTop:20}}></View>
    </ScrollView>
  )
}

export default ExampleContainer
