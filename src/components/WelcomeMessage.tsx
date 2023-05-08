import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';

import { Message } from '../types/Message';

export const WelcomeMessage = () => {
  const message: Message = 'Open up App.tsx to start working on your app!';

  return (
    <View className="items-center justify-center flex-1 bg-white">
      <Text>{message}</Text>
      <StatusBar style="auto" />
    </View>
  );
};
