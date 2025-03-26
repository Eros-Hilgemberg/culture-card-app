import { View, Text, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import API from '../../services/api';
import { map } from 'zod';



const IndexPerson = () => {
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
        <View>
            <Text>{person?.nomeParticipante}</Text>
            <Text>{person?.atuacaoParticipante}</Text>
            <Text>{person?.atividadeParticipante}</Text>
        </View>
    )
}

export default IndexPerson