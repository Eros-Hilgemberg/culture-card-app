import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { StackTypes } from "../../@types/routes";
import { AuthContext } from "../../context/AuthContext";
import { themas } from "../../global/themes";
import { style } from "./style";

let CardPerson = require("../../assets/images/CardPerson.png");
let CardGroup = require("../../assets/images/CardGroup.png");

export default function IndexHome() {
  const navigation = useNavigation<StackTypes>();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
    });
  }, [navigation]);

  function handleNext(caminho: string) {
    navigation.navigate(caminho as any);
  }
  return (
    <View style={style.bg}>
      <Text
        style={{
          color: themas.colors.secondary,
          fontSize: 18,
          fontWeight: "bold",
        }}
      >
        Olá {user?.user.name.split(" ")[0]}
      </Text>
      <Text style={style.textTitle}>Selecione uma opção:</Text>
      <Text style={style.text}>Pessoa</Text>
      <TouchableOpacity onPress={() => handleNext("CardPerson")}>
        <View style={style.card}>
          <Image style={style.imageCard} source={CardPerson} />
        </View>
      </TouchableOpacity>
      <Text style={style.text}>Grupo</Text>
      <TouchableOpacity onPress={() => handleNext("Group")}>
        <View style={style.card}>
          <Image style={style.imageCard} source={CardGroup} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
