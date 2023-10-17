import React, { useState, useEffect, useContext } from "react";
import { ActivityIndicator, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../services/api";
import UsersList from "../../components/UsersList";

import {
  Container,
  Header,
  Message,
  Title,
  List,
  Button,
  ButtonText,
} from "./styles";

import { AuthContext } from "../../contexts/auth";

import { useNavigation, useIsFocused } from "@react-navigation/native";

export default function Home() {
  const { user, loading } = useContext(AuthContext);
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [ocorrencia, setOcorrencia] = useState([]);
  const [loadingOcorrencia, setLoadingOcorrencia] = useState(false);

  useEffect(() => {
    const onSubmit = async () => {
      try {
        const token = await AsyncStorage.getItem("@authToken");
        const retorno = await api.get("/occurrences?order_by[column]=created_at&order_by[direction]=desc", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (retorno) {
          //console.log(retorno)
          setOcorrencia(retorno.data);
          //console.log(ocorrencia)
        } else {
          Alert.alert("Não há ocorrencias");
        }
      } catch (error) {
        console.error("Erro ao registrar dados:", error.message);
      }
    };
    onSubmit();
  }, []);

  // async function deleteUser(id) {
  //     //console.log(id);
  //     try {
  //         const token = await AsyncStorage.getItem('@authToken');

  //         const response = await api.delete(`users/${id}`, {
  //             headers: {
  //                 Authorization: `Bearer ${token}`,
  //             },
  //         });

  //         if (response.status === 200) {
  //             loadUsers();
  //             console.log("Usuário deletado com sucesso");
  //         } else if (response.status === 404) {
  //             console.error("Usuário não encontrado");
  //         } else {
  //             console.error("Erro ao deletar o usuário");
  //         }
  //     } catch (error) {
  //         console.error('Erro ao carregar os usuários:', error);
  //     }
  // }

  // if (loadingUsers || loading) {
  //     return (
  //         <Container>
  //             <ActivityIndicator size={36} color="#000" />
  //         </Container>
  //     )
  // }

  return (
    <Container>
      <>
        <Header>
          <Message>
            <Title>Ocorrências perto de você</Title>
          </Message>
          <Button onPress={() => navigation.navigate("CreateOcorrencia")}>
            <ButtonText>Nova Ocorrência</ButtonText>
          </Button>
        </Header>

        <List
          data={ocorrencia.data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <UsersList data={item} />}
          // renderItem={({ item }) => <UsersList data={item} onDelete={deleteUser} />}
        />
      </>
    </Container>
  );
}
