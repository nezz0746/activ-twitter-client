import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import Tools from '../constants/Tools';

interface Props {
  children: React.ReactNode
  center?: boolean
  bordered?: boolean
  grow?: boolean
  containerSyle?: ViewStyle
}

const Column = ({
  children, center, bordered, grow, containerSyle = {},
}: Props) => (
  <View
    style={{
      ...styles.root,
      justifyContent: center ? 'center' : 'flex-start',
      ...Tools.borderMaker('black', bordered ? 1 : 0),
      flexGrow: grow ? 1 : 0,
      ...containerSyle,
    }}
  >
    {children}
  </View>
);

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
  },
});

export default Column;
