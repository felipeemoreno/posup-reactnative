import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppLoading from 'expo-app-loading';

import HomePage from './Pages/HomePage'
import ProductsPage from './Pages/ProductsPage';
import ProductDetails from './Pages/ProductDetails';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

const Stack = createNativeStackNavigator();

export default function App() {

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  });

  if(!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>  
        <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{ title: 'Rango Express APP' }}
          />
          <Stack.Screen name="Products" component={ProductsPage} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    );
  }
}


