import {View, Text, Pressable, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUser } from '../redux/slices/user';
import { useDispatch } from 'react-redux';


export default function CustomDrawer(props) {


const dispatch =useDispatch()

  const handleLogout=async()=>{
    await signOut(auth)
    await AsyncStorage.removeItem('user');
    dispatch(setUser(null))
  }


  return (
    <DrawerContentScrollView {...props}>
      <View style={{backgroundColor: "#212121", padding: 15}}>

        <View style={{flexDirection:'row',}}>
      


            <View>
                <Text style={{color:'white',fontSize:24}}>Sandun Tharuka</Text>
                
            </View>
            
        </View>


        <View style={{borderTopWidth:1,borderBottomWidth:1,borderTopColor:'#eee',borderBottomColor:'#eee',paddingVertical:5,marginVertical:10}}>
        <Pressable onPress={()=>(console.log())}>
          <Text style={{color: "#dddddd",paddingVertical:5}}>Messages</Text>
        </Pressable>
        </View>

        <Pressable onPress={()=>(console.log())}>
          <Text style={{color: "white"}}>Do more with your account</Text>
        </Pressable>

        <Pressable onPress={()=>(console.log())}>
          <Text style={{color: "white"}}>Make money driving</Text>
        </Pressable>

      </View>

      <DrawerItemList {...props} />
   
        <TouchableOpacity className='p-2 px-3 bg-white border border-gray-200 rounded-full' onPress={handleLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}
