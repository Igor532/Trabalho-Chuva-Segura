import React, { useState, useContext } from 'react';
import { Platform, ActivityIndicator, View, Text, Image } from 'react-native';
import LogoImg from '../../assets/Tela_Login.png';

import {
  Background,
  Container,
  Tela_Login,
  InputDados,
  ContainerCenter,
  SubmitButton,
  SubmitText,
  Link,
  LinkText,
  Label,
  ContainerInput
} from './styles';

import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth';

export default function SignIn() {
  const navigation = useNavigation();
  const { signIn, loadingAuth } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    //console.log(email,password)
    signIn(email, password);
  }

  return (
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
        <ContainerCenter>
          <Tela_Login source={LogoImg} style={{ marginLeft: 20 }} />
          <ContainerInput>
            <Label>E-MAIL</Label>
            <InputDados
              placeholder="DIGITE SEU E-MAIL"
              value={email}
              onChangeText={(text) => setEmail(text.toLowerCase())}
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

          <SubmitButton activeOpacity={0.8} onPress={handleLogin}>
            {loadingAuth ? (
              <ActivityIndicator size={20} color="#FFF" />
            ) : (
              <SubmitText>Login</SubmitText>
            )}
          </SubmitButton>
        </ContainerCenter>

        <Link onPress={() => navigation.navigate('SignUp')}>
          <LinkText>Criar uma conta</LinkText>
        </Link>
      </Container>
    </Background>
  );
}
