import { useRef, useEffect } from 'react';
import { Animated, StyleSheet, Button, SafeAreaView } from 'react-native';

export default () => {
  const position = useRef(new Animated.ValueXY({ x: 10, y: 100 })).current;
  const color = useRef(new Animated.Value(0)).current;
  function demo() {
    Animated.sequence([
      Animated.timing(position, {
        toValue: { x: 120, y: 500, duration: 200 },
      }),
      Animated.timing(color, { toValue: 1, duration: 200 }),
      Animated.timing(position, {
        toValue: { x: 200, y: 100 },
        duration: 2000,
      }),
      Animated.timing(color, { toValue: 2, duration: 200 }),
      Animated.timing(position, {
        toValue: { x: 10, y: 100 },
        duration: 2000,
      }),
      Animated.timing(color, { toValue: 0, duration: 200 }),
    ]).start();
  }
  return (
    <SafeAreaView style={{ padding: 40 }}>
      <Button color="lightblue" onPress={() => demo()} title="Animate Box" />
      <Animated.View
        style={[
          styles.box,
          {
            top: position.y,
            left: position.x,
            width: 100,
            backgroundColor: color.interpolate({
              inputRange: [0, 1, 2],
              outputRange: ['yellow', 'pink', 'orange'],
            }),
          },
        ]}></Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box: {
    position: 'absolute',
    shadowOpacity: 0.5,
    shadowRadius: 25,
    borderRadius: 20,
    padding: 50,
  },
});
