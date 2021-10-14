import React from 'react'
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { FadeInImage } from './FadeInImage';
import { VectorIcon } from './VectorIcon';

export const MovieCard = ({ 
    movie, 
    width='100%', 
    height='100%', 
    marginHorizontal, 
    marginVertical, 
    setActualMovie,  
    wishlist, 
    addToWishList, 
    removeFromWishList
  }) => {


  const handleCurrentMovie = (movie) => {
    setActualMovie(movie);
  }

  const handleAddWishList = (movie) => {
    addToWishList(movie);
  }

  const handleRemoveWishList = (movie) => {
    removeFromWishList(movie);
  }

  const isApplied = (movie) => {
    if(wishlist.filter(item => item._id === movie._id).length > 0){
      return true
    }
    return false
  }


  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={() => handleCurrentMovie(movie)}
        style={styles.cardShadowContainer}>
        <FadeInImage
          uri={movie.thumbnail}
          style={{
            borderRadius: 25,
            width,
            height,
            marginHorizontal,
            marginVertical,
          }}
        /> 
      </TouchableOpacity>
      { isApplied(movie) ? 
        <TouchableOpacity style={{ ...styles.footerCard, backgroundColor: '#529ecc', width, marginHorizontal }}
          onPress={() => handleRemoveWishList(movie)}>
          <VectorIcon name='heart-dislike-outline' color={'red'} />
          <Text style={{ color: 'white' }}>Quitar</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity style={{ ...styles.footerCard, backgroundColor: '#6f7b8b', width, marginHorizontal }}
          onPress={() => handleAddWishList(movie)}>
          <VectorIcon name='heart-circle-outline' color={'red'} />
          <Text style={{ color: 'white' }}>Agregar</Text>
        </TouchableOpacity>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    //backgroundColor: 'red',
  },
  cardShadowContainer: {
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    opacity: 10
  },
  cardMovieImage: {
    borderRadius: 25,
  },
  footerCard: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
    borderRadius: 20,
    height: 40,
  }
});
