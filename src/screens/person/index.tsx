import { View, Text, Alert, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import API from '../../services/api';
import { map } from 'zod';
import { style } from '../person/styles';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../@types/routes';



const IndexPerson = () => {
    const [person, setPerson] = useState<Person>();
    const navigation = useNavigation<StackTypes>();
    function handleNext() {
        navigation.navigate("CardPerson");
    }
    async function listPerson() {
        try {
            let id = 2
            const response = await API.get(`/participante/${id}`).then(
                (response) => setPerson(response.data)
            );
        } catch (error) {
            console.log("ERRO " + error)
        }
    }


    useEffect(() => {
        listPerson();
    }, []);
    return (
        <View style={style.container}>
            <View>
                {/* <Text>{person?.nomeParticipante}</Text>
                <Text>{person?.atuacaoParticipante}</Text>
                <Text>{person?.atividadeParticipante}</Text> */}
                <TouchableOpacity onPress={handleNext}>
                    <Text >Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default IndexPerson