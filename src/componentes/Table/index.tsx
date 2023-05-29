import styles from "./styles.module.css";

interface TableProps {
  imc: number;
}

export const Table = ({ imc }: TableProps) => {
  return (
    <table className={styles.table__container}>
      <thead>
        <tr>
          <th className={styles.table__head}>IMC</th>
          <th className={styles.table__head}>Classificação</th>
        </tr>
      </thead>

      <tbody>
        <tr style={imc <= 18.4 && imc !== 0 ? { background: "orangered" } : {}}>
          <td>MENOR QUE 18,5</td>
          <td>MAGREZA</td>
        </tr>
        <tr
          style={imc >= 18.5 && imc <= 24.9 ? { background: "orangered" } : {}}
        >
          <td>ENTRE 18,5 E 24,9</td>
          <td>NORMAL</td>
        </tr>
        <tr
          style={imc >= 25.0 && imc <= 29.9 ? { background: "orangered" } : {}}
        >
          <td>ENTRE 25,0 E 29,9</td>
          <td>SOBREPESO</td>
        </tr>
        <tr
          style={imc >= 30.0 && imc <= 39.9 ? { background: "orangered" } : {}}
        >
          <td>ENTRE 30,0 E 39,9</td>
          <td>OBESIDADE</td>
        </tr>
        <tr style={imc >= 40.0 ? { background: "orangered" } : {}}>
          <td>MAIOR QUE 40,0</td>
          <td>OBESIDADE GRAVE</td>
        </tr>
      </tbody>
    </table>
  );
};
