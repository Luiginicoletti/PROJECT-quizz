import QuestaoModel from "../model/questao";
import styles from "../styles/Questao.module.scss";
import Enunciado from "./Enunciado";
import Resposta from "./Resposta";
import Temporizador from "./Temporizador";

const letras = [
  { valor: "A", cor: "#85d4f2" },
  { valor: "B", cor: "#f26fba" },
  { valor: "C", cor: "#bce596" },
  { valor: "D", cor: "tomato" },
];

interface QuestaoProps {
  valor: QuestaoModel
  tempoPraResposta?: number
  respostaFornecida: (indice: number) =>  void
  tempoEsgotado: () => void
}

export default function Questao(props: QuestaoProps) {
  const questao = props.valor

  function renderizarRespostas() {
      return questao.respostas.map((resposta, i) => {
          return (
              <Resposta
                  key={`${questao.id}-${i}`}
                  valor={resposta}
                  indice={i}
                  letra={letras[i].valor}
                  corFundoLetra={letras[i].cor}
                  respostaFornecida={props.respostaFornecida}
              />
          )
      })
  }

  return (
      <div className={styles.questao}>
          <Temporizador key={questao.id}
              duracao={props.tempoPraResposta ?? 10}
              tempoEsgotado={props.tempoEsgotado} />
          <Enunciado texto={questao.enunciado} />
          {renderizarRespostas()}
      </div>
  )
}