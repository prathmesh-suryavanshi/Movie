/*
Filename: TopRated
Description: Top rated movie listing
*/
import React, { Component } from 'react'
import { View, FlatList, Text, ActivityIndicator, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import * as MoviesActions from '../Redux/Actions/MoviesActions'
import _ from "lodash";
import { renderSeparator } from "../Shared/CommonComponents"
import { styles } from '../Shared/GlobalCSS';
import SearchInput, { createFilter } from 'react-native-search-filter';
import Icon from 'react-native-vector-icons/MaterialIcons'

const KEYS_TO_FILTERS = ['original_title'];

class TopRated extends Component {
  //Constructor
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      fullData: this.props.quote,
      movies: this.props.quote,
      isDelete: false
    };
  }

  //ComponentDidMount
  componentDidMount() {
    this.props.loadMovie()
    this.setState({ movies: this.props.quote })

  }

  //Render
  render() {
    var Movies = this.props.quote
    var filteredMovies = Object.values(Movies).filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    if (this.props.statusCode != undefined && this.state.searchTerm.length == 0 && this.state.isDelete == false) {
      return (
        this.props.isloading ? <ActivityIndicator /> : <View style={styles.container}>
          <FlatList
            data={this.props.quote}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => String(index)}
            extraData={this.props}
            ListHeaderComponent={this.renderHeader}
            ItemSeparatorComponent={renderSeparator}
          />
        </View>
      )
    } else if (this.state.searchTerm.length > 0 || this.state.isDelete == false) {
      return (
        this.props.isloading ? <ActivityIndicator /> : <View style={styles.container}>
          <FlatList
            data={filteredMovies}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => String(index)}
            extraData={this.props}
            ListHeaderComponent={this.renderHeader}
            ItemSeparatorComponent={renderSeparator}
          />
        </View>
      )
    } else if (this.state.isDelete) {
      return (
        this.props.isloading ? <ActivityIndicator /> : <View style={styles.container}>
          <FlatList
            data={this.state.movies}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => String(index)}
            extraData={this.props}
            ListHeaderComponent={this.renderHeader}
            ItemSeparatorComponent={renderSeparator}
          />
        </View>
      )
    } else {
      return (
        <ActivityIndicator />
      )
    }
  }


  //Searchbar header
  renderHeader = () => {
    return <SearchInput
      onChangeText={(term) => { this.searchUpdated(term) }}
      style={styles.searchInput}
      placeholder="Type a keyword to search"
      inputViewStyles={styles.searchBar}
      clearIcon={this.state.searchTerm !== '' && <Icon name="clear" />}
    />
  };

  deleteItemById = id => {
    if (this.state.movies) {
      const filteredData = this.state.movies.filter(item => item.id !== id);
      this.setState({ movies: filteredData });
    } else {
      const filteredData = this.props.quote.filter(item => item.id !== id);
      this.setState({ movies: filteredData });
    }
  }

  //On Search
  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }

  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => { this.props.navigation.navigate('Movie', { data: item }) }}>
        <View style={styles.cardStyle}>
          <View style={styles.innerView}>
            <Image
              style={styles.imageStyle}
              source={{
                uri: 'https://image.tmdb.org/t/p/w342' + item.poster_path,
              }}
            />
          </View>
          <View style={styles.headView}>
            <Text numberOfLines={1} style={styles.headingText}>{item.original_title}</Text>
            <Text numberOfLines={5} style={styles.des}>{item.overview}</Text>
            <TouchableOpacity onPress={() => { this.deleteItemById(item.id), this.setState({ isDelete: true }) }}>
              <View style={styles.deleteView}>
                <Text style={styles.deleteText}>Delete</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

//Mapping State to props
function mapStateToProps(state) {
  return {
    quote: state.topRated,
    isloading: state.isloading,
    error: state.error,
    statusCode: state.statusCode
  }
}

//Dispatch action
function mapDispatchToProps(dispatch) {
  return {
    loadMovie: () => dispatch(MoviesActions.loadMovie(false))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopRated)
