import React from 'react';
import { Stack } from 'expo-router/stack';
import ExpoCameraComponent from '../components/ExpoCameraComponent';
import Camera from './camera';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="index" />
      <Stack.Screen name="camera" options={{ headerShown: false }} />
    </Stack>
  );
}