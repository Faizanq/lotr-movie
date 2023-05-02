import { useState } from "react"
import styles from "../styles/dashboard.module.css"
import Options from "./Options"
import useLOTRData from "../hooks/useFetchData"
import Characters from "./Characters"
import Movies from "./Movies"
import Books from "./Books"
import Quotes from "./Quotes"
import Loader from "./Loader"
import { Character, Book, Movie, Quote } from "../types"

type SelectionType = "character" | "book" | "movie" | "quote";

export default function Dashboard() {
  const [selection, setSelection] = useState<SelectionType>("character")
  const { data, loading } = useLOTRData(selection)
  
  function onClickHandler(clickedButton: SelectionType): void {
    setSelection(clickedButton);
  }

  const dataRender: {
    [key in SelectionType]: JSX.Element;
  } = {
    character: <Characters data={data as { docs: Character[] }} />,
    book: <Books data={data as { docs: Book[] }} />,
    movie: <Movies data={data as { docs: Movie[] }} />,
    quote: <Quotes data={data as { docs: Quote[] }} />
  }

  return (
    <div className={styles.dashboard}>
      <div className={styles.layout}>
        <h1 className={styles.bannerTitle}>LOTR INFO</h1>
        <Options selection={selection} setSelection={onClickHandler} />
        {loading && <Loader />}
        {data && dataRender[selection]}
      </div>
    </div>
  )
}
