import React from 'react';
import { View, Text } from 'native-base';
import { VISIBILITY_FILTER } from '~/Actions/actionTypes';
import FilterLink from './Containers/FilterLink';

const Footer = () => (
  <View style={{ marginTop: 16 }}>
    <Text style={{ marginTop: 8 }}>Show: </Text>
    <FilterLink filter={VISIBILITY_FILTER.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VISIBILITY_FILTER.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VISIBILITY_FILTER.SHOW_COMPLETED}>Completed</FilterLink>
  </View>
);


export default Footer;
