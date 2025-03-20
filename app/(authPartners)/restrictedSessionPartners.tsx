import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";
import Footer from "../components/Footer";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { router } from "expo-router";

const RestrictedSessionPartners: React.FC<{ }> = () => {

  const handleSignOut = async () => {
      try {
        await signOut(auth);  
        router.replace('/(home)');
      } catch (error) {
        console.error("Erro ao sair:", error); 
      }
    };
  
  return (
    <View style={styles.containerMain}>

      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Transforme sua clínica com inteligência e inovação!</Text>
          <Text style={styles.description}>Gerencie agendamentos, fidelize pacientes e maximize seus resultados – tudo em um só lugar.</Text>
        </View>

        <View style={styles.sectionButton}>
          <CustomButton title="📋 Completar cadastro" customStyle={{
            text: { textAlign: 'left' }
            }} onPress={() => router.push("/(authPartners)/registerDataPartners")} backgroundColor="#2196F3" textColor="#ffff" width={'100%'}/>

          <CustomButton title="🔍 Consultar Dados" onPress={() => router.push("/(authPartners)/partnerDetail")} backgroundColor="#2196F3" textColor="#ffff" width={'100%'}/>

          <CustomButton title="👨🏽‍⚕️ Cadastrar médicos" onPress={() => router.push("/(authPartners)/registerDoctor")} backgroundColor="#2196F3" textColor="#ffff" width={'100%'}/>

          <CustomButton title="📅 Agendamentos" onPress={() => router.push("/(auth)/suggestServicesClient")} backgroundColor="#2196F3" textColor="#ffff" width={'100%'}/>

          <CustomButton title="🏥 Consultas" onPress={() => router.push("/(authPartners)/appointments")} backgroundColor="#2196F3" textColor="#ffff" width={'100%'}/>

          <CustomButton title="🎁 Programa de Benefícios" onPress={() => router.push("/(authPartners)/programBenefits")} backgroundColor="#2196F3" textColor="#ffff" width={'100%'}/>

          <CustomButton title="🚪 Sair" onPress={handleSignOut} backgroundColor="#ff5d4b" textColor="#fff" width={'100%'}/>
        </View>
      </View>
      <Footer textColor="#024059"/>
    </View>
    
  );  
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: '100%'
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 20,
    width: '100%'
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: '#024059',
    justifyContent:'flex-start'
  },
  description: {
    fontSize: 14,
    marginBottom: 20,
    color: '#024059',
    fontWeight: 'semibold',
  },
  button: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'flex-start', 
  },
  sectionButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
});

export default RestrictedSessionPartners;