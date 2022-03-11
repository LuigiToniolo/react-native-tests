import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cesta';

//status bar é a barra onde fica a bateria, wifi, bluetooth, etc e 
//o statusBar faz com que deixa essa barra preta e não branca, ficando
//transparente

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if (!fonteCarregada) { //Não carregar a página se a fonte não estiver carregada
    return <AppLoading />
  }

  return (
    <SafeAreaView>
      <StatusBar /> 
      <Cesta {...mock}/>
    </SafeAreaView>
  );
}

