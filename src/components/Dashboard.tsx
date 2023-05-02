import React, { useState } from "react"
import styles from "../styles/dashboard.module.css"
import Options from "./Options"
import useLOTRData from "../hooks/useFetchData"
import Characters from "./Characters"
import Movies from "./Movies"
import Books from "./Books"
import Quotes from "./Quotes"
import Loader from "./Loader"

type SelectionType = "character" | "book" | "movie" | "quote" | null;

export default function Dashboard() {
  const [selection, setSelection] = useState<SelectionType>(null)
  const { data, loading, error } = useLOTRData(selection)
  
  function onClickHandler(clickedButton: SelectionType) {
    return () => {  
      setSelection(clickedButton)
    }
  }

  const dataRender: {[key in SelectionType]: JSX.Element} = {
    character : <Characters data={data} />,
    book:<Books data={data} />,
    movie:<Movies data={data} />,
    quote:<Quotes data={data} />
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