import React, { useRef, useState, useEffect } from "react";
import { View, Text, ImageBackground, StyleSheet, Dimensions, ScrollView } from "react-native";
import CustomButton from "../components/CustomButton";
import { router } from "expo-router";
import { Image } from 'expo-image'

const { width, height } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    title: "Benefícios Exclusivo!",
    description: "Nosso programa foi criado para oferecer mais conveniência, praticidade e tranquilidade no agendamento de suas consultas.",
  },
  {
    id: "2",
    title: "Vantagens do Programa",
    description: "✅ Cadastro atualizado\n✅ Muitas recompensas\n✅ Satisfação\n✅ Ganhe sem sair de casa",
  },
  {
    id: "3",
    title: "Como funciona?",
    description: "1️⃣ Complete seu cadastro\n2️⃣ Nosso sistema encontra os melhores horários para você \n3️⃣ Você recebe uma notificação de confirmação \n4️⃣ Não perca as consultas\n5️⃣ Assista alguns vídeos \n6️⃣ Aproveite mais tempo livre!",
  },
];

const ProgramBenefits: React.FC<{ navigation: any }> = ({ navigation }) => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      scrollToNextSlide();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const scrollToNextSlide = () => {
    const nextIndex = (activeIndex + 1) % slides.length;
    setActiveIndex(nextIndex);
    scrollViewRef.current?.scrollTo({ x: nextIndex * width, animated: true });
  };

  const handleScroll = (event: any) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(slideIndex);
  };

  return (
    <View style={styles.container}>
      {/* Imagem de fundo */}
      <Image 
        source={require("../../assets/programBenefits/background-recortada.jpg")} 
        style={styles.background}
      />

      <View style={styles.overlay}>
        {/* Cards com o conteúdo do programa */}
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          style={styles.scrollView}
        >
          {slides.map((item, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Indicadores de progresso */}
        <View style={styles.indicatorContainer}>
          {slides.map((_, index) => (
            <View key={index} style={[styles.indicator, activeIndex === index && styles.activeIndicator]} />
          ))}
        </View>

        {/* Botão */}
        <View style={styles.buttonContainer}>
          <CustomButton 
            title="Conheça as Recompensas" 
            onPress={() => router.push("/(auth)/clientBenefitsProgram")} 
            width={"80%"} 
            textColor="#fff" 
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  background: {
    position: 'absolute', 
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 40,
    width: '100%',
    height: '100%',
  },
  scrollView: {
    flexGrow: 0,
    marginBottom: 100,
  },
  card: {
    width: width * 0.9,
    backgroundColor: "rgba(255, 255, 255, 0.7)", 
    padding: 10,
    borderRadius: 12,
    alignItems: "center",
    marginHorizontal: 20,
    height: height * 0.3,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "semibold",
    color: "#0A4275",
    textAlign: "left",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#081828",
    textAlign: "left",
    lineHeight: 22,
  },
  indicatorContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 60,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#555",
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: "#08c8f8",
    width: 14,
    height: 14,
    borderRadius: 7,
  },
  buttonContainer: {
    width: "90%",
    alignItems: "center",
    marginBottom: 20,
  },
});

export default ProgramBenefits;
