import { useNavigation } from "expo-router";
import React, { useContext, useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { StackTypes } from "../../@types/routes";
import { AuthContext } from "../../context/AuthContext";
import { themas } from "../../global/themes";
import API from "../../services/api";
import { style } from "./styles";

const IndexCardPerson = () => {
  const [image, setImage] = useState<string>();
  const [imageBack, setImageBack] = useState<string>();
  const [visible, setVisible] = useState<boolean>(true);
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
      setImageBack(response.data.image_base64_back);
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
      <TouchableOpacity onPress={() => setVisible(!visible)}>
        {visible ? (
          <Image source={{ uri: image }} style={style.image} />
        ) : (
          <Image source={{ uri: imageBack }} style={style.image} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default IndexCardPerson;
