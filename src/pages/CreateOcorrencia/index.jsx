import React, { useState, useContext } from "react";
import {
  Platform,
  ActivityIndicator,
  Text,
  Image,
  Modal,
  View,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  TextInput,
} from "react-native";
import ImagePicker from "react-native-image-picker";
import TelaCadastroImage from "../../assets/Tela_Cadastro.png";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../services/api";

import {
  Background,
  Container,
  SubmitButton,
  SubmitText,
  Parte_Superior,
  CriarContaText,
  InsiraDadosText,
  InfoContainer,
  InfoLabel,
  InfoButton,
  ModalContainer,
  ModalOption,
  ModalOptionText,
  ContainerInput,
  Label,
  InputDados,
  ModalContent,
} from "./styles";

import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../contexts/auth";

export default function SignIn() {
  const onSubmit = async () => {
    try {
      const dataApi = new FormData();
      const token = await AsyncStorage.getItem("@authToken");

      dataApi.append("title", titulo);
      dataApi.append("description", description);
      dataApi.append("category", category);
      dataApi.append("status", status);
      dataApi.append("risk_level", Number(riskLevel));

      await api.post(`/occurrences`, dataApi, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      navigation.navigate("Home");
    } catch (error) {
      console.error("Erro ao registrar dados:", error.message);
    }
  };

  const [titulo, setTitulo] = useState("");

  const navigation = useNavigation();
  const { signOut, loadingAuth } = useContext(AuthContext);

  const [category, setCategory] = useState("Enchente");
  const [isCategoryModalVisible, setIsCategoryModalVisible] = useState(false);

  const [riskLevel, setRiskLevel] = useState(1);
  const [isRiskModalVisible, setIsRiskModalVisible] = useState(false);

  const [status, setStatus] = useState("Preventivo");
  const [isStatusModalVisible, setIsStatusModalVisible] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);
  const [description, setDescription] = useState("");

  function handleCategorySelection(selectedCategory) {
    setCategory(selectedCategory);
    setIsCategoryModalVisible(false);
  }

  function handleRiskSelection(selectedRisk) {
    setRiskLevel(selectedRisk);
    setIsRiskModalVisible(false);
  }

  function handleStatusSelection(selectedStatus) {
    setStatus(selectedStatus);
    setIsStatusModalVisible(false);
  }

  function selectImageFromGallery() {
    const options = {
      title: "Selecione uma imagem",
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
      } else if (response.error) {
      } else {
        setSelectedImage(response.uri);
      }
    });
  }

  return (
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
            <CriarContaText>Criar Ocorrência</CriarContaText>
            <InsiraDadosText>Insira os seus dados</InsiraDadosText>
          </ImageBackground>
        </Parte_Superior>

        <ContainerInput>
          <Label>TÍTULO</Label>
          <InputDados
            value={titulo}
            onChangeText={(text) => setTitulo(text)}
            placeholder="DIGITE O TÍTULO"
          />
        </ContainerInput>
        <ContainerInput>
          <Label>DESCRIÇÃO</Label>
          <InputDados
            value={description}
            onChangeText={(text) => setDescription(text)}
            placeholder="ESCREVA UM BREVE RESUMO"
          />
        </ContainerInput>
        <InfoContainer>
          <InfoLabel>Categoria</InfoLabel>
          <InfoButton
            onPress={() => setIsCategoryModalVisible(true)}
            selected={category !== ""}
          >
            <Text style={{ color: "white", fontSize: 16 }}>
              {category}
            </Text>
          </InfoButton>
        </InfoContainer>

        <InfoContainer>
          <InfoLabel>Nível de Risco</InfoLabel>
          <InfoButton
            onPress={() => setIsRiskModalVisible(true)}
            selected={riskLevel !== ""}
          >
            <Text style={{ color: "white", fontSize: 16 }}>
              {riskLevel}
            </Text>
          </InfoButton>
        </InfoContainer>

        <InfoContainer>
          <InfoLabel>Status</InfoLabel>
          <InfoButton
            onPress={() => setIsStatusModalVisible(true)}
            selected={status !== ""}
          >
            <Text style={{ color: "white", fontSize: 16 }}>
              {status}
            </Text>
          </InfoButton>
        </InfoContainer>

        <SubmitButton
          activeOpacity={0.8}
          onPress={selectImageFromGallery}
          style={{ backgroundColor: "#68B2F8" }}
        >
          <SubmitText>Selecionar Imagem</SubmitText>
        </SubmitButton>

        {selectedImage && (
          <Image
            source={{ uri: selectedImage }}
            style={{ width: 200, height: 200 }}
          />
        )}

        <SubmitButton activeOpacity={0.8} onPress={onSubmit}>
          {loadingAuth ? (
            <ActivityIndicator size={20} color="#68B2F8" />
          ) : (
            <SubmitText>Cadastrar</SubmitText>
          )}
        </SubmitButton>

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
      </Container>

      {/* Modal de Categoria */}
      <Modal
        visible={isCategoryModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsCategoryModalVisible(false)}
      >
        <ModalContainer>
          <ModalContent>
            <FlatList
              data={["Enchente", "Deslizamento", "Bloqueio"]}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    handleCategorySelection(item);
                  }}
                >
                  <ModalOption>
                    <ModalOptionText>{item}</ModalOptionText>
                  </ModalOption>
                </TouchableOpacity>
              )}
            />
          </ModalContent>
        </ModalContainer>
      </Modal>

      {/* Modal de Nível de Risco */}
      <Modal
        visible={isRiskModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsRiskModalVisible(false)}
      >
        <ModalContainer>
        <ModalContent>
          <FlatList
            data={[1, 2, 3, 4, 5]}
            keyExtractor={(item) => item.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  handleRiskSelection(item);
                }}
              >
                <ModalOption>
                  <ModalOptionText>{item}</ModalOptionText>
                </ModalOption>
              </TouchableOpacity>
            )}
          />
          </ModalContent>
        </ModalContainer>
      </Modal>

      {/* Modal de Status */}
      <Modal
        visible={isStatusModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsStatusModalVisible(false)}
      >
        <ModalContainer>
        <ModalContent>
          <FlatList
            data={["Preventivo", "Ocorrido"]}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  handleStatusSelection(item);
                }}
              >
                <ModalOption>
                  <ModalOptionText>{item}</ModalOptionText>
                </ModalOption>
              </TouchableOpacity>
            )}
          />
          </ModalContent>
        </ModalContainer>
      </Modal>
    </Background>
  );
}
