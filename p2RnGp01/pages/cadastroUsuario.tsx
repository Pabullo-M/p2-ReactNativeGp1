import { styles } from "./style";
import InputComponente from "../components/input";
import ButtonComponente from "../components/button";
import axios from "axios";
import { useState } from "react";
import { Alert, ImageBackground, View } from "react-native";
import image from '../assets/image.png'

export default function cadastroUsuario({ navigation }) {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    const postUsuario = async ()=>{
        try {
          const response = await axios.post('https://serverest.dev/usuarios',
              {
                "nome": nome,
                "email": email,
                "password": senha,
                "administrador":'true'
              }
          );
          if(response.status==201){
            Alert.alert('Usuario cadastrado com sucesso')
            navigation.navigate('Home')
          }
        } catch (error) {
          console.log(error);
          Alert.alert('Erro ' + error)
        
        }
      };
    return(
        <View style={styles.containerPrincipal}>
          <ImageBackground source={image} style={styles.background}>
            <InputComponente
              onChangeText={(nome: string)=>{setNome(nome)}}
              value={nome}
              placeHolder="Digite aqui seu nome"
              icone='person'
            />
            <InputComponente
              onChangeText={(email:string)=>{setEmail(email)}}
              value={email}
              placeHolder="Digite aqui seu e-mail"
              icone='mail'
            />
            <InputComponente
              onChangeText={(senha: string)=>{setSenha(senha)}}
              value={senha}
              placeHolder="Digite aqui sua senha"
              icone='lock-closed'
            />
            <ButtonComponente 
              onPress={postUsuario}  
              texto="Cadastrar" />
          </ImageBackground>
        </View>
    )

}