import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Jobs from './pages/Jobs';
import JobDetail from './pages/JobDetail';
import Favorite from './pages/Favorite';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function DravNav() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {backgroundColor:'#F5E9CF', },
        statusBarColor: '#7DB9B6',
        navigationBarColor: '#7DB9B6',
        headerTitleAlign: 'center',
        headerStyle: {backgroundColor: '#7DB9B6'},
        headerTitleStyle: {
          color: '#E96479',
          fontWeight: 'bold',
          fontSize: 25,
        },
        headerTintColor: '#E96479',
        drawerActiveTintColor: '#E96479', drawerInactiveTintColor: '#4D455D'
      }}>
      <Drawer.Screen name="JobsPage" component={Jobs} options={{headerTitle: 'Jobs'}}/>
      <Drawer.Screen name="FavoritePage" component={Favorite} options={{headerTitle: 'Favorites'}} />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          statusBarColor: '#7DB9B6',
          navigationBarColor: '#7DB9B6',
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#7DB9B6'},
          headerTitleStyle: {
            color: '#E96479',
            fontWeight: 'bold',
            fontSize: 25,
          },
          headerTintColor: '#E96479',
        }}>
        <Stack.Screen name="DrawNav" component={DravNav} options={{headerShown: false}}/>
        <Stack.Screen
          name="JobDetailPage"
          component={JobDetail}
          options={{title: 'Job Detail'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
