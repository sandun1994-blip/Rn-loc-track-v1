import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Snackbar from 'react-native-snackbar';
import ScreenWrapper from '../components/ScreenWrapper';
import { colors } from '../../theme';
import BackButton from '../components/BackButton';
 import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth'
 import { useDispatch, useSelector } from 'react-redux'
import { setUserLoading } from '../redux/slices/user';
import Loading from '../components/Loading';
import { auth } from '../config/firebase';




export default function SignInScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {userLoading} = useSelector(state=> state.user);

    const navigation = useNavigation();

     const dispatch = useDispatch();

    const handleSubmit = async ()=>{
        if(email && password){
            // good to go
            // navigation.goBack();
            // navigation.navigate('Home');
            try{
                dispatch(setUserLoading(true));
                await signInWithEmailAndPassword(auth, email, password);
                dispatch(setUserLoading(false));
                navigation.navigate('Home')
            }catch(e){
                dispatch(setUserLoading(false));
                Snackbar.show({
                    text: e.message,
                    backgroundColor: 'red'
                });
            }
            
        }else{
            // show error
            Snackbar.show({
                text: 'Email and Password are required!',
                backgroundColor: 'red'
            });
        }
    }

    const resetHandler = async () => {
     await sendPasswordResetEmail(auth, email, { url: 'http://localhost:3000/login' }).then(
        () => {
         
          Snackbar.show({
            text: 'check your mail box',
            backgroundColor: 'green'
        });
        }
      ).catch((e) => {
        
        Snackbar.show({
          text: 'this is not valid mail',
          backgroundColor: 'red'
      })
      })
    };





  return (
    <ScreenWrapper>
      <View className="flex justify-between h-full mx-4">
        <View>
            <View className="relative">
                <View className="absolute top-0 left-0 z-10">
                    <BackButton />
                </View>
                
                <Text className={`${colors.heading} text-xl font-bold text-center`}>Sign In</Text>
            </View>
            
            <View className="flex-row justify-center my-3 mt-5">
                <Image className="h-80 w-80" source={require('../../assets/images/login.png')} />
            </View>
            <View className="space-y-2 mx-2">
                <Text className={`${colors.heading} text-lg font-bold`}>Email</Text>
                <TextInput value={email} onChangeText={value=> setEmail(value)} className="p-4 bg-white rounded-full mb-3" />
                <Text  className={`${colors.heading} text-lg font-bold`}>Password</Text>
                <TextInput value={password} secureTextEntry onChangeText={value=> setPassword(value)} className="p-4 bg-white rounded-full mb-3" />
                <TouchableOpacity className="flex-row justify-end" onPress={resetHandler}>
                    <Text>Forget Password?</Text>
                </TouchableOpacity>
            </View>
        </View>
        
        <View>
            {
                userLoading? (
                    <Loading />
                ):(
                    <TouchableOpacity onPress={handleSubmit} style={{backgroundColor: colors.button}} className="my-6 rounded-full p-3 shadow-sm mx-2">
                        <Text className="text-center text-white text-lg font-bold">Sign In</Text>
                    </TouchableOpacity>
                    
                )
            }
            
        </View>
      </View>
    </ScreenWrapper>
  )
}