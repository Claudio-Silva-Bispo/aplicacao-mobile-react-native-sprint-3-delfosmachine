import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo'
import { Link, router } from 'expo-router'
import { Text, View, StyleSheet } from 'react-native'
import { Image } from 'expo-image'
import CustomButton from '../components/CustomButton'

export default function Page() {

  return (
    <View style={styles.container}>
      {/* Imagem de fundo */}
      <View style={styles.imageContainer}>
        <Image 
          source={require("../../assets/home/tela-principal.png")} 
          style={styles.backgroundImage}
        />
      </View>

      <View style={styles.backgroundText}>
        {/* Título Principal */}
        <Text style={styles.title}>Bem-vindo à Delfos Machine</Text>

        <Text style={styles.subject}>Esqueça a preocupação com marcações! Nosso sistema sugere automaticamente consultas para 
          manter seu sorriso saudável, evitando gastos inesperados com tratamentos de última hora.</Text>

        {/* Botão de direcionamento para clientes ou parceiros */}
        <View style={styles.buttonContainer}>
          <CustomButton 
            title="Clientes" 
            textColor="#fff" 
            onPress={() => router.push('/homeClient')}
            width="90%" 
          />
          <CustomButton 
            title="Parceiros" 
            textColor="#fff" 
            onPress={() => router.push('/homePartners')}
            width="90%" 
          />
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#fff',
  },
  imageContainer: {
    width: '100%',
    height: 250,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 15,
    elevation: 5,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    opacity: 0.8,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },

  // Campo de texto
  backgroundText: {
    width: '100%',
    height: '60%',
    backgroundColor: '#3397FE',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems:'center',
    padding: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 10,
    color: 'white',
  },
  subject: {
    color:'white',
    marginHorizontal:10,
    textAlign:'center'
  }
});
