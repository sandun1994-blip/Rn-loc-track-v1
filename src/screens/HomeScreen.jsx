import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { signOut } from 'firebase/auth'
import { auth } from '../config/firebase'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/slices/user'
export default function HomeScreen() {


  const dispatch = useDispatch();

const handleLogout=async()=>{
  await signOut(auth)
  await AsyncStorage.removeItem('user');
  dispatch(setUser(null))
}

  return (<ScreenWrapper>
    <View className='flex-row justify-between items-center p-4'>
      <View>
      </View>
      <TouchableOpacity className='p-2 px-3 bg-white border border-gray-200 rounded-full' onPress={handleLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  </ScreenWrapper>
  )
}