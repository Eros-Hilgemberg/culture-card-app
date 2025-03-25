import React from 'react'
import { Alert, Button, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { style } from "./styles"
import { MaterialIcons } from '@expo/vector-icons'
import { themas } from '../../global/themes';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../@types/routes';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";


let Logo = require('../../assets/images/LogoImpact.png');

const schema = z.object({
    user: z.string().nonempty("Preencha seu E-mail").email("Digite um E-mail válido!"),
    password: z.string().nonempty("Preencha sua senha").min(6, "A senha deve ter no mínimo 6 caracteres.")
})
type FormData = z.infer<typeof schema>

function IndexLogin() {
    const navigation = useNavigation<StackTypes>();
    function handleNext() {
        navigation.navigate("Home");
    }

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

    const onSubmit = (data: FormData) => {
        Alert.alert("Dados enviados", JSON.stringify(data));
        handleNext()
    };
    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image style={style.logo}
                    source={Logo}
                />
                <Text style={style.text}>Bem Vindo ao Culture Card App!</Text>
            </View>
            <View style={style.boxMid}>
                <Text style={style.label}>E-mail</Text>
                <View style={style.boxInput}>
                    <TextInput style={style.input} placeholder='Digite seu E-mail' onChangeText={(text) => setValue("user", text)} {...register("user")} />
                    <MaterialIcons name="email" size={20} color={themas.colors.gray} />
                </View>
                {errors.user && <Text style={style.error}>{errors.user.message}</Text>}
                <Text style={style.label}>Senha</Text>
                <View style={style.boxInput}>
                    <TextInput style={style.input} secureTextEntry={true} placeholder='Digite sua senha' onChangeText={(text) => setValue("password", text)} {...register("password")} />
                    <MaterialIcons name="remove-red-eye" size={20} color={themas.colors.gray} />
                </View>
                {errors.password && <Text style={style.error}>{errors.password.message}</Text>}

            </View>
            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={handleSubmit(onSubmit)}>
                    <Text style={style.textButton}>Entrar</Text>
                </TouchableOpacity>
                <Text style={style.textBottom}>Esqueceu sua senha?<Text style={{ color: 'blue' }}> Clique aqui.</Text></Text>
            </View>
        </View>
    )
}

export default IndexLogin