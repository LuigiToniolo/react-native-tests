import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Texto ({ children, style }) {
    let estilo = estilos.texto;

    if (style.fontWeight === 'bold') { // quando em style e na fontweight estiver bold, irá utilizar a estilização textoNegrito
        estilo = estilos.textoNegrito;  
    }
    return <Text style={[style, estilo]}>{ children }</Text>
}

const estilos = StyleSheet.create ({
    texto: {
        fontFamily: "MontserratRegular",
        fontWeight: "normal",
    },
    textoNegrito: {
        fontFamily: "MontserratBold",
        fontWeight: "normal",
    }
})

