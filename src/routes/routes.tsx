import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import IndexLogin from "../screens/login";
import IndexHome from "../screens/home";
import IndexPerson from "../screens/person";
import IndexGroup from "../screens/group";

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={IndexLogin}
                    options={{ title: 'Login' }}
                />
                <Stack.Screen name="Home" component={IndexHome} options={{ title: 'Tela Inicial', headerBackVisible: false }} />
                <Stack.Screen name="Person" component={IndexPerson} options={{ title: 'Pessoa', }} />
                <Stack.Screen name="Group" component={IndexGroup} options={{ title: 'Grupo', }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Routes;