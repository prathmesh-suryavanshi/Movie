import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: { backgroundColor: '#f4b244', flex: 1, },
    inputStyle: { height: 40, backgroundColor: '#fff' },
    containerStyle: { backgroundColor: '#f4b244' },
    seprator: {
      height: 1,
      width: "86%",
      backgroundColor: "#CED0CE",
      marginLeft: "14%"
    },
    cardStyle: { backgroundColor: '#f4b244', height: 150, width: '100%', padding: 5, flexDirection: 'row' },
    innerView: { backgroundColor: '#f4b244', width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center' },
    imageStyle: { height: '90%', width: '100%' },
    headView: { backgroundColor: '#f4b244', width: '70%', height: '100%', paddingLeft: 7, marginBottom: 10 },
    headingText: { fontSize: 25, fontWeight:'bold' },
    des: {
  fontSize:12
    },
    detailStyle: { fontSize: 12, color: '#fff', fontWeight: 'bold' },
    detailHeader: { fontSize: 20, color: '#fff', fontWeight: 'bold' },
    desDetail: { paddingLeft: 5 },
    background: { flex: 1, flexDirection: 'column-reverse', alignItems: 'center' },
    viewStyle:{ backgroundColor: '#000', opacity: 0.7, width: '70%', marginBottom: 10, }
  });