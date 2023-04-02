import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../../theme'
import { useNavigation } from '@react-navigation/native'

export default function WelcomeScreen() {
const navigation =useNavigation()


  return (
    <View className='h-auto flex justify-around'>
      <View className='mx-5 mb-10' >
        <Text className={`text-center font-bold text-4xl ${colors.heading} mb-10`}>WELCOME</Text>
        <TouchableOpacity className='shadow p-3 rounded-full mb-5' style={{backgroundColor:colors.button}} onPress={()=>{
            navigation.navigate('SignIn')
        }}>
            <Text className='text-center text-white text-lg font-bold'>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity className='shadow p-3 rounded-full' style={{backgroundColor:colors.button}} 
        onPress={()=>{
            navigation.navigate('SignUp')
        }}>
            <Text className='text-center text-white text-lg font-bold'>Sign Up</Text>
        </TouchableOpacity>
        </View>

    </View>
  )
}