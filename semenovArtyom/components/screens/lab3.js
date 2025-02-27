import React, {useState, useMemo} from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const randomHex = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    expensiveFunction();
    return color;
  };

const styles = StyleSheet.create({
    button: {
      height: 50,
      borderRadius: 10,
      backgroundColor: '#BB86FC',
      marginTop: 10
    },
    scroll: {
        margin: 15,
    },
    box: {
        display: 'flex',
        height: 100,
        width: 100,
        marginTop: 145,
        backgroundColor: '#FFFFFF',
        alignSelf: 'center'
    },
    text: {
      fontSize: 70,
      color: '#FFFFFF',
      opacity: 0.6,
      marginTop: 110,
      alignSelf: 'flex-end'
    },
    main: {
      height: '100%',
      backgroundColor: '#121212'
    },
});

const expensiveFunction = () => {
  let i = 0;
  while (i < 60000000) {
    i++;
  }
  return 'likes';
};
const Lab3 = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [color, setColor] = useState('#FFFFFF');

  const onPressHandler = () => {
    const text = randomHex();
    setCount(count + 1);
    setText(`${count}`);
    setColor(text);
  };
  const operation = useMemo(randomHex, [color]);

  const onPressHandlerSecond = () => {
    const text = operation;

    setCount(count + 1);
    setText(`${count}`);
    setColor(text);
  };

  return (
    <View style={styles.main}>
      <ScrollView style={styles.scroll}>
        <TouchableOpacity style={[styles.box, 
          {backgroundColor: color}]}
        />
        <Text style={styles.text}>{text}</Text>

        <TouchableOpacity style={styles.button} 
          onPress={onPressHandler}
        />
        
        <TouchableOpacity style={styles.button} 
          onPress={onPressHandlerSecond}
        />
      </ScrollView>
    </View>
  );
};

export default Lab3;