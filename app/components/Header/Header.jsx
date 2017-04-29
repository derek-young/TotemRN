import React from 'react';
import {
  Text,
  View
} from 'react-native';

import localStyles from './headerStyles';

const Header = () => {
  return (
    <View style={localStyles.main}>
      <Text>
        Header
      </Text>
    </View>
  );
};

export default Header;
