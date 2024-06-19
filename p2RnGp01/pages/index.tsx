import React, { useState } from 'react';
import { Alert, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import InputComponente from '../components/input';
import ButtonComponente from '../components/button';
import { styles } from './style';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import image from '../assets/image.png'

export default function HomeScreen({ navigation }) {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaInvisivel, setSenhaInvisivel] = useState(true);

  const postUsuarios = async () => {
    try {
      const response = await axios.post('https://serverest.dev/login', {
        email: login,
        password: senha
      });

      if (response.status === 200) {
        Alert.alert('Usuário Logado');
        navigation.navigate('SelecaoFilme')
        
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Erro ' + error);
    }
  };

  return (
    
  <View style={styles.containerPrincipal}>
    <ImageBackground source={image} style={styles.background}>
      <InputComponente
        onChangeText={(login) => setLogin(login)}
        value={login}
        placeHolder="Digite aqui seu e-mail"
        icone='person'
      />
      <InputComponente
        onChangeText={(senha) => setSenha(senha)}
        value={senha}
        placeHolder="Digite aqui sua senha"
        icone="lock-closed"
        secureTextEntry={senhaInvisivel}
      />
      <TouchableOpacity style={styles.olhoSenha} onPress={() => setSenhaInvisivel(!senhaInvisivel)}>
        <Ionicons size={25} name={senhaInvisivel ? 'eye-off' : 'eye'} />
      </TouchableOpacity>
      <ButtonComponente
        onPress={postUsuarios}
        texto="Login"
      />
      <Text style={styles.text}>
        Não tem uma conta?
        <TouchableOpacity
          style={styles.registreSeButton}
          onPress={() => navigation.navigate('CadastroUsuario')}
        >
          <Text style={styles.registreSeText}> Registre-se</Text>
        </TouchableOpacity>
      </Text>
      </ImageBackground>
   </View>
  
  );
}
