import { CommonActions, useNavigation } from '@react-navigation/native';
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { StackTypes } from '../../@types/routes';
import { useEffect } from 'react';
import { style } from './style';

let CardPerson = require('../../assets/images/CardPerson.png');
let CardGroup = require('../../assets/images/CardGroup.png');

export default function IndexHome() {
    const navigation = useNavigation<StackTypes>();

    useEffect(() => {
        navigation.addListener('beforeRemove', (e) => {
            e.preventDefault();
        });
    }, [navigation]);

    function handleNext(caminho: string) {
        navigation.navigate(caminho as any);
    }

    return (
        <View style={style.bg}>
            <Text style={style.textTitle}>Selecione a opção:</Text>
            <Text style={style.text}>Pessoa</Text>
            <TouchableOpacity onPress={() => handleNext("Person")}>
                <View style={style.card}>
                    <Image style={style.imageCard}
                        source={CardPerson}
                    />
                </View>
            </TouchableOpacity>
            <Text style={style.text}>Grupo</Text>
            <TouchableOpacity onPress={() => handleNext("Group")}>
                <View style={style.card}>
                    <Image style={style.imageCard}
                        source={CardGroup}
                    />
                </View>
            </TouchableOpacity>


        </View >
    )
}