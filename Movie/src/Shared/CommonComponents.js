/*
Filename: Common components
Description: common component
*/
import React from 'react'
import {styles} from '../Shared/GlobalCSS'
import {View} from 'react-native'

export const renderSeparator = () => {
    return (
      <View
        style={styles.seprator}
      />
    );
  };

