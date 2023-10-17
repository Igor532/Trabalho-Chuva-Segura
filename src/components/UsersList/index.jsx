import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { format } from "date-fns";
import {
  Botao,
  BotaoTexto,
  Card,
  Data,
  Titulo,
  TextoDes,
  ModalBackground,
  ModalButton,
  ModalButtonContainer,
  ModalButtonText,
  ModalContainer,
  ModalContent,
  ModalText,
  EmLinha,
  CardDados,
  TextoDesCard,
  Coluna,
} from "./styles";

export default function UsersList({ data, onDelete }) {
  const navigation = useNavigation();
  const [isConfirmationModalVisible, setConfirmationModalVisible] =
    useState(false);

  const openConfirmationModal = () => {
    setConfirmationModalVisible(true);
  };

  const closeConfirmationModal = () => {
    setConfirmationModalVisible(false);
  };

  const confirmDeletion = () => {
    onDelete(data.id);
    closeConfirmationModal();
  };

  function handleDetails() {
    console.log(data.id)
    navigation.navigate("DetailsUser", { id: data.id });
  }

  const nivelRisco = (data) => {
    if (data == 1) {
      return "Muito Baixo";
    } else if (data == 2) {
      return "Baixo";
    } else if (data == 3) {
      return "Medio";
    } else if (data == 4) {
      return "Alto";
    } else if (data == 5) {
      return "Muito Alto";
    } else {
      return "Medida Fora dos Parametros";
    }
  };

  return (
    <Card>
      <EmLinha>
        <Titulo>{data.title}</Titulo>
        <Data>{format(new Date(data.created_at), "dd/MM/yyyy")}</Data>
      </EmLinha>
      <TextoDes>{data.description}</TextoDes>

      <EmLinha>
        <Coluna>
        <Data>Categoria</Data>
        <CardDados>
          <TextoDesCard>{data.category}</TextoDesCard>
        </CardDados>
        </Coluna>
        <Coluna>
        <Data>Nivél de Risco</Data>
        <CardDados>
          <TextoDesCard>{nivelRisco(data.risk_level)}</TextoDesCard>
        </CardDados>
        </Coluna>
        <Coluna>
        <Data>Status</Data>
        <CardDados>
          <TextoDesCard>{data.status}</TextoDesCard>
        </CardDados>
        </Coluna>
      </EmLinha>
      <Botao onPress={handleDetails}>
        <BotaoTexto>Detalhes</BotaoTexto>
      </Botao>

      <ModalContainer
        visible={isConfirmationModalVisible}
        transparent={true}
        animationType="slide"
      >
        <ModalBackground>
          <ModalContent>
            <ModalText>
              Tem certeza de que deseja excluir este usuário?
            </ModalText>
            <ModalButtonContainer>
              <ModalButton onPress={confirmDeletion}>
                <ModalButtonText>Confirmar</ModalButtonText>
              </ModalButton>
              <ModalButton onPress={closeConfirmationModal}>
                <ModalButtonText>Cancelar</ModalButtonText>
              </ModalButton>
            </ModalButtonContainer>
          </ModalContent>
        </ModalBackground>
      </ModalContainer>
    </Card>
  );
}
