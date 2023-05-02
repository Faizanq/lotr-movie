import styles from '../styles/option.module.css'
import { SelectionType } from "../types"

type Props = {
  selection: SelectionType | null;
  setSelection: (selection: SelectionType) => void;
};

export default function Options(props: Props) {
  const { selection, setSelection } = props
  const questions = [
    'character',
    'movie',
    'book',
    'quote'
  ]

  return (
    <div className={styles.groupbtn}>
      {questions.map((question, index) => (
        <button
          key={index}
          className={`${styles.button} ${question === selection ? styles.selectedButton : styles.nonSelectedButton}`}
          onClick={() => setSelection(question as SelectionType)}
        >
          {question}
        </button>
      ))}
    </div>
  )
}
