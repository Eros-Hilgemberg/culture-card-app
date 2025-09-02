import { FontAwesome6 } from "@expo/vector-icons";
import { useQuery } from "@tanstack/react-query";
import { useNavigation } from "expo-router";
import { useContext, useEffect } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { StackTypes } from "../../@types/routes";
import { AuthContext } from "../../context/AuthContext";
import { themas } from "../../global/themes";
import API from "../../services/api";
import { styles } from "./styles";
export interface UserGroup {
  id: number;
  nomeCompleto: string;
  agent_relation: Array<InfoGroup>;
}

export interface InfoGroup {
  object_id: number;
  type: string;
}
const IndexGroup = () => {
  const navigation = useNavigation<StackTypes>();
  const { user } = useContext(AuthContext);

  async function listGoups(): Promise<UserGroup> {
    const response = await API.get(`agent/${user?.user.id}`, {
      params: { email: user?.email, password: user?.password },
    });
    return response.data.agent;
  }

  const { data, isLoading, isError, error } = useQuery<UserGroup>({
    queryKey: ["groups", user?.user?.id],
    queryFn: listGoups,
    retry: 1,
  });
  useEffect(() => {
    if (isError && error) {
      console.log("ERRO " + error);
      alert("Erro ao carregar grupos");
      navigation.navigate("Home");
    }
  }, [isError, error, navigation]);

  const cardGroup = (id: string) => {
    navigation.navigate("CardGroup", { id: id });
  };
  return isLoading || !data ? (
    <View style={styles.container_loading}>
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
    <View style={styles.container}>
      <Text style={styles.title}>
        Seus grupos {String(data.nomeCompleto).split(" ")[0]}
      </Text>
      {data && (
        <FlatList
          data={data.agent_relation}
          keyExtractor={(item) => item.object_id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => cardGroup(item.object_id.toString())}
            >
              <View style={styles.item}>
                <FontAwesome6 name="people-group" size={24} color="black" />
                <Text style={styles.label}>{item.type}</Text>
              </View>
            </TouchableOpacity>
          )}
          ListEmptyComponent={<Text>Nenhuma relação encontrada.</Text>}
        />
      )}
    </View>
  );
};

export default IndexGroup;
