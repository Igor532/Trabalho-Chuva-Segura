import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  background-color: #FFF;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 60px;
`;

export const Tela_Login = styled.Image`
width: 100%;
height: 300px;
flex-shrink: 0;
`;

export const Parte_Superior = styled.View`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 300px;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 90%;
  height: 45px;
  border-radius: 8px;
  background-color: #3b3dbf;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;

export const SubmitText = styled.Text`
  font-size: 20px;
  color: #FFF;
`;

export const Link = styled.TouchableOpacity`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const LinkText = styled.Text`
  color: #171717;
`;

export const InputDados = styled.TextInput`
  background-color: transparent;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.40);
  padding: 4px 0px;

  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  opacity: 0.5;
`;


export const ContainerInput = styled.View`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

export const Label = styled.Text`
  font-weight: bold;
`;

export const ContainerCenter = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 25px;
`;

export const CriarContaText = styled.Text`
  color: #FFF;
  text-align: center;
 
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
  position: absolute; 
  top: 80px; 
  left: 50px; 
`;

export const InsiraDadosText = styled.Text`
  color: #FFF;

  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  margin-top: -30px;
  margin-left: -140px; 
`;

export const InfoContainer = styled.View`
  width: 90%;
  margin-top: 10px;
`;

export const InfoLabel = styled.Text`
  font-weight: bold;
`;

export const InfoButton = styled.TouchableOpacity`
  width: 100%;
  height: 45px;
  border-radius: 8px;
  background-color: ${({ selected }) => (selected ? '#3b3dbf' : 'transparent')};
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center; 
  align-items: center; 
  background-color: rgba(0, 0, 0, 0.5);
`;
export const ModalOption = styled.View`
  padding: 20px;
  background-color: #fff;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  width: 90%; 
  align-items: center; 
`;


export const ModalOptionText = styled.Text`
  font-size: 18px;
  color: #333;
`;


