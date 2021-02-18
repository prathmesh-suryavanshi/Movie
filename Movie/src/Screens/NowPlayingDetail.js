/*
Filename: Now playing deatils
Description: Detail page
*/
import React from 'react'
import { ImageBackground } from 'react-native';
import { View, Text } from 'react-native'
import {styles} from "../Shared/GlobalCSS"
const NowPlayingDetail = ({ route, navigation }) => {
  const { data } = route.params;
  return (
    <View style={styles.container}>
      <ImageBackground source={{
        uri: 'https://image.tmdb.org/t/p/w342' + data.poster_path,
      }} style={styles.background} >
        <View style={styles.viewStyle}>
          <View style={styles.desDetail}>
            <Text style={styles.detailHeader}>{data.original_title}</Text>
            <Text style={styles.detailStyle}>{data.release_date}</Text>
            <Text style={styles.detailStyle}>{data.vote_averag}</Text>
            <Text style={styles.detailStyle} numberOfLines={10}>{data.overview}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default NowPlayingDetail
