import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type StackNavigation = {
  Home: undefined;
  Login: undefined;
  Person: undefined;
  Group: undefined;
  CardPerson: undefined;
  CardGroup: { id: string };
};
export type StackTypes = NativeStackNavigationProp<StackNavigation>;
