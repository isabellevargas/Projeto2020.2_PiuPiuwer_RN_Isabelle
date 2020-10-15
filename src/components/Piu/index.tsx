import React, { useCallback, useEffect, useState } from "react";
import like from "../../assets/images/003-favourite 1.png";
import deletar from "../../assets/images/delete 2.png";
import {
  WrapperComponent,
  InteractionsComponent,
  DataComponent, PiuComponents, UserImage, UserData, Name, Username, PiuText,
  LikeComponent, LikeText, InteractionImage
} from "./styles";
import api from "../../services/api";
import { useLoad } from "../../hooks/useLoad";
import { useAuth } from "../../hooks/useAuth";
import { TouchableOpacity } from "react-native-gesture-handler";

export interface PiuItem {
  id: number;
  usuario: DadosGerais;
  likers: DadosGerais[];
  texto: string;
  horario: string;
}

export interface DadosGerais {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  foto: string;
}

interface PiuItemProps {
  dados: PiuItem;
}

const Piu: React.FC<PiuItemProps> = ({ dados }) => {
  const [change, setChange] = useState(false);
  const { carregarDados } = useLoad();
  const { user } = useAuth();

  useEffect(() => {
    carregarDados();
  }, [change]);

  const handleDelete = useCallback(
    async () => {
      const piuId = dados.id;
      const userId = user.id;

      if (dados.usuario.id === userId) {
        await api.delete(`/pius/${piuId}`);
      } else {
        alert("Você não pode excluir pius que não são seus");
      }
      setChange(!change);
    },
    [dados.id, dados.usuario.id, user.id, change]
  );

  const handleLike = useCallback(
    async () => {
      const piuId = dados.id;
      const userId = user.id;

      await api.post("/pius/dar-like/", { usuario: userId, piu: piuId });
      setChange(!change);
    },
    [dados.id, user.id, change]
  );

  return (
    <WrapperComponent>
      <PiuComponents>
        <DataComponent>
          <UserImage source={{uri: dados.usuario.foto}} />
          <UserData>
            <Name>
              {dados.usuario.first_name + " " + dados.usuario.last_name}
            </Name>
            <Username>{dados.usuario.username}</Username>
            <PiuText>{dados.texto}</PiuText>
          </UserData>
        </DataComponent>
        <InteractionsComponent>
          <LikeComponent>
            <TouchableOpacity onPress={handleLike}>
              <InteractionImage source={like}/>
            </TouchableOpacity>
            <LikeText>{dados.likers.length}</LikeText>
          </LikeComponent>
          <TouchableOpacity onPress={handleDelete}>
            <InteractionImage source={deletar}  />
          </TouchableOpacity>
        </InteractionsComponent>
      </PiuComponents>
    </WrapperComponent>
  );
};

export default Piu;
