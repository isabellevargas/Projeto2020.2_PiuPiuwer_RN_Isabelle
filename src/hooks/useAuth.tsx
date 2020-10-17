import React, { createContext, useContext, useState, useCallback, useEffect} from "react";
import { AsyncStorage } from 'react-native'; 
import api from "../services/api";

interface AuthState {
  token: string;
  user: User;
}

interface AuthContextData {
  user: User;
  token: string;
  login({ username, password }: LoginCred): Promise<string | undefined>;
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

    useEffect(() => {
        async function carregarDadosUsuario() {
            const [user, token] = await AsyncStorage.multiGet(['@Piupiuwer::user', '@Piupiuwer::token' ]);

        if (user[0] && token[0]) {
            api.defaults.headers.Authorization = `JWT ${token}`;
            setData({ user: JSON.parse(user[0]), token: token[0] });
        }
        }

        carregarDadosUsuario();

    }, [])

  const login = useCallback(async ({ username, password }: LoginCred) => {
    try {
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
      const { data } = err.response;

      if (err.response) {
        if (
          data.global !== undefined &&
          data.global[0] ===
            "Impossível fazer login com as credenciais fornecidas."
        )
          return "Atenção: Usuário e senha não existem";
        /*if (
          data.username !== undefined &&
          data.username[0] === "Este campo não pode ser em branco."
        )
          return "Atenção: Usuário em branco";
        if (
          data.password !== undefined &&
          data.password[0] === "Este campo não pode ser em branco."
        )
          return "Atenção: Senha em branco";*/
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
      value={{ user: data.user, token: data.token, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
