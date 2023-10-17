import React, { useState, useContext } from 'react';
import { Platform, ActivityIndicator, Text, Image, Modal, View, TouchableOpacity, FlatList } from 'react-native';
import LogoImg from '../../assets/Tela_Cadastro.png';
import ImagePicker from 'react-native-image-picker';

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
  ModalOptionText
} from './styles';

import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth';
import { ImageBackground } from 'react-native-web';

export default function SignIn() {
  const navigation = useNavigation();
  const { signIn, loadingAuth } = useContext(AuthContext);

  const [category, setCategory] = useState('Enchente');
  const [isCategoryModalVisible, setIsCategoryModalVisible] = useState(false);

  const [riskLevel, setRiskLevel] = useState(1);
  const [isRiskModalVisible, setIsRiskModalVisible] = useState(false);

  const [status, setStatus] = useState('Preventivo');
  const [isStatusModalVisible, setIsStatusModalVisible] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);

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

  function handleLogin() {
    signIn(email, password);
  }

  function selectImageFromGallery() {
    const options = {
      title: 'Selecione uma imagem',
      storageOptions: {
        skipBackup: true,
        path: 'images',
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

      


    </Background>
  );
}
