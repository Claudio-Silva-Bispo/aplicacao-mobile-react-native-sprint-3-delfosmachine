import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import CustomButton from '../components/CustomButton';
import Footer from '../components/Footer';
import { StyleSheet } from "react-native";
import { router } from 'expo-router';
import { Image } from 'expo-image'


const HomeClientScreen: React.FC<{}> = () => {

  
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
          <Image 
          source={require("../../assets/homeClient/background.jpg")} 
          style={styles.backgroundImage}/>
        </View>

          <View style={styles.backgroundText}>
            {/* Card com texto */}
            <View>
              <Text style={styles.title}>
                Imagine receber uma notificação informando que sua consulta foi agendada de acordo com a sua disponibilidade, no local mais conveniente, sem precisar perder tempo procurando ou se preocupando com isso.
              </Text>
            </View>

            {/* Botões */}
            <View style={styles.buttonContainer}>
              <CustomButton title="cadastro" onPress={() => router.push("/(auth)/sign-up")} width={'100%'} textColor='#fff'/>
              <CustomButton title="login" onPress={() => router.push("/(auth)/sign-in")} width={'100%'} textColor='#fff'/>
            </View>
          </View>

          {/* Rodapé */}
          <Footer textColor='#0A4275'/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#F7F7F7',
  },
  imageContainer: {
    width: '110%',
    height: 280,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  // Campo de texto
  backgroundText: {
    width: '120%',
    height: '60%',
    backgroundColor: '#3397FE',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems:'center',
    padding: 40,

  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  subject: {
    color:'white',
    marginHorizontal:10,
    textAlign:'center'
  },

  // Botão
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default HomeClientScreen;