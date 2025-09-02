import { useQuery } from "@tanstack/react-query";
import { useNavigation } from "expo-router";
import React, { useContext, useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { StackTypes } from "../../@types/routes";
import { AuthContext } from "../../context/AuthContext";
import { themas } from "../../global/themes";
import API from "../../services/api";
import { style } from "./styles";

interface ImageData {
  image_base64_front: string;
  image_base64_back: string;
}
const IndexCardPerson = () => {
  const [image, setImage] = useState<string>();
  const [imageBack, setImageBack] = useState<string>();
  const [visible, setVisible] = useState<boolean>(true);
  const navigation = useNavigation<StackTypes>();
  const { user } = useContext(AuthContext);

  const fetchPersonImages = async (): Promise<ImageData> => {
    if (!user?.user?.id) {
      throw new Error("User ID is not available.");
    }
    const response = await API.get<ImageData>(
      `agent/generateImage/${user.user.id}`,
      {
        params: { email: user.email, password: user.password },
      }
    );
    return response.data;
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["personImages", user?.user?.id],
    queryFn: fetchPersonImages,
    enabled: !!user?.user?.id,
    retry: 1,
  });

  useEffect(() => {
    if (isError && error) {
      console.log("ERRO " + error);
      alert("Erro ao carregar a imagem");
      navigation.goBack();
    }
  }, [isError, error, navigation]);
  useEffect(() => {
    if (data) {
      setImage(data.image_base64_front);
      setImageBack(data.image_base64_back);
    }
  }, [data]);

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
