import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db, auth } from "../../firebaseConfig";
import CustomButton from "../components/CustomButton";
import { getAuth } from "firebase/auth";
import { router } from "expo-router";

const RegisterPersonalInfo: React.FC<{ navigation: any }> = ({ navigation }) => {
  const user = auth.currentUser;
  if (!user) {
    Alert.alert("Erro", "Nenhum usuário autenticado!");
    navigation.goBack();
    return null;
  }

  const [step, setStep] = useState(1);
  const [dados, setDados] = useState<any>({});
  const [mensagem, setMensagem] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buscarDados = async () => {
      try {
        const dadosCadastraisRef = doc(db, "t_dados_pessoais_clientes", user.uid);
        const dadosCadastraisSnap = await getDoc(dadosCadastraisRef);
        setDados((prevDados: any) => ({
          ...prevDados,
          ...(dadosCadastraisSnap.exists() ? dadosCadastraisSnap.data() : {}),
          idCliente: user.uid,
        }));
  
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        Alert.alert("Erro", "Não foi possível buscar os dados.");
      } finally {
        setLoading(false);
      }
    };
  
    buscarDados();
  }, []);
  


  const cadastrarDados = async (colecao: string, novosDados: object) => {
    try {

      const auth = getAuth();
      const IdCliente = auth.currentUser?.uid;

      if (!IdCliente) {
        Alert.alert("Erro", "ID do cliente não encontrado.");
        return;
      }
      
      //const dadosComIdCliente = { ...novosDados, idCliente: IdCliente };
      const docRef = doc(db, colecao, IdCliente);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        await updateDoc(docRef, novosDados);
      } else {
        await setDoc(docRef, novosDados);
      }

      setMensagem("✅ Dados atualizados com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar dados:", error);
      setMensagem("❌ Erro ao atualizar os dados.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Meus Dados</Text>

        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Dados pessoais</Text>
            <TextInput style={styles.input} placeholder="Nome" value={dados.nome || ""} onChangeText={(text) => setDados({ ...dados, nome: text })} />
            <TextInput style={styles.input} placeholder="Sobrenome" value={dados.sobrenome || ""} onChangeText={(text) => setDados({ ...dados, sobrenome: text })} />
            <TextInput style={styles.input} placeholder="CPF" value={dados.cpf || ""} onChangeText={(text) => setDados({ ...dados, cpf: text })}/>
            <TextInput style={styles.input} placeholder="Data de Nascimento" value={dados.dataNascimento || ""} onChangeText={(text) => setDados({ ...dados, dataNascimento: text })} />
            <TextInput style={styles.input} placeholder="Idade" keyboardType="numeric" value={dados.idade || ""} onChangeText={(text) => setDados({ ...dados, idade: text })} />
            <TextInput style={styles.input} placeholder="Altura (m)" keyboardType="decimal-pad" value={dados.altura || ""} onChangeText={(text) => setDados({ ...dados, altura: text })} />

            <CustomButton title="enviar" textColor="#fff" onPress={() => cadastrarDados("t_dados_pessoais_clientes", dados)} width={'100%'}/>
            
            <TouchableOpacity onPress={() => router.push("/registerClientAddressPreference")} style={styles.nextButton}>
              <Text style={styles.buttonText}>→ Próximo</Text>
            </TouchableOpacity>
            
            

        </View>

        {mensagem ? <Text style={styles.mensagem}>{mensagem}</Text> : null}
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
    width:'100%',
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  section: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
  mensagem: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  prevButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#ff5d4b",
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  nextButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#2196F3",
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  button: {
    width: "100%",
    backgroundColor: "#08c8f8",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  
});


export default RegisterPersonalInfo;