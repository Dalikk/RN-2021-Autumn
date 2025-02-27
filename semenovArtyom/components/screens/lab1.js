import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

const randomHex = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Lab1 = () => {
  const [color, setColor] = useState('#F5909E');
  const [counter, setCounter] = useState(0);

  return (
    <SafeAreaView style={[styles.main, {backgroundColor: color}]}>
      <ScrollView>
        <TouchableOpacity
          style={styles.box}
          onPress={() => setColor(randomHex())}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
  },
  box: {
    display: 'flex',
    height: 100,
    width: 100,
    marginTop: 160,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center'
  },
});
export default Lab1;
