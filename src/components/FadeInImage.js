import React, { useContext, useState } from 'react'
import { Animated, StyleSheet, View, ActivityIndicator } from 'react-native';
import { useAnimated } from '../hooks/useAnimated';


export const FadeInImage = ({uri, style}) => {

  const {opacityValue, fadeIn} = useAnimated();
  const [isLoaded, setIsLoaded] = useState(true);

  const finishLoading = () => {
    setIsLoaded(false);
    fadeIn();
  }

  return (
    <View style={styles.container}>
      {
        isLoaded &&  <ActivityIndicator style={{position: 'absolute'}}
          size={100} 
          color='#529ecc'
        />
      }
      <Animated.Image
        resizeMode= 'stretch' 
        source={{uri}}
        onLoadEnd={finishLoading}
        style={{...style, opacity: opacityValue}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center', 
    alignItems: 'center', 
    marginHorizontal: 5
  }
})
