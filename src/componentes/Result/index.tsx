import styles from "./styles.module.css";

interface ResultProps {
  imc: number;
}

export const Result = ({ imc }: ResultProps) => {
  return (
    <div className={styles.result__container}>
      <b>Seu IMC: {imc.toFixed(2)}</b>
    </div>
  );
};
