import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import styles from './styles';

/* Components */
import Header from './components/Header/Header';
import Group from './components/Group/Group';
import MapViewer from './components/MapViewer/MapViewer';

export default class App extends Component {
  render() {
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
      </View>
    );
  }
}
