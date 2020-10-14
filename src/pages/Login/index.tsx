import React from "react";
import Box from "../../components/Box";
/*import MenuLogin from "../../components/MenuLogin";*/
import { Background } from "./styles";

import imagem from '../../assets/images/background.jpg';

const Login: React.FC = () => {
  return (
    <Background source={imagem}>
        <Box />
    </Background>
  );
};

export default Login;
