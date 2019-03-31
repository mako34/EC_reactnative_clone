import React from 'react';
import { Image, StatusBar, View, Text } from 'react-native'

import {Ionicons} from '@expo/vector-icons'

export default class TabBarIcon extends React.Component {
  render() {
    let { name, focused, tabBarLabel } = this.props
    return (
      <View style={{ alignItems: 'center', justifyContent:'center', flex:1, backgroundColor:'transparent' }}>
        <Ionicons name={name} size={24} color={focused?'rgb(223,29,66)':'#999'}/>
      </View>
    )
  }
}