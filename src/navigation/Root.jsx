import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import AppNavigation from './AppNavigation'
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const Drawer = createDrawerNavigator();


const DummyScreen = props => (
  <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
    <Text>{props.name}</Text>
  </View>
);

export default function Root() {
  const {user} =useSelector(state=>state.user)

 
    return (
      <NavigationContainer>
        {/*  */}
        {user?( <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
          <Drawer.Screen name="Main" component={AppNavigation} />
          <Drawer.Screen name="Your Trips">
            {() => <DummyScreen name={"Your Trips"} />}
          </Drawer.Screen>
  
          <Drawer.Screen name="Help">
            {() => <DummyScreen name={"Help"} />}
          </Drawer.Screen>
  
          <Drawer.Screen name="Wallet">
            {() => <DummyScreen name={"Wallet"} />}
          </Drawer.Screen>
  
          <Drawer.Screen name="Settings">
            {() => <DummyScreen name={"Settings"} />}
          </Drawer.Screen>
        </Drawer.Navigator>):(<AppNavigation/>)}
       
      </NavigationContainer>
    );
 
}
