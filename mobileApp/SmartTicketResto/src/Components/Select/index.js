import React from 'react';
import { Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { useTheme } from '@/Hooks';
import { Colors } from '@/Theme/Variables';

const Select = ({ data, label,enabled,selectValue,defaultValue,style }) => {
    const [selectedValue, setSelectedValue] = useState(defaultValue);
    const { Layout, Fonts,Common } = useTheme();
    return (
        <View style={[{ marginTop: 15 },{...style}]}>
            <Text style={[Fonts.h4, {color:Colors.text}]}>{label}</Text>
            <View style={[Common.select,{ overflow: 'hidden', borderRadius: 10, marginTop: 10, }]}>
                <Picker
                    enabled={enabled}
                    style={[{ backgroundColor: 'white',color:'gray'},Fonts.p]}
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) =>{
                        setSelectedValue(itemValue)
                        selectValue(itemValue)
                    }
                    }>
                        {data.map((ele,index)=>{
                            return (
                                <Picker.Item  key={index} label={ele} value={ele} />
                            )
                        })}
                </Picker>
            </View>
        </View>
    )
};

export default Select;
