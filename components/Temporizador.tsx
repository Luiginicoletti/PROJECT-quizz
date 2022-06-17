import styles from "../styles/Temporizador.module.scss";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

interface TemporizadorProps {
  key: any;
  duracao: number;
  tempoEsgotado: () => void;
}

export default function Temporizador(props: TemporizadorProps) {
  return (
    <div className={styles.temporizador}>
      <CountdownCircleTimer
        isPlaying
        size={120}
        duration={props.duracao}
        colors={["#62e6d8", "#a2de66", "#d6c73b", "#e83030"]}
        colorsTime={[10, 8, 6, 0]}
        onComplete={props.tempoEsgotado}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
}
