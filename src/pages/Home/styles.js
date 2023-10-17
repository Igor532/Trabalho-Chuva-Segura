import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  background-color: #F0F4FF;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.View`
  height: 125px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #68B2F8;
  padding-top: 2%;
`;

export const Message = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 4%;
  align-items: center;
`;

export const Warning = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: #000;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #FFF;
  margin-top: 8%;
  margin-bottom: 2%;
`;

export const List = styled.FlatList`
  flex: 1; 
  width: 95%;
`;

export const Button = styled.TouchableOpacity`
  background-color: #68B2F8;
  width: 40%;
  height: 15px;
  border-radius: 2px;
  border-width: 1px;
  border-Color: #FFF;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  color: #fff;
  line-height: 15px;
`;
