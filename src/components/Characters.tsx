import React, { useEffect, useMemo, useState } from "react"

import Styles from "../styles/Movies.module.css"

interface Character {
  _id: string
  name: string
  species: string
  gender: string
  homeworld: string
}

interface Props {
  data: {
    docs: Character[]
    total: number
  }
}

export default function Characters(props: Props) {
  const { data } = props
  const [char, setChar] = useState("")

const mappedList = useMemo(() => {
  if (!char) {
    return data.docs
  }
  return data.docs.filter((element) => element["name"].toLowerCase().includes(char.toLowerCase()))
}, [data.docs, char])

  return (
    <div className={Styles.movieDashboard}>
      <label htmlFor="search">Search:</label>
      <input
        id="search"
        value={char}
        placeholder="Search characters..."
        className={Styles.keyVal}
        onChange={(e) => setChar(e.target.value)}
      />
      {mappedList.length === 0 && <p>No matching characters found.</p>}
      {mappedList?.map((char, index) => {
        const keys = Object.keys(char).filter((element) => {
          if (element === "name" || element === "_id") {
            return false
          }
          return true
        })
        return (
          <div key={index} className={Styles.information}>
            <h1> {char.name}</h1>
            {keys.map((title) => {
              return (
                <div key={title}>
                  <p>
                    {title} : {char[title]}
                  </p>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
