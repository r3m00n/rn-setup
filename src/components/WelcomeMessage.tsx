import { StatusBar } from 'expo-status-bar';
import { View, Text, Pressable } from 'react-native';
import { Message } from '../types/Message';
import type { RootState } from '../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { toggleBackground } from '../redux/slices/backgroundSlice';

export const WelcomeMessage = () => {
  const dispatch = useDispatch();
  const bgIsRed = useSelector((state: RootState) => state.background.isRed);
  const message: Message = 'Open up App.tsx to start working on your app!';

  return (
    <View
      className={`items-center justify-center flex-1 ${
        bgIsRed ? 'bg-red-300' : 'bg-white'
      }`}
    >
      <Text>{message}</Text>
      <Pressable onPress={() => dispatch(toggleBackground())}>
        <Text>Press here to toggle the background color.</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
};
