import React from 'react';
import { View, StyleSheet } from 'react-native';
import Tools from '../constants/Tools';

interface Props {
  children: React.ReactNode
  center?: boolean
  bordered?: boolean
  grow?: boolean
}

const Row = ({
  children, center = false, bordered = false, grow,
}: Props) => (
  <View
    style={{
      ...styles.root,
      justifyContent: center ? 'center' : 'flex-start',
      ...Tools.borderMaker('black', bordered ? 1 : 0),
      flexGrow: grow ? 1 : 0,
    }}
  >
    {children}
  </View>
);

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    ...Tools.borderMaker('black', bordered ? 1 : 0),
  },
});

export default Row;
