import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  background-color: #FFF;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: space-between;
  padding-bottom: 60px;
`;

export const CardDados = styled.View`
  border-radius: 3px;
  border-width: 1px;
  border-Color: #68B2F8;
  width: 90%;
  height: 26px;
  padding: 5px;
  margin-bottom: 5px;
`;

export const TextoDesCard = styled.Text`
  font-size: 12px;
`;
export const CardDadosFechado = styled.View`
background-color: #68B2F8;
  border-radius: 3px;
  border-width: 1px;
  border-Color: #68B2F8;
  width: 90%;
  height: 26px;
  padding: 5px;
  margin-bottom: 5px;
`;

export const CardDadosImage = styled.View`
  border-radius: 3px;
  border-width: 1px;
  border-Color: #68B2F8;
  width: 90%;
  height: 125px;
  padding: 5px;
  margin-bottom: 5px;
`;
export const CardDadosLoc = styled.View`
  border-radius: 3px;
  border-width: 1px;
  border-Color: #68B2F8;
  width: 90%;
  height: 125px;
  padding: 5px;
  margin-bottom: 5px;
`;
export const TextoDesCardFechado = styled.Text`
  font-size: 12px;
  text-align: center;
  color: #FFF;
  `;

export const Tela_Cadastro = styled.Image`
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
  width: 80%;
  height: 61px;
  border-radius: 8px;
  background-color: #68B2F8;
  margin-buttom: 20px;
  margin: 10%;
  align-items: center;
  justify-content: center;
`;
export const Data = styled.Text`
  font-size: 12px;
  text-align: right;
  margin-bottom: 12px;
  paddingHorizontal: 10px;
  font-weight: 600;
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
`;


export const ContainerInput = styled.View`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 10%;
  justify-content: center;
`;

export const Label = styled.Text`
  font-weight: bold;
  margin-bottom: 10px;
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
  width: 90%;
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
  position: absolute; 
  top: 80px; 
  left: 50px;
  flex-wrap: wrap;
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
  height: 30px;
  border-radius: 8px;
  background-color: ${({ selected }) => (selected ? '#68B2F8' : 'transparent')};
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;
