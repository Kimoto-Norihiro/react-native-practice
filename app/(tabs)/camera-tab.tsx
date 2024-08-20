import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Link, Redirect } from 'expo-router';

export default function Home() {
	return (
		<Redirect href="/camera"/>
	)
}

