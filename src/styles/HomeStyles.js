import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex-direction: column;
  background-color: ${(props) => props.theme.background};
  height: 100%;
`;

export const List = styled.ScrollView`
  flex: 1;
  background-color: ${(props) => props.theme.background};
  margin: 0 auto;
  width: 80%;
`;

export const CountryContainer = styled.TouchableOpacity`
  margin: 20px 0;
  background-color: ${(props) => props.theme.background};
  flex: 1;
  justify-content: center;
  border: 1px solid white;
  border-radius: 10px;
  overflow: hidden;
`;
