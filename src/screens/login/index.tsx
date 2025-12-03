import { MaterialIcons } from "@expo/vector-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { z } from "zod";
import { AuthContext } from "../../context/AuthContext";
import { themas } from "../../global/themes";
import API from "../../services/api";
import { style } from "./styles";

let Logo = require("../../assets/images/LogoImpact.png");

const schema = z.object({
  user: z.string().nonempty("Preencha seu E-mail"),
  password: z
    .string()
    .nonempty("Preencha sua senha")
    .min(6, "A senha deve ter no mínimo 6 caracteres."),
});
type FormData = z.infer<typeof schema>;

function IndexLogin() {
  const { login } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(true);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      user: "",
      password: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      const response = await API.post("login", {
        email: data.user,
        password: data.password,
      });

      if (!response.data.user.id || !response.data.user.name) {
        Alert.alert("Erro", "Sem dados de carteira");
        return;
      }
      const userData = {
        email: data.user,
        password: data.password,
        user: {
          id: response.data.user.id,
          name: response.data.user.name,
        },
      };
      setIsLoading(false);
      await login(userData);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) {
          Alert.alert("Erro", "E-mail ou senha incorretos.");
        } else if (error.response?.status === 400) {
          Alert.alert("Erro", "Dados inválidos. Verifique suas informações.");
        } else if (error.response?.status === 500) {
          console.log(error.response);
          Alert.alert("Erro", "Falha no servidor. Tente novamente mais tarde.");
        }
        return;
      } else {
        Alert.alert("Erro", "Ocorreu um erro inesperado. Tente novamente.");
      }
    }
  };
  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image style={style.logo} source={Logo} />
        <Text style={style.text}>Culture Card App</Text>
      </View>
      <View style={style.boxMid}>
        <Text style={style.label}>E-mail</Text>
        <View style={style.boxInput}>
          <TextInput
            style={style.input}
            placeholder="Digite seu E-mail"
            onChangeText={(text) => setValue("user", text)}
            {...register("user")}
          />
          <MaterialIcons name="email" size={20} color={themas.colors.gray} />
        </View>
        {errors.user && <Text style={style.error}>{errors.user.message}</Text>}
        <Text style={style.label}>Senha</Text>
        <View style={style.boxInput}>
          <TextInput
            style={style.input}
            secureTextEntry={visible}
            placeholder="Digite sua senha"
            onChangeText={(text) => setValue("password", text)}
            {...register("password")}
          />
          <TouchableOpacity onPress={() => setVisible(!visible)}>
            <MaterialIcons
              name="remove-red-eye"
              size={20}
              color={themas.colors.gray}
            />
          </TouchableOpacity>
        </View>
        {errors.password && (
          <Text style={style.error}>{errors.password.message}</Text>
        )}
      </View>
      <View style={style.boxBottom}>
        <TouchableOpacity disabled={isLoading} style={style.button} onPress={handleSubmit(onSubmit)}>
          <Text style={style.textButton}>Entrar</Text>
        </TouchableOpacity>
        {/* <Text style={style.textBottom}>
          Esqueceu sua senha?
          <Text style={{ color: "blue" }}> Clique aqui.</Text>
        </Text> */}
      </View>
    </View>
  );
}

export default IndexLogin;
