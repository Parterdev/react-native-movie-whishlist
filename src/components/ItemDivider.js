import React, { useContext } from 'react'
import { View } from 'react-native'
import { Divider } from 'react-native-elements';
import { ThemeContext } from '../context/theme/ThemeContext';

export const ItemDivider = () => {

  return (
    <View style={{marginVertical: 10}}>
      <Divider style={{backgroundColor: '#f6f6f6', height: 2}} 
      />
    </View>
  )
}
