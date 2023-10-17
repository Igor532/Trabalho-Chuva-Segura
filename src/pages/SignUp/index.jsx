import React, { useState, useContext } from 'react';
import { Platform, ActivityIndicator, View, Text, ScrollView, ImageBackground, Alert } from 'react-native';
import TelaCadastroImg from '../../assets/Tela_Cadastro.png';
import api from '../../services/api';

import {
  Background,
  Container,
  Label,
  InputDados,
  SubmitButton,
  SubmitText,
  Link,
  LinkText,
  ContainerInput,
  ContainerCenter,
  Parte_Superior,
  CriarContaText,
  InsiraDadosText

} from './styles';

import { useNavigation } from '@react-navigation/native';


export default function SignIn() {
  const navigation = useNavigation();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCPF] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [city, setCity] = useState('');
  const [password, setPassword] = useState('');

  const formatBirthdate = (text) => {
    if (text.length === 2) {
      setBirthdate(text + '/');
    } else if (text.length === 5) {
      setBirthdate(text + '/');
    } else {
      setBirthdate(text);
    }
  };

  const formataDataApi= async (formattedDate) =>{
    const formatada= await formattedDate
  if (formatada.length === 10) {
    const year = formatada.substr(6, 4);
    const month = formatada.substr(3, 2);
    const day = formatada.substr(0, 2);
    return `${year}-${month}-${day}`;
  }
  return '';
};

  
  const dataformatada = formataDataApi(birthdate)

  const cadastrar= async () => {
    try {
      const response = await api.post('users',{
        name: fullName,
        email: email,
        password: password,
        cpf: cpf,
        birth_date: dataformatada._j,
        city: city
      })
      console.log(response)
      Alert.alert("Usuario cadastrado com sucesso ",response.data.name )
      navigation.navigate('SignIn')
    } catch (err) {
      if (err.response && err.response.data && Array.isArray(err.response.data.errors)) {
        const errorMessages = err.response.data.errors.map(error => error.message);
        const errorMessage = errorMessages.join('\n');
        console.log("Erro ao cadastrar:", errorMessage);
        Alert.alert('Erro ao cadastrar', errorMessage);
      } else if (err.response && err.response.data && err.response.data.message) {
        const errorMessage = err.response.data.message;
        console.log("Erro ao cadastrar:", errorMessage);
        Alert.alert('Erro ao cadastrar', errorMessage);
      } else {
        console.log("Erro ao cadastrar:", err.message);
        Alert.alert('Erro ao cadastrar', 'Ocorreu um erro ao cadastrar. Tente novamente mais tarde.');
      }
    }
  }

  return (
    <Background>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
        <Parte_Superior>
          <ImageBackground source={TelaCadastroImg} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: 300, width: 450 }} resizeMode="cover">
            <CriarContaText>Criar Conta</CriarContaText>
            <InsiraDadosText>Insira os seus dados</InsiraDadosText>
          </ImageBackground>
        </Parte_Superior>

          <ContainerCenter>
            <ContainerInput>
              <Label>NOME COMPLETO</Label>
              <InputDados
                placeholder="DIGITE SEU NOME"
                value={fullName}
                onChangeText={(text) => setFullName(text)}
              />
            </ContainerInput>

            <ContainerInput>
              <Label>E-MAIL</Label>
              <InputDados
                placeholder="DIGITE SEU E-MAIL"
                value={email}
                onChangeText={(text) => setEmail(text.toLowerCase())}
              />
            </ContainerInput>

            <ContainerInput>
              <Label>CPF</Label>
              <InputDados
                placeholder="DIGITE SEU CPF"
                value={cpf}
                onChangeText={(text) => setCPF(text)}
                keyboardType="numeric" 
                maxLength={11} 
              />
            </ContainerInput>

            <ContainerInput>
              <Label>DATA DE NASCIMENTO</Label>
              <InputDados
                placeholder="DIGITE SUA DATA DE NASCIMENTO"
                value={birthdate}
                onChangeText={(text) => formatBirthdate(text)}
                keyboardType="numeric" 
                maxLength={10} 
              />
            </ContainerInput>
            
            <ContainerInput>
              <Label>CIDADE</Label>
              <InputDados
                placeholder="DIGITE SUA CIDADE"
                value={city}
                onChangeText={(text) => setCity(text)}
              />
            </ContainerInput>

            <ContainerInput>
              <Label>SENHA</Label>
              <InputDados
                placeholder="DIGITE SUA SENHA"
                value={password}
                onChangeText={(text) => setPassword(text.toLowerCase())}
                secureTextEntry={true}
              />
            </ContainerInput>
          </ContainerCenter>

          <SubmitButton activeOpacity={0.8} onPress={cadastrar}>
              <SubmitText>Cadastrar</SubmitText>
          </SubmitButton>

          <Link onPress={() => navigation.navigate('SignIn')}>
            <LinkText>Já possui uma conta? Login</LinkText>
          </Link>
        </Container>
      </ScrollView>
    </Background>
  );
}
