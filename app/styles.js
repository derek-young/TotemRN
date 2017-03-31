import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: 'rgba(255, 120, 113, 0.5)'
    // backgroundColor: 'linear-gradient(to bottom right, #ffe482, rgba(255, 120, 113, 0.5))'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
