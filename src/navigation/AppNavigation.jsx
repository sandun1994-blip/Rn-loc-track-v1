import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'
import { useSelector, useDispatch } from 'react-redux'
import WelcomeScreen from '../screens/WelcomeScreen'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../config/firebase'
import { setUser } from '../redux/slices/user'
import AsyncStorage from '@react-native-async-storage/async-storage'



const Stack =createNativeStackNavigator()

export default function AppNavigation() {
    const {user} =useSelector(state=>state.user)
    
const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user');
     
    
      if (jsonValue) {
        
        dispatch(setUser(jsonValue)) 
        
      }
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };
  


//console.log(user);
const dispatch =useDispatch()

useEffect(()=>{
 getData()

},[])


// useEffect(() => {

//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//         if (user) {
//             // User is signed in, see docs for a list of available properties
//             // https://firebase.google.com/docs/reference/js/firebase.User
//             setUser(user)
//             // console.log(user, 'outh chnage');
//       // ...
//         } 
//     });

  
   
//     setLoading(false)
//     return () => (unsubscribe())

    
// }, [])
onAuthStateChanged(auth,async(us)=>{
   
    
    if (us) {
        dispatch(setUser(us)) 
        const jsonValue = JSON.stringify(us)
        await AsyncStorage.setItem('user', jsonValue)

    }
   
    
})

if (user) {
    return (
 
        
         <Stack.Navigator initialRouteName='Home'>
         <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
            <Stack.Screen name='SignIn' component={SignInScreen} options={{headerShown:false}}/>
            <Stack.Screen name='SignUp' component={SignUpScreen} options={{headerShown:false}}/>
         </Stack.Navigator>
      
        
      ) 
}else{
    return (
 
        
         <Stack.Navigator >
       
         <Stack.Screen name='Login' component={WelcomeScreen} options={{headerShown:false}}/>
         <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
            <Stack.Screen name='SignIn' component={SignInScreen} options={{headerShown:false}}/>
            <Stack.Screen name='SignUp' component={SignUpScreen} options={{headerShown:false}}/>
         </Stack.Navigator>
       
        
      )
}
  
}








