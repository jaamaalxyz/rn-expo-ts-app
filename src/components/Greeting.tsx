import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface GreetingProps {
  name: string;
  birthYear: number;
}

const Greeting: FC<GreetingProps> = ({ name, birthYear }) => {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textStyle}>Hello, {name}</Text>
      <Text style={styles.textStyle}>Nice to meet you!</Text>
      <Text style={[styles.textStyle, styles.ageTextStyle]}>
        Now {currentYear} and you become {age} years old.
      </Text>
    </View>
  );
};

export default Greeting;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10,
  },
  textStyle: {
    fontSize: 42,
    color: '#ffffff',
    fontWeight: '900',
  },
  ageTextStyle: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '600',
  },
});
