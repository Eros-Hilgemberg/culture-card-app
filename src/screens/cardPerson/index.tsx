import { useNavigation } from "expo-router";
import React, { useContext, useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { StackTypes } from "../../@types/routes";
import { AuthContext } from "../../context/AuthContext";
import { themas } from "../../global/themes";
import API from "../../services/api";
import { style } from "./styles";

const IndexCardPerson = () => {
  const [image, setImage] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigation = useNavigation<StackTypes>();
  const { user } = useContext(AuthContext);
  async function listPerson() {
    try {
      const response = await API.get<{
        image_base64_front: string;
        image_base64_back: string;
      }>(`agent/generateImage/${user?.user.id}`, {
        params: { email: user?.email, password: user?.password },
      });
      setImage(response.data.image_base64_front);
      setIsLoading(false);
    } catch (error) {
      console.log("ERRO " + error);
      alert("Erro ao carregar a imagem");
      navigation.navigate("Home");
    }
  }
  useEffect(() => {
    listPerson();
  }, []);
  return isLoading ? (
    <View style={style.container}>
      <Text
        style={{
          color: themas.colors.secondary,
          fontSize: 18,
          fontWeight: "bold",
        }}
      >
        Carregando...
      </Text>
    </View>
  ) : (
    <View style={style.container}>
      <Image source={{ uri: image }} style={style.image} />
    </View>
  );
};

export default IndexCardPerson;
