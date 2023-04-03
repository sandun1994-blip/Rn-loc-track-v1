import { View, Text, TouchableOpacity } from 'react-native'
import React ,{useEffect} from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { signOut } from 'firebase/auth'
import { auth } from '../config/firebase'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/slices/user'
import PushNotification from 'react-native-push-notification';
export default function HomeScreen() {

const createChanels =()=>{
  PushNotification.createChannel({
    channelId:'test',
    channelName:'Test Channel'
  })
}

useEffect(()=>{
  createChanels()
},[])


  const dispatch = useDispatch();

const handleLogout=async()=>{
  await signOut(auth)
  await AsyncStorage.removeItem('user');
  dispatch(setUser(null))
}


const handleNotify=()=>{
  PushNotification.localNotification({
    channelId:'test',
    title:'show notify',
    message:'IS IT WORKING'
  })
  
}


  return (<ScreenWrapper>
    <View className='flex-row justify-between items-center p-4'>
    <TouchableOpacity className='p-2 px-3 bg-white border border-gray-200 rounded-full' onPress={handleNotify}>
        <Text>Notify</Text>
      </TouchableOpacity>
      <View>
      </View>
      <TouchableOpacity className='p-2 px-3 bg-white border border-gray-200 rounded-full' onPress={handleLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  </ScreenWrapper>
  )
}