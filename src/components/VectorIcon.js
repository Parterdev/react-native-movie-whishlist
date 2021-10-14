import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';


export const VectorIcon = (
  { name,
    size=20, 
    color='white', 
    type='ionicon',
    //action
  }) => {

  return (
    <TouchableOpacity>
      <Icon
        name={name}
        size={size}
        color={color}
        type={type}
      />
    </TouchableOpacity>
  )
}


