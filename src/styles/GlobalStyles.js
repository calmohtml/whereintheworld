import styled from "styled-components/native";

/* 
Dark Blue: #2b3945;
Very Dark Blue: #202c37;
Very Dark Blue: #111517;
Dark Gray: #858585;
Very Light Gray: #fafafa;
White: #ffffff; 
*/

export const HeadingOne = styled.Text`
  font-family: 'NunitoSans-ExtraBold'
  font-size: 24px;
  color: ${(props) => props.theme.color};
`;

export const HeadingTwo = styled.Text`
  font-size: 18px;
  text-align: center;
  color: ${(props) => props.theme.color};
  font-family: "NunitoSans-SemiBold";
`;

export const HeadingThree = styled.Text`
  font-size: 16px;
  padding: 2px 0;
  color: ${(props) => props.theme.color};
  font-family: "NunitoSans-Light";
`;

export const CountryName = styled.View`
  margin: 10px 0;
  padding: 10px;
`;

export const CountryFlagContainer = styled.View`
  display: flex;
  align-items: center;
`;

export const CountryFlag = styled.Image`
  width: 100%;
  height: 200px;
`;

export const CountryInfo = styled.View`
  padding-left: 10px;
  padding-bottom: 10px;
  flex-direction: row;
  flex-wrap: wrap;
`;
