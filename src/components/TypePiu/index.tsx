import React, {
    FormEvent,
    ChangeEvent,
    useState,
    useCallback,
    useEffect,
  } from "react";
  import homeIcon from "../../assets/images/home.png";
  import { Wrapper, IconHome, BarraSuperior, TitleHome, Forms, FormsTitle, InputPiu, Botao, Frases, Actions, ButtonText } from "./styles";
  import { useLoad } from "../../hooks/useLoad";
  import { useAuth } from "../../hooks/useAuth";
  import api from "../../services/api";
  
  const TypePiu: React.FC = () => {
    const [contador, setContador] = useState("0/140");
    const [fraseErro, setFraseErro] = useState("");
    const [botao, setBotao] = useState(true);
    const [textoPiu, setTextoPiu] = useState("");
    const [change, setChange] = useState(false);
    var texto;

  
    const { carregarDados } = useLoad();
    const { user } = useAuth();
  
    useEffect(() => {
      carregarDados();
    }, [change, carregarDados]);
  
    const handleChange = useCallback((texto: string) => {
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
    },
    [textoPiu]
  );
  
    const handleSubmit = useCallback(
      async () => {
        
        const userId = user.id;
        const mensagem = textoPiu;
        console.log(userId, mensagem);
  
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
                      value={texto}
                      onChangeText={(texto) => handleChange(texto)}>

          </InputPiu>
          <Actions>
            <Frases  livre={botao}>
              {fraseErro}
            </Frases>
            <Frases  livre={botao}>
              {contador}
            </Frases>
            <Botao livre={botao} disabled={!botao} onPress={handleSubmit}>
                <ButtonText>Piar</ButtonText>
            </Botao>
          </Actions>
        </Forms>
      </Wrapper>
    );
  };
  
  export default TypePiu;