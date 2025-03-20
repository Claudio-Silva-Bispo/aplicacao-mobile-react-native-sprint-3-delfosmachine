import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { Feather } from "@expo/vector-icons";

// Instalar npm install lucide-react-native
import { Settings, Heart, Home } from "lucide-react-native";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Barra de Navegação Inferior */}
      <View className="absolute bottom-0 left-0 right-0 bg-white shadow-md p-5 flex-row justify-between items-center h-28">
        {/* Botão Home */}
        <Link href="/" asChild>
          <TouchableOpacity>
            <Home size={40} color="black" /> {/* Ícone de Home da Lucide */}
          </TouchableOpacity>
        </Link>

        {/* Botão Coração */}
        <Link href="/sugestion" asChild>
          <TouchableOpacity>
            <Heart size={40} color="black" /> {/* Ícone de Coração da Lucide */}
          </TouchableOpacity>
        </Link>

        {/* Botão Configurações */}
        <Link href="/settings" asChild>
          <TouchableOpacity>
            <Settings size={40} color="black" /> {/* Ícone de Configurações da Lucide */}
          </TouchableOpacity>
        </Link>

        {/* Botão Menu Hamburguer */}
        <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)}>
          <Feather name="menu" size={40} color="black" />
        </TouchableOpacity>
      </View>

      {/* Menu Lateral */}
      {menuOpen && (
        <View className="absolute bottom-16 right-4 bg-white shadow-lg p-4 rounded-lg">
          <Link href="/(profile)" asChild>
            <TouchableOpacity className="p-2">
              <Text>Perfil</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/settings" asChild>
            <TouchableOpacity className="p-2">
              <Text>Configurações</Text>
            </TouchableOpacity>
          </Link>

          <TouchableOpacity onPress={() => setMenuOpen(false)} className="p-2">
            <Text>Fechar</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default Navbar;
