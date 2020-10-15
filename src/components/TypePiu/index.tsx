import React, {
    FormEvent,
    ChangeEvent,
    useState,
    useCallback,
    useEffect,
  } from "react";
  import homeIcon from "../../assets/images/023-home.png";
  import { Wrapper, IconHome, BarraSuperior, TitleHome, Forms, FormsTitle, InputPiu, Botao, Frases, Actions, ButtonText } from "./styles";
  import api from "../../services/api";
  import { useLoad } from "../../hooks/useLoad";
  import { useAuth } from "../../hooks/useAuth";
  
  const TypePiu: React.FC = () => {
    const [contador, setContador] = useState("0/140");
    const [fraseErro, setFraseErro] = useState("");
    const [botao, setBotao] = useState(true);
    const [textoPiu, setTextoPiu] = useState("");
    const [change, setChange] = useState(false);
  
    const { carregarDados } = useLoad();
    const { user } = useAuth();
  
    useEffect(() => {
      carregarDados();
    }, [change, carregarDados]);
  
    function handleChange(texto: string) {
  
      setContador(texto.length + "/140");
      setTextoPiu(texto);
  
      if (texto.length === 0) {
        setFraseErro("O piu está vazio");
        setBotao(false);
      } else if (texto.length > 140) {
        setFraseErro("Caracteres em excesso");
        setBotao(false);
      } else {
        setFraseErro("");
        setBotao(true);
      }
    }
  
    const handleSubmit = useCallback(
      async () => {
  
        const userId = user.id;
        const mensagem = textoPiu;
  
        await api.post("/pius/", { usuario: userId, texto: mensagem });
        setChange(!change);
      },
      [textoPiu, user.id, change]
    );
  
    return (
      <Wrapper>
        <BarraSuperior>
          <IconHome source={homeIcon} />
          <TitleHome>Feed</TitleHome>
        </BarraSuperior>
  
        <Forms>
          <FormsTitle>Poste um piu!</FormsTitle>
          <InputPiu   multiline={true}
                      numberOfLines={5}
                      onChangeText={(text) => handleChange(text)}>

          </InputPiu>
          <Actions>
            <Frases  livre={botao}>
              {fraseErro}
            </Frases>
            <Frases  livre={botao}>
              {contador}
            </Frases>
            <Botao  title='Entrar'livre={botao} disabled={!botao} onPress={handleSubmit}>
                <ButtonText>Entrar</ButtonText>
            </Botao>
          </Actions>
        </Forms>
      </Wrapper>
    );
  };
  
  export default TypePiu;