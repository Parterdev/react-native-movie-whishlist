import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { ItemDivider } from '../components/ItemDivider'
import { Spacer } from '../components/Spacer'
import { VectorIcon } from '../components/VectorIcon'
import { fetchMovies, addToWishList, removeFromWishList }  from '../redux/actions'


const _WishListScreen = (props) => {

  const { movieReducer } = props;
  const { wishlist } = movieReducer;

  //console.log("W", wishlist);

  const _renderItem = (item) => {
    return (
      <View style={styles.containerList}>
        <VectorIcon name='videocam-outline' size={30} color={'#529ecc'} />
        <Text style={{ ...styles.textList }}>
          {item.title}
        </Text>
        <Spacer />
        <VectorIcon name='chevron-forward-outline' size={30} color={'#529ecc'} />
      </View>
    )
  } 

  const _separatorList = () => {
    return (
      <ItemDivider />
    );
  }

  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 15}}>
        <Text style={{color: 'white', fontSize: 30, marginTop: 10}}>WishList Screen</Text>
      </View>
      <FlatList
        data={wishlist}
        renderItem={({ item }) => _renderItem(item)}
        keyExtractor={(item) => item._id}
        horizontal={false}
        ItemSeparatorComponent={() => _separatorList()}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const MapStateToProps = (state) => ({
  movieReducer: state.movieReducer
});

export const WishListScreen = connect(MapStateToProps, {
  fetchMovies, addToWishList, removeFromWishList
})(_WishListScreen);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#36465d'
  },
  containerList: {
    //backgroundColor: 'pink',
    alignItems: 'center',
    flexDirection: 'row'
  },
  textList: {
    fontSize: 18,
    paddingLeft: 5, 
    color: 'white'
  }
})
