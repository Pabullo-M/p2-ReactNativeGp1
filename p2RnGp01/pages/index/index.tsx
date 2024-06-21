import React, { useEffect, useState } from 'react';
import { Alert, ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import InputComponente from '../../components/input';
import ButtonComponente from '../../components/button';
import { styles } from '../../pages/index/styles';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import image from '../../assets/image.png'
import { useUser } from '../../hooks/userContext';
import CheckBox from '../../components/checkBox';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function HomeScreen({ navigation }) {
 
  const {retrieveData, setUser, setSalvarEmail} = useUser()
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaInvisivel, setSenhaInvisivel] = useState(true);
  const [isChecked, setIsChecked] = useState(true);
  useEffect(()=>{
    const fetchData = async () => {
      const retrievedEmail = await retrieveData();
      if (retrievedEmail) {
        setIsChecked(retrievedEmail)
        setLogin(retrievedEmail);
      }
    };

    fetchData();
    
  },[])

  const postUsuarios = async () => {
    try {
      const response = await axios.post('https://serverest.dev/login', {
        email: login,
        password: senha
      });

      if (response.status === 200) {
        Alert.alert('Usuário Logado');
        setUser({
          email: login,
          password: senha
        })
        navigation.navigate('HomePage')
        
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Erro ' + error);
    }
  };
  const limpaEmail = async()=>{
    await AsyncStorage.clear()
}
  const checkbox = ()=>{
    setIsChecked(!isChecked)
    setSalvarEmail(!isChecked)
    if(isChecked){
      limpaEmail()
      setLogin('')
    }
  } 

  return (
    
  <View style={styles.containerPrincipal}>
    <ImageBackground source={image} style={styles.background}>
      
     <View style={styles.bordaOpaca}>
      <InputComponente
        style={styles.barraLogin}
        onChangeText={(login) => setLogin(login)}
        value={login}
        placeHolder="Digite aqui seu e-mail"
        icone='person'
      />
      <InputComponente
        style={styles.barraLogin}
        onChangeText={(senha) => setSenha(senha)}
        value={senha}
        placeHolder="Digite aqui sua senha"
        icone="lock-closed"
        secureTextEntry={senhaInvisivel}
      />
       <CheckBox onPress={checkbox} isChecked = {isChecked} />
      <TouchableOpacity style={styles.olhoSenha} onPress={() => setSenhaInvisivel(!senhaInvisivel)}>
        <Ionicons size={25} name={senhaInvisivel ? 'eye-off' : 'eye'} />
      </TouchableOpacity>
      <ButtonComponente
        style={styles.botaoLogin}
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
      </View>
      </ImageBackground>
   </View>
  );
}
