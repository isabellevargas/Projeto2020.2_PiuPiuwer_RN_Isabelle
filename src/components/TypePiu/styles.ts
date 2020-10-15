import styled from "styled-components/native";

export const Wrapper = styled.View`
`;

export const BarraSuperior = styled.View`
    display: flex;
    align-items: center;
    /*border: 0 0 1px 0 solid rgba(200, 121, 168, 0.73);*/
    padding: 9px 10px;
`;

export const IconHome = styled.Image`
    width: 13px;
    height: 13px;
    margin-right: 10px;
`;

export const TitleHome = styled.Text`
    font-size: 12px;
`;

export const Forms = styled.View`
    display: flex;
    flex-direction: column;
    margin: 13px;
    margin-bottom: 0;
    /*border: 0 0 1px 0 solid rgba(200, 121, 168, 0.73);*/
`;

export const FormsTitle = styled.Text`
    font-size: 10px;
    margin-bottom: 10px;
`;

export const InputPiu = styled.TextInput`
    height: 70px;
    margin-bottom: 10px;
    border-radius: 25px;
    border: 1px solid rgba(0, 0, 0, 0.28);
    padding-left: 10px;
    padding-left: 10px;
    padding-top: 5px;
`;

  export const Actions = styled.View`
    align-self: flex-end;
    display: flex;
    align-items: center;
`;

export const Botao = styled.Button<{ livre: boolean }>`
  width: 60px;
  height: 18px;
  margin-bottom: 10px;
  background-color: #7cc1db;
  border-radius: 25px;
  border: 1px solid #7cc1db;

  opacity: ${(props) => (props.livre ? 1 : 0.5)};
`;

export const ButtonText = styled.Text`
font-size: 10px;
color: #ffffff;
`;


export const Frases = styled.Text<{ livre: boolean }>`
  font-size: 8px;
  margin-bottom: 5px;
  padding: 8px;
  color: ${(props) => (props.livre ? "black" : "red")};
`;
