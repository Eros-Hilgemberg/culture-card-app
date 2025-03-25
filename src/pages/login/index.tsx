import React from 'react'
import { Button, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { style } from "./styles"
//import Icon from 'react-native-vector-icons/FontAwesome';
import { MaterialIcons } from '@expo/vector-icons'
import { themas } from '../../global/themes';
let Logo = require('../../assets/images/LogoImpact.png');
function index() {

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image style={style.logo}
                    source={Logo}
                />
                <Text style={style.text}>Bem Vindo ao Culture Card App!</Text>
            </View>
            <View style={style.boxMid}>
                <Text style={style.label}>Usuário ou E-mail</Text>
                <View style={style.boxInput}>
                    <TextInput style={style.input} />
                    <MaterialIcons name="email" size={20} color={themas.colors.gray} />
                </View>
                <Text style={style.label}>Senha</Text>
                <View style={style.boxInput}>
                    <TextInput style={style.input} />
                    <MaterialIcons name="remove-red-eye" size={20} color={themas.colors.gray} />
                </View>
            </View>
            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button}>
                    <Text style={style.textButton}>Entrar</Text>
                </TouchableOpacity>
                <Text style={style.textBottom}>Esqueceu sua senha?<Text style={{ color: 'blue' }}> Clique aqui.</Text></Text>
            </View>
        </View>
    )
}

export default index