import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../context/AuthContext";
import CardGroup from "../screens/cardGroup";
import IndexCardPerson from "../screens/cardPerson";
import IndexGroup from "../screens/group";
import IndexHome from "../screens/home";
import IndexLogin from "../screens/login";

const Stack = createNativeStackNavigator();

const Routes = () => {
  const { user, loading, logout } = useContext(AuthContext);
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }
  const HeaderRight = () => (
    <TouchableOpacity onPress={logout}>
      <Text style={{ color: "red" }}>Sair</Text>
    </TouchableOpacity>
  );
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!user ? (
          // Rotas públicas
          <Stack.Screen
            name="Login"
            component={IndexLogin}
            options={{ title: "Login" }}
          />
        ) : (
          // Rotas privadas
          <>
            <Stack.Screen
              name="Home"
              component={IndexHome}
              options={{
                title: "Tela Inicial",
                headerBackVisible: false,
                headerRight: HeaderRight,
              }}
            />
            <Stack.Screen
              name="Group"
              component={IndexGroup}
              options={{ title: "Grupo" }}
            />
            <Stack.Screen
              name="CardPerson"
              component={IndexCardPerson}
              options={{ title: "Cartão de Cultura" }}
            />
            <Stack.Screen
              name="CardGroup"
              component={CardGroup}
              options={{ title: "Cartão de Grupo" }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
