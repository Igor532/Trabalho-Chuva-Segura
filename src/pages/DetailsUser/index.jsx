import React, { useEffect, useState, useContext } from "react";
import { ActivityIndicator, Alert, ImageBackground, Image, ScrollView } from "react-native";
import {
  useRoute,
  useNavigation,
  useIsFocused,
} from "@react-navigation/native";
import TelaCadastroImage from "../../assets/Tela_Cadastro.png";
import { format } from "date-fns";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../services/api";
import {
  Container,
  Background,
  Parte_Superior,
  Label,
  CriarContaText,
  InsiraDadosText,
  ContainerInput,
  InfoContainer,
  InfoLabel,
  SubmitButton,
  SubmitText,
  Data,
  CardDados,
  TextoDesCard,
  CardDadosFechado,
  TextoDesCardFechado,
  CardDadosImage,
  CardDadosLoc
} from "./styles";

import { AuthContext } from "../../contexts/auth";

function Details() {
  const { signOut, loadingAuth } = useContext(AuthContext);
  const route = useRoute();
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [ocorrencia, setOcorrencia] = useState(null);
  const [loadingOcorrencia, setLoadingOcorrencia] = useState(false);

  useEffect(() => {
    const loadOcorrencia = async () => {
      try {
        setLoadingOcorrencia(true);
        const token = await AsyncStorage.getItem("@authToken");
        const response = await api.get(`occurrences/${route.params?.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        //console.log(response.data)
        if (response) {
          setOcorrencia(response.data);
        } else {
          Alert.alert("Algo errado não há ocorrencia");
        }
      } catch (error) {
        console.error("Erro ao carregar os usuários:", error);
      } finally {
        setLoadingOcorrencia(false);
      }
    };
    loadOcorrencia();
  }, []);
  console.log(ocorrencia);
  if (loadingOcorrencia) {
    return (
      <Container>
        <ActivityIndicator size={36} color="#000" />
      </Container>
    );
  }

  return (
    <>
      {ocorrencia ? (
        <Background>
          <Container behavior={Platform.OS === "ios" ? "padding" : ""} enabled>
            <Parte_Superior>
              <ImageBackground
                source={TelaCadastroImage}
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  height: 300,
                  width: 450,
                }}
                resizeMode="cover"
              >
                <CriarContaText>{ocorrencia.data.title}</CriarContaText>
              </ImageBackground>
            </Parte_Superior>
            <ScrollView>
            <Data>{format(new Date(ocorrencia.data.created_at), "dd/MM/yyyy")}</Data>

            <ContainerInput>
              <Label>DESCRIÇÃO</Label>
              <CardDados>
                <TextoDesCard>{ocorrencia.data.description}</TextoDesCard>
              </CardDados>
              <Label>CATEGORIA</Label>
              <CardDadosFechado>
                <TextoDesCardFechado>{ocorrencia.data.category}</TextoDesCardFechado>
              </CardDadosFechado>
              <Label>NÍVEL DO RISCO</Label>
              <CardDadosFechado>
                <TextoDesCardFechado>{ocorrencia.data.risk_level}</TextoDesCardFechado>
              </CardDadosFechado>
            <Label>STATUS</Label>
              <CardDadosFechado>
                <TextoDesCardFechado>{ocorrencia.data.status}</TextoDesCardFechado>
              </CardDadosFechado>
              <Label>FOTOGRAFIA DA OCORRÊNCIA</Label>
              <CardDadosImage>
              <Image source={{ uri: ocorrencia.data.imge }}/>
              </CardDadosImage>
              <Label>LOCALIZAÇÃO</Label>
              <CardDadosLoc>
              </CardDadosLoc>
            </ContainerInput>
            <SubmitButton
              activeOpacity={0.8}
              onPress={() => navigation.navigate("Home")}
            >
              {loadingAuth ? (
                <ActivityIndicator size={20} color="#68B2F8" />
              ) : (
                <SubmitText>Lista de Ocorrências</SubmitText>
              )}
            </SubmitButton>
            </ScrollView>
          </Container>
        </Background>
      ) : (
        <Container>
          <ActivityIndicator size={36} color="#000" />
        </Container>
      )}
    </>
  );
}

export default Details;
