import styled from 'styled-components/native';

export const Card = styled.View`
  background-color: #FFF;
  border-radius: 8px;
  border-width: 1px;
  border-Color: #68B2F8;
  margin: 12px;
  padding: 16px;
`;

export const EmLinha = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Coluna = styled.View`
  align-items: center;
  `;

export const Titulo = styled.Text`
  font-size: 15px;
  text-align: left;
  margin-bottom: 12px;
  font-weight: 600;
`;
export const Data = styled.Text`
  font-size: 12px;
  text-align: right;
  margin-bottom: 12px;
  paddingHorizontal: 10px;
  font-weight: 600;
`;
export const TextoDes = styled.Text`
  font-size: 12px;
  text-align: center;
  margin-bottom: 12px;

`;
export const TextoDesCard = styled.Text`
  font-size: 12px;
  text-align: center;
  color: #FFF;
`;

export const CardDados = styled.View`
  background-color: #68B2F8;
  border-radius: 3px;
  height: 26px;
  padding: 5px;
  marginBottom:15px;
`;

export const Botao = styled.TouchableOpacity`
  background-color: #3b3dbf;
  width: 50%;
  border-radius: 3px;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
`;

export const BotaoTexto = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #FFF;
`;

export const ModalContainer = styled.Modal``;

export const ModalBackground = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); /* Fundo escuro semi-transparente */
`;

export const ModalContent = styled.View`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 300px;
`;

export const ModalText = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;
`;

export const ModalButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ModalButton = styled.TouchableOpacity`
  background-color: #3b3dbf;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 10px;
`;

export const ModalButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: center;
`;
