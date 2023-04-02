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


const Stack =createNativeStackNavigator()

export default function AppNavigation() {

const {user} =useSelector(state=>state.user)
//console.log(user);
const dispatch =useDispatch()


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
onAuthStateChanged(auth,us=>{
   
    dispatch(setUser(us))
})

if (user) {
    return (
 
        <NavigationContainer>
         <Stack.Navigator initialRouteName='Home'>
         <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
            <Stack.Screen name='SignIn' component={SignInScreen} options={{headerShown:false}}/>
            <Stack.Screen name='SignUp' component={SignUpScreen} options={{headerShown:false}}/>
         </Stack.Navigator>
        </NavigationContainer>
        
      ) 
}else{
    return (
 
        <NavigationContainer>
         <Stack.Navigator initialRouteName='Home'>
       
         <Stack.Screen name='Login' component={WelcomeScreen} options={{headerShown:false}}/>
            <Stack.Screen name='SignIn' component={SignInScreen} options={{headerShown:false}}/>
            <Stack.Screen name='SignUp' component={SignUpScreen} options={{headerShown:false}}/>
         </Stack.Navigator>
        </NavigationContainer>
        
      )
}
  
}







