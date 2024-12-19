import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../screens/Welcome';
import ProductList from '../screens/ProductList';
import TabNavigator from './TabNavigator';
import AddProduct from '../screens/AddProduct'

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
                <Stack.Screen name="ProductList" component={ProductList} options={{ headerShown: false }} />
                <Stack.Screen name="AddProduct" component={AddProduct} options={{ headerShown: false }} />
                <Stack.Screen name="TabNavigator" component={TabNavigator}  options={{ headerShown: false }}/>
               </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
