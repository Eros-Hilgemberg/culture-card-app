import { RouteProp, useRoute } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { router } from "expo-router";
import React, { useContext, useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { StackNavigation } from "../../@types/routes";
import { AuthContext } from "../../context/AuthContext";
import { themas } from "../../global/themes";
import API from "../../services/api";
import { style } from "./styles";

interface ImageData {
  image_base64_front: string;
  image_base64_back: string;
}

type CardGroupRouteProps = RouteProp<StackNavigation, "CardGroup">;
const CardGroup = () => {
  const [image, setImage] = useState<string>();
  const [imageBack, setImageBack] = useState<string>();
  const [visible, setVisible] = useState<boolean>(true);
  const { user } = useContext(AuthContext);

  const route = useRoute<CardGroupRouteProps>();
  const { id } = route.params;
  async function fetchGroupImages(
    id: string,
    email: string,
    password: string
  ): Promise<ImageData> {
    const response = await API.get<ImageData>(`agent/generateImage/${id}`, {
      params: { email, password },
    });
    return response.data;
  }

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["groupImages", id],
    queryFn: () => fetchGroupImages(String(id), user!.email, user!.password),
    enabled: !!id,
  });

  useEffect(() => {
    if (isError && error) {
      console.log("ERRO " + error);
      alert("Erro ao carregar a imagem");
      router.push("/home");
    }
  }, [isError, error]);
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

export default CardGroup;
