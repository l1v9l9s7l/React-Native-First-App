import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const MainComponent = () => {
  const [count, setCount] = useState(0);
  console.log('MainComponent загружен!');


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Привет, React Native!</Text>
      <Text style={styles.counter}>Счётчик: {count}</Text>
      <Button title="Нажми на меня" onPress={() => setCount(count + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  counter: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default MainComponent;