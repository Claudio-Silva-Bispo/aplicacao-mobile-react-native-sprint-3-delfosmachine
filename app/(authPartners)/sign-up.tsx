import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet } from 'react-native';
import { collection, setDoc, doc } from "firebase/firestore";
import { db, auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import CustomButton from '../components/CustomButton';
import Footer from '../components/Footer';

// Usar o Imagem do Expo
import { Image } from 'expo-image';
import { router } from 'expo-router';

const CadastroClienteScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [perfil, setPerfil] = useState('');

  const handleCadastro = async () => {
    console.log("🔹 Botão pressionado! Tentando cadastrar usuário...");
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;
      const idCliente = user.uid;
      const perfil = "clinica"; // Definir perfil

      console.log("✅ Usuário cadastrado com sucesso! ID:", user.uid);
      Alert.alert("Sucesso", "Usuário cadastrado com sucesso!");

      await setDoc(doc(collection(db, "t_clinicas"), user.uid), {
        IdCliente: idCliente,
        email: email,
        perfil: perfil,
        criadoEm: new Date().toISOString(),
      });

      console.log("✅ Dados do usuário salvos no Firestore!");
      router.push("/success");
    } catch (error) {
      console.error("❌ Erro ao cadastrar usuário:", error);
      Alert.alert("Erro", "Não foi possível cadastrar o usuário.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Imagem de fundo */}
      <Image 
        source={require("../../assets/background/tela-cadastro-cliente.png")} 
        style={styles.background}
      />

      {/* Formulário */}
      <View style={styles.formContainer}>
          <Text style={styles.title}>Cadastro</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome da clínica"
            placeholderTextColor="#555"
            autoCapitalize="words"
            value={nome}
            onChangeText={setNome}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#555"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#555"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />

          <CustomButton title="Cadastrar" textColor='#fff' onPress={handleCadastro} width={'100%'} />
      </View>

      {/* Rodapé */}
      <Footer textColor='#fff'/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', 
    width: '100%',
  },
  background: {
    position: 'absolute', 
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  formContainer: {
    width: "90%",
    backgroundColor: "rgba(255, 255, 255, 0.6)", 
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#024059',
  },
  input: {
    minWidth: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: "#024059",
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingLeft: 5,
    marginBottom: 10,
  },
  inputFocused: {
    backgroundColor: "white", 
  },
});

export default CadastroClienteScreen;
