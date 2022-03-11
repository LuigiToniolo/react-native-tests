import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

import Texto from '../../../components/Texto';

export default function Itens({ titulo, lista }) {
    return (
    <>
        <Texto style={estilos.titulo}>{titulo}</Texto>
        { lista.map((nome, imagem) => {
            return (
            <View>
                <Texto style={estilos.item}>{ nome }</Texto>
                <Image source={imagem}/>
            </View>
            );
        }) }
    </>
    );
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 5,
        fontSize: 20,
        lineHeight: 32,
    },
    item: {

    }
})