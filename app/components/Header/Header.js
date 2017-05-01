import React from 'react';
import {
  Text,
  View
} from 'react-native';
import { Link } from 'react-router-native'
// import NavButton from './NavButton';
import localStyles from './headerStyles';

const Header = () => (
  <View style={localStyles.main}>
    <Link to="group">
      <Text>
        Group
      </Text>
    </Link>
    <Link to="map">
      <Text>
        Map
      </Text>
    </Link>
    <Link to="agenda">
      <Text>
        Agenda
      </Text>
    </Link>
    <Link to="schedule">
      <Text>
        Schedule
      </Text>
    </Link>
  </View>
);

export default Header;
