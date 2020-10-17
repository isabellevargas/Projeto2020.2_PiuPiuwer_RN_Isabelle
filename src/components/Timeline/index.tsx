import React, { useState, useEffect } from "react";
import TypePiu from "../TypePiu";
import Piu, { PiuItem } from "../Piu";
import { Wrapper, Pius, Background } from "./styles";
import { useLoad } from "../../hooks/useLoad";
import { ScrollView } from 'react-native';

const Timeline: React.FC = () => {
  const [dadosTimeline, setDadosTimeline] = useState<PiuItem[]>([]);
  const { pius } = useLoad();
  useEffect(() => {
    setDadosTimeline(pius);
  }, [pius]);

  return (
    <ScrollView>
      <Wrapper>
        <TypePiu />
        <Pius>
          {dadosTimeline &&
            dadosTimeline.map((dado: PiuItem) => {
              return <Piu key={dado.id} dados={dado} />;
            })}
        </Pius>
      </Wrapper>
      <Background />
      </ScrollView>
  );
};

export default Timeline;
