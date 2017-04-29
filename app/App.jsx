import React, { Component } from 'react';
import {
  Navigator,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import styles from './styles';

/* Components */
import Header from './components/Header/Header';
import Group from './components/Group/Group';
import MapViewer from './components/MapViewer/MapViewer';

export default class App extends Component {
  render() {

    const routes = [
      {title: 'Map', index: 0},
      {title: 'Group', index: 1},
    ];

    return (
      <View style={styles.container}>
        <Header />
        {/* <Route exact path="/" component={HomeView}/> */}
        {/* <Route path="/map" component={MapViewer}/> */}
        {/* <Route path="/group" component={Group}/> */}
        {/* <Route path="/agenda" component={Agenda}/> */}
        {/* <Route path="/schedule" component={VenueSchedule}/> */}
        {/* <Route path="/choosevenue" component={ChooseVenue}/> */}
        {/* <Route path="/creategroup" component={CreateGroup}/> */}
        <Navigator
          renderScene={(route, navigator) =>
            <Text>Hello!</Text>
          }
          navigationBar={
             <Navigator.NavigationBar
               routeMapper={{
                 LeftButton: (route, navigator, index, navState) =>
                  { return (<Text>Cancel</Text>); },
                 RightButton: (route, navigator, index, navState) =>
                   { return (<Text>Done</Text>); },
                 Title: (route, navigator, index, navState) =>
                   { return (<Text>Awesome Nav Bar</Text>); },
               }}
               style={{backgroundColor: 'gray'}}
             />
          }
        />
      </View>
    );
  }
}
