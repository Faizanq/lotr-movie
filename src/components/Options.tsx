import React, { Dispatch, SetStateAction } from 'react'
import styles from '../styles/option.module.css'

interface Props {
  selection: string | null
  setSelection: Dispatch<SetStateAction<string | null>>
}

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
          onClick={setSelection(question)}
        >
          {question}
        </button>
      ))}
    </div>
  )
}
