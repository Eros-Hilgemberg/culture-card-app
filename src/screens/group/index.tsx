import { FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { useContext, useEffect, useState } from "react";
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
  const [group, setGroup] = useState<UserGroup>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigation = useNavigation<StackTypes>();
  const { user } = useContext(AuthContext);

  async function listGoups() {
    try {
      const response = await API.get(`agent/${user?.user.id}`, {
        params: { email: user?.email, password: user?.password },
      });

      setGroup(response.data.agent);
      setIsLoading(false);
    } catch (error) {
      console.log("ERRO " + error);
      alert("Erro ao carregar a imagem");
      navigation.navigate("Home");
    }
  }

  const cardGroup = (id: string) => {
    navigation.navigate("CardGroup", { id });
  };

  useEffect(() => {
    listGoups();
  }, []);
  return isLoading ? (
    <View style={styles.container}>
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
        Seus grupos {group!.nomeCompleto.split(" ")[0]}
      </Text>
      {group && (
        <FlatList
          data={group.agent_relation}
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
