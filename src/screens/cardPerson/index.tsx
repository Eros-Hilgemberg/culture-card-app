import { View, Text, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import API from '../../services/api';
import { map } from 'zod';
import { style } from '../cardPerson/styles';



const IndexCardPerson = () => {
    const [person, setPerson] = useState<Person>();
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
            <View style={style.card}>
                {/* <Text>{person?.nomeParticipante}</Text>
                <Text>{person?.atuacaoParticipante}</Text>
                <Text>{person?.atividadeParticipante}</Text> */}
                <Text style={style.vertical}>teste1</Text>
                <Text style={style.vertical}>teste</Text>
                <Text style={style.vertical}>teste</Text>
                <Text style={style.vertical}>teste</Text>
                <Text style={style.vertical}>teste</Text>
                <Text style={style.vertical}>teste</Text>
                <Text style={style.vertical}>teste</Text>
                <Text style={style.vertical}>teste</Text>
                <Text style={style.vertical}>teste</Text>
                <Text style={style.vertical}>teste</Text>
                <Text style={style.vertical}>teste</Text>
                <Text style={style.vertical}>teste</Text>
                <Text style={style.vertical}>teste</Text>
                <Text style={style.vertical}>teste</Text>
                <Text style={style.vertical}>teste</Text>
                <Text style={style.vertical}>teste</Text>
                <Text style={style.vertical}>teste</Text>
                <Text style={style.vertical}>teste</Text>
                <Text style={style.vertical}>teste</Text>
                <Text style={style.vertical}>testes</Text>
                <Text style={style.vertical}>teste</Text>
            </View>
        </View>
    )
}

export default IndexCardPerson