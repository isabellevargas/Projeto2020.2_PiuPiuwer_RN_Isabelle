import React, { createContext, useContext, useState, useCallback } from "react";
import api from "../services/api";
import { PiuItem } from "../components/Piu";

interface LoadContextData {
  carregarDados(): void;
  pius: PiuItem[];
}

const LoadContext = createContext<LoadContextData>({} as LoadContextData);

export const LoadProvider: React.FC = ({ children }) => {
  const [dados, setDados] = useState<PiuItem[]>([]);

  const carregarDados = useCallback(async () => {
    const response = await api.get("/pius/");
    setDados(response.data);
  }, [setDados]);

  return (
    <LoadContext.Provider value={{ pius: dados, carregarDados }}>
      {children}
    </LoadContext.Provider>
  );
};

export function useLoad(): LoadContextData {
  const context = useContext(LoadContext);

  return context;
}
