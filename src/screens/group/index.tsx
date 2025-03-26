import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import API from '../../services/api';

const IndexGroup = () => {
    const [group, setGroup] = useState<Group>();
    async function listGroup() {
        try {
            let id = 2
            const response = await API.get(`/group/${id}`).then(
                (response) => setGroup(response.data)
            );
        } catch (error) {
            console.log("ERRO " + error)
        }
    }
    useEffect(() => {
        listGroup();
    }, []);
    return (
        <View>
            <Text>{group?.razaoGrupo}</Text>
            <Text>{group?.seguimento}</Text>
            <Text>{group?.cnpj}</Text>
        </View>
    )
}

export default IndexGroup