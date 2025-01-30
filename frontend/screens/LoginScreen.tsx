// frontend/screens/LoginScreen.tsx
import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { login } from "../auth";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await login(email, password);
      Alert.alert("Login realizado com sucesso!");
      navigation.replace("Home"); // Ir para a tela principal
    } catch (error) {
      Alert.alert("Erro ao fazer login", error.message);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Email:</Text>
      <TextInput value={email} onChangeText={setEmail} style={{ borderWidth: 1, marginBottom: 10 }} />
      <Text>Senha:</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry style={{ borderWidth: 1, marginBottom: 10 }} />
      <Button title="Entrar" onPress={handleLogin} />
      <Button title="Criar conta" onPress={() => navigation.navigate("Register")} />
    </View>
  );
}
