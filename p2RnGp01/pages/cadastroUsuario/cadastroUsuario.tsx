import React, { useState } from 'react';
import { View, ImageBackground, Alert, Modal, Text, TouchableOpacity, Switch } from 'react-native';
import { styles } from './styles';
import InputComponente from '../../components/input/input';
import ButtonComponente from '../../components/button/button';
import axios from 'axios';

const image = require('../../assets/cadastro-login.png');

const CadastroUsuario = ({ navigation }: any) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [aceitouTermos, setAceitouTermos] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleCadastro = async () => {
    if (!aceitouTermos) {
      Alert.alert('Você precisa aceitar os termos de privacidade para continuar.');
      return;
    }


    if (!nome.trim()) {
      Alert.alert('Por favor, informe seu nome.');
      return;
    }

    if (!email.trim() || !email.includes('@') || !email.includes('.com')) {
      Alert.alert('Por favor, informe um e-mail válido.');
      return;
    }

    if (!senha.trim()) {
      Alert.alert('Por favor, informe sua senha.');
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert('As senhas informadas não coincidem.');
      return;
    }

    try {
      const response = await axios.post('https://serverest.dev/usuarios', {
        nome: nome,
        email: email,
        password: senha,
        administrador: 'true'
      });

      if (response.status === 201) {
        Alert.alert('Usuário cadastrado com sucesso');
        navigation.navigate('Home');
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Erro ao cadastrar usuário: ' + error);
    }
  };

  const ModalPolítica = () => {
    return (
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Política de Privacidade</Text>
            <Text style={styles.modalText}>
              A Política de Privacidade do Cineymar detalha a coleta, uso, compartilhamento e proteção das informações pessoais dos usuários de nosso aplicativo de filmes.
              Coletamos dados como nome, e-mail e atividades no app para aprimorar serviços,
              personalizar experiências, enviar comunicações relevantes, processar transações e fornecer suporte. Não comercializamos suas informações;
              compartilhamos apenas com provedores de serviços para operar e melhorar o app.
            </Text>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>

        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.containerPrincipal}>
      <ImageBackground source={image} style={styles.background}>
        <View style={styles.bordaOpaca}>
        <InputComponente
          style={styles.barraLogin}
          onChangeText={(nome) => { setNome(nome) }}
          value={nome}
          placeHolder="Digite aqui seu nome"
          icone='people'
        />
        <InputComponente
          style={styles.barraLogin}
          onChangeText={(email) => { setEmail(email) }}
          value={email}
          placeHolder="Digite aqui seu e-mail"
          icone='mail'
        />
        <View style={styles.inputContainer}>
          <InputComponente
            style={styles.barraLogin}
            onChangeText={(senha) => { setSenha(senha) }}
            value={senha}
            placeHolder="Digite aqui sua senha"
            icone='key'
            secureTextEntry={true}
          />
        </View>
        <View style={styles.inputContainer}>
          <InputComponente
            style={styles.barraLogin}
            onChangeText={(confirmarSenha) => { setConfirmarSenha(confirmarSenha) }}
            value={confirmarSenha}
            placeHolder="Confirme sua senha"
            icone='key'
            secureTextEntry={true}
          />
        </View>
        <View style={styles.checkboxContainer}>
          <Switch
            value={aceitouTermos}
            onValueChange={(value) => setAceitouTermos(value)}
          />
          <Text style={styles.label}>Eu li e concordo com a Política de Privacidade</Text>
        </View>
        <ButtonComponente
          style={styles.botaoLogin}
          onPress={handleCadastro}
          texto="Cadastrar"
        />
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.link}>Ver Política de Privacidade</Text>
        </TouchableOpacity>
      
        <ModalPolítica />
        </View>
      </ImageBackground>
    </View>
  );
};

export default CadastroUsuario;