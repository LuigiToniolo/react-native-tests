import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import Texto from '../../../components/Texto';


export default function Detalhes ({ nome, logoFazenda, nomeFazenda, descricao, preco, botao}) {
    return (
        <>
                <Texto style={estilos.nome}>{ nome }</Texto>
                <View style={estilos.fazenda}>
                    <Image style={estilos.imagemFazenda} source={logoFazenda}/>
                    <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
                </View>
                <Texto style={estilos.descricao}>{descricao}</Texto>
                <Texto style={estilos.preco}>{preco}</Texto>

                <TouchableOpacity style={estilos.botao} onPress={() => {}}>
                    <Texto style={estilos.textoBotao}>{ botao }</Texto>
                </TouchableOpacity>
        </>
    );
}

const estilos = StyleSheet.create({
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: '#464646',
        fontWeight: "bold",
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    fazenda: {
        flexDirection: "row", //todos os elementos em react native são display flex por padrão
        paddingVertical: 12,
    },
    imagemFazenda: {
        width: 32,
        height: 32,
    },      
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
    botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
    },
    textoBotao: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26 ,
        fontWeight: "bold",
    },
})