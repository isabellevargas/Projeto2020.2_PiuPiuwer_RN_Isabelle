import React, { createContext, useContext, useState, useCallback, useEffect} from "react";
import AsyncStorage from '@react-native-community/async-storage'; 
import api from "../services/api";
import * as Yup from 'yup';

interface AuthState {
  token: string;
  user: User;
}

interface AuthContextData extends AuthState {
  errorText: string;
  login({ username, password }: LoginCred): Promise<void>;
  logout(): void;
}

interface User {
  id: number;
  first_name: string;
  username: string;
  sobre: string;
  foto: string;
}

interface LoginCred {
  username: string;
  password: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ( { children }) => {
    const [data, setData] = useState<AuthState>({} as AuthState);
    const [errorText, setErrorText] = useState("");

    useEffect(() => {
        async function carregarDadosUsuario() {
            const [user, token] = await AsyncStorage.multiGet(['@Piupiuwer::user', '@Piupiuwer::token' ]);

        if (user[1] && token[1]) {
            api.defaults.headers.Authorization = `JWT ${token[1]}`;
            setData({ user: JSON.parse(user[1]), token: token[1] });
        }
        }

        carregarDadosUsuario();

    }, [])

  const login = useCallback(async ({ username, password }: LoginCred) => {
    setErrorText("");
    try {
      const esquema = Yup.object().shape({
        username: Yup.string().required('Usuário obrigatório'),
        password: Yup.string().required('Senha obrigatória'),
      });
      await esquema.validate({username, password}, { abortEarly: false });

      const response = await api.post("/login/", { username, password });

      const { token } = response.data;

      api.defaults.headers.Authorization = `JWT ${token}`;
      await AsyncStorage.setItem("@Piupiuwer::token", token);

      if (!!token) {
        const response = await api.get("/usuarios/?search=" + username);
        const user = response.data[0];
        await AsyncStorage.setItem("@Piupiuwer::user", JSON.stringify(user));

        setData({ user, token });
      }
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        setErrorText(err.message);
        return;
      }
      const { data } = err.response;

      if (err.response) {
        if (
          data.global !== undefined &&
          data.global[0] ===
            "Impossível fazer login com as credenciais fornecidas."
        )
        setErrorText("Atenção: Usuário e senha não existem");
       
      }
    }
  }, []);


  const logout = useCallback( async() => {
    await AsyncStorage.removeItem("@Piupiuwer::user");
    await AsyncStorage.removeItem("@Piupiuwer::token");

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ ...data, errorText, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
