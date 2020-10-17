import React, { useCallback } from "react";
import {
  BlockComponent, Background, Titulo, ButtonLogout, ButtonText
} from "./styles";
import { useAuth } from "../../hooks/useAuth";
import imagem from '../../assets/images/background.jpg';


const Logout: React.FC = () => {

  const { logout } = useAuth();

  const handleLogout = useCallback(
    async () => {
      logout();
    },
    []
  );


  return (
    <Background source={imagem}>
        <BlockComponent>
            <Titulo>Deseja realmente sair?</Titulo>
                <ButtonLogout onPress={handleLogout}>
                    <ButtonText>Sair</ButtonText>
                </ButtonLogout>
        </BlockComponent>
    </Background>
    
  );
};

export default Logout;


