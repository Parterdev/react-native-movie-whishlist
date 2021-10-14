import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { FadeInImage } from '../components/FadeInImage'
import { MovieCard } from '../components/MovieCard'
import { VectorIcon } from '../components/VectorIcon'
import { fetchMovies, addToWishList, removeFromWishList }  from '../redux/actions'

const _HomeScreen = (props) => {

  const { movieReducer, fetchMovies, addToWishList, removeFromWishList } = props;
  const { movies, wishlist } = movieReducer;

  const [actualMovie, setActualMovie] = useState(undefined);

  const {width:windowWidth, height:windowHeight} = Dimensions.get('window')

  //Trigger fetch: one time
  useEffect(() => {
    fetchMovies();
  }, [])

  useEffect(() => {
    if(movies.length > 0) {
      //Extract first movie and set in the state
      setActualMovie(movies[1]);
    }
  }, [movies])

  //Render component
  const _renderItem = (item) => {
    return (
      <MovieCard key={item.id} 
        movie={item}
        width={120}
        height={170}
        marginHorizontal={5}
        marginVertical={5}
        setActualMovie={setActualMovie}
        wishlist={wishlist}
        addToWishList={addToWishList}
        removeFromWishList={removeFromWishList}
      />
    );
  }

  return (
    <View style={styles.container}>
      
      {/* Principal movie card */}
      <View style={{...styles.cardMovieContainer, height: windowHeight * 0.50}}>
        <View style={{ height: windowHeight *0.50 }}>
          {(actualMovie !== undefined) && (
            <FadeInImage
              uri={actualMovie.thumbnail}
              style={{
                height: windowHeight *0.50, 
                width: windowWidth
              }}
            />
          )}
        </View>
        { (actualMovie !== undefined) && 
          <View style={{ justifyContent: 'center', alignItems: 'flex-end' }}>
            <TouchableOpacity activeOpacity={0.5}
              style={styles.buttonMovieContainer}
            >
              <Text style={{ color: 'white', fontSize: 20 }}>
                Quiero verlo
              </Text>
              <VectorIcon name='play-forward-outline' color={'white'} />
            </TouchableOpacity>
          </View>
        }
      </View>
      <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', padding: 10}}>
        <Text style={{ fontSize: 25, color: 'white' }}>Top Movies</Text>
      </View>

      {/* Slider with top movies */}
      <ScrollView style={{height: windowHeight *0.50, width: windowWidth}}>
        <View style={{...styles.sliderTopMovies}}>
          <FlatList
            data={movies}
            renderItem={({ item }) => _renderItem(item)}
            keyExtractor={(item) => item._id}
            horizontal={true}
            scrollEnabled={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
      
    </View>
  )
}

const MapStateToProps = (state) => ({
  movieReducer: state.movieReducer
});

export const HomeScreen = connect(MapStateToProps, {
  fetchMovies, addToWishList, removeFromWishList
})(_HomeScreen);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#36465d'
  },
  cardMovieContainer: {
    //backgroundColor: 'red'
  },
  buttonMovieContainer: {
    top: -60,
    backgroundColor: '#529ecc',
    width: 200,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: -50,
    borderTopLeftRadius: 50
  },  
  sliderTopMovies: {
    flex: 1,
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'yellow'
  }
})
