import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View>
      <Link href="/camera">Camera</Link>
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
  camera: {
    flex: 1,
  },
  message: {
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});