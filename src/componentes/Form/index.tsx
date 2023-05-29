import { FormEvent, useState } from "react";
import { Result } from "../Result";
import { Table } from "../Table";
import styles from "./styles.module.css";

export const Form = () => {
  const [IMC, setIMC] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  const calcIMC = (e: FormEvent) => {
    e.preventDefault();
    const heightCalc = height * height;
    const result = weight / heightCalc;
    setIMC(result);
  };

  return (
    <>
      <form onSubmit={calcIMC} className={styles.form__container}>
        <div className={styles.form__content}>
          <div>
            <label htmlFor="height">Altura (ex.: 1,80)</label>
            <input
              className={styles.form__input}
              type="number"
              step="0.01"
              placeholder="Metros"
              onChange={(e) =>
                setHeight(parseFloat((e.target as HTMLInputElement).value))
              }
              required
            />
          </div>

          <div>
            <label htmlFor="weight">Peso (ex.: 80)</label>
            <input
              className={styles.form__input}
              type="number"
              placeholder="Quilos"
              onChange={(e) =>
                setWeight(parseFloat((e.target as HTMLInputElement).value))
              }
              required
            />
          </div>
        </div>

        <div className={styles.form__buttons__content}>
          <button
            className={`${styles.form__button} ${styles["form__button--calc"]}`}
            type="submit"
          >
            Calcular
          </button>
          <button
            className={`${styles.form__button} ${styles["form__button--reset"]}`}
            type="reset"
          >
            Limpar
          </button>
        </div>
      </form>

      <Result imc={IMC} />
      <Table imc={IMC} />
    </>
  );
};
