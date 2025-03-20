import React, { useState } from "react";
import { View, Text, TextInput, Alert, StyleSheet } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";

// Instalar npm install firebase
import { auth, db } from "../../firebaseConfig"; 
import CustomButton from "../components/CustomButton";
import Footer from "../components/Footer";
import { doc, getDoc } from "firebase/firestore";

// Usar o Imagem do Expo
import { Image } from 'expo-image';
import { router } from "expo-router";

const SignIn: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    try {
      console.log("🔹 Tentando fazer login...");

      const userCredential = await signInWithEmailAndPassword(auth, email, senha); 
      const user = userCredential.user;

      const userDocRef = doc(db, "t_usuarios", user.uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        const perfil = userData?.perfil;

        if (perfil === "comum") {
          console.log("✅ Login bem-sucedido!");
          Alert.alert("Sucesso", "Login realizado com sucesso!");

          // Navega para a Sessão Restrita de clientes
          router.push("/restrictedSessionClient");
        } else {
          console.error("❌ Perfil inválido");
          Alert.alert("Erro", "Você não tem permissão para acessar esta área.");
        }
      } else {
        console.error("❌ Usuário não encontrado no Firestore");
        Alert.alert("Erro", "Usuário não encontrado.");
      }

    } catch (error: any) {
      console.error("❌ Erro ao fazer login:", error.message);
      Alert.alert("Erro", "Email ou senha incorretos.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Imagem de fundo */}
      <Image 
        source={require("../../assets/background/tela-login-cliente.png")} 
        style={styles.background}
      />

      {/* Formulário */}
      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <CustomButton title="Login" textColor="#fff" onPress={handleLogin} width={'100%'}/>
        
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

export default SignIn;
