/*
Filename: TopRated
Description: Top rated movie listing
*/
import React, { Component } from 'react'
import { View, FlatList, Text, ActivityIndicator, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import * as MoviesActions from '../Redux/Actions/MoviesActions'
import { SearchBar } from 'react-native-elements';
import _ from "lodash";
import { getMovies, contains } from "../Shared/Search";
import { renderSeparator } from "../Shared/CommonComponents"
import { styles } from '../Shared/GlobalCSS';

class TopRated extends Component {
  //Constructor
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      fullData: this.props.quote,
      movies: this.props.quote
    };
  }

  //ComponentDidMount
  componentDidMount() {
    this.props.loadMovie()
    this.setState({ fullData: this.props.quote })

  }

  //Render
  render() {
    if (this.props.statusCode != undefined && this.state.query.length == 0) {
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
    } else if (this.state.query.length > 0) {
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
    return <SearchBar placeholder="Type Here..." lightTheme round
      inputContainerStyle={styles.inputStyle}
      containerStyle={styles.containerStyle} onChangeText={this.handleSearch} value={this.state.query} />;
  };

  //On Search
  handleSearch = text => {
    const formattedQuery = text
    const data = _.filter(this.props.quote, movie => {
      return contains(movie, formattedQuery);
    });
    this.setState({ query: formattedQuery, data }, () => this.makeRemoteRequest());
  };

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
          </View>
        </View>
      </TouchableOpacity>
    )}

  //Search Request
  makeRemoteRequest = () => {
    if (this.state.query.length > 0) {
      getMovies(this.props.quote, this.state.query)
        .then(movies => {
          this.setState({
            loading: false,
            movies: movies
          });
        })
        .catch(error => {
          this.setState({ error, loading: false });
        });
    } else {
      this.props.loadMovie()
      this.setState({ movies: this.props.quote })
    }
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
