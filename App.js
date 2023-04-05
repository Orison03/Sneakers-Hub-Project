import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from "./screens/Products";
import SingleProducts from "./screens/SingleProducts";


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header : () => null,
        }}
        initialRouteName="products"
      >
        <Stack.Screen name="products" component={Products} />
        <Stack.Screen name="product" component={SingleProducts} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
