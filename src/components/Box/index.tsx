import React, { FormEvent, useCallback, useState } from "react";
import {
  BlockComponent,
  Titulo,
  Subtitulo,
  Forms,
  Label,
  ButtonLogin,
  Span,
  Input, ButtonText
} from "./styles";
import { useAuth } from "../../hooks/useAuth";
import { View } from "react-native";


const Box: React.FC = () => {
  const [cred, setCred] = useState({
    username: "",
    password: "",
  });
  const [errorText, setErrorText] = useState<string | undefined>("");

  const { login } = useAuth();

  const handleLogin = useCallback(
    async () => {
      const erro = await login(cred);
      setErrorText(erro);
    },
    [cred, login, setErrorText]
  );


  return (
    <BlockComponent>
      <Titulo>Bem vinde novamente!</Titulo>
      <Subtitulo>
        Ficamos felizes que você tenha decidido voltar para dar uns pius!
      </Subtitulo>
      <Forms>
        <View>
          <Label>Usuário</Label>
          <Input
            onChangeText={(text) => {
              setCred({
                username: text,
                password: cred.password,
              });
            }}
          ></Input>
        </View>
        <View>
          <Label>Senha</Label>
          <Input
            onChangeText={(text) => {
              setCred({
                username: cred.username,
                password: text,
              });
            }}
          ></Input>
        </View>
        <Span>{errorText}</Span>
        <ButtonLogin onPress={handleLogin}>
          <ButtonText>Entrar</ButtonText>
        </ButtonLogin>
      </Forms>
    </BlockComponent>
  );
};

export default Box;


