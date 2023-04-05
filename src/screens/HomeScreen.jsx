import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React ,{useEffect} from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { signOut } from 'firebase/auth'
import { auth, db } from '../config/firebase'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/slices/user'
import PushNotification from 'react-native-push-notification';
import ReactNativeForegroundService from '@supersami/rn-foreground-service'
import { collection, getDocs } from 'firebase/firestore'
import HomeMap from '../components/HomeMap'
import Message from '../components/Message'
import HomeSearch from '../components/HomeSearch'
export default function HomeScreen() {

const createChanels =()=>{
  PushNotification.createChannel({
    channelId:'test',
    channelName:'Test Channel'
  })
}
const getData =async()=>{
  const querySnapshot = await getDocs(collection(db, "location"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
}
useEffect(()=>{
  createChanels()
},[])
useEffect(() => {
  ReactNativeForegroundService.add_task(() => { getData()}, {
    delay: 10000,
    onLoop: true,
    taskId: 'taskid',
    onError: e => console.log('Error logging:', e),
  });
 
}, []);

const starttask = () => {
  ReactNativeForegroundService.start({
    id: 1,
    title: 'My Foreground Service',
    text: 'This is my foreground service',
    icon: 'ic_notification',
  });
};

  const dispatch = useDispatch();




const handleNotify=()=>{
  PushNotification.localNotification({
    channelId:'test',
    title:'show notify',
    message:'IS IT WORKING'
  })
  
}


  return (<ScreenWrapper>
     <View style={{height: Dimensions.get('window').height-400}}>
        <HomeMap />
      </View>
      <Message/>
      <HomeSearch/>
  </ScreenWrapper>
  )
}