import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type StackNavigation = {
  Home: undefined;
  Login: undefined;
  Person: undefined;
  Group: undefined;
  CardPerson: undefined;
  CardGroup: { id: string };
};
export type StackTypes = NativeStackNavigationProp<StackNavigation>;
