import React from "react"
import Styles from '../styles/Movies.module.css'

interface Book {
  id: string
  name: string
  author: string
  published: string
}

interface Props {
  data: {
    docs: Book[]
  }
}

const Books: React.FC<Props> = ({ data }) => {
  return (
    <div className={Styles.movieDashboard}>
      {data.docs.map((book, index) => (
        <div key={index}>
          <h1>{book.name}</h1>
          <p>{book.author}</p>
          <p>{book.published}</p>
        </div>
      ))}
    </div>
  )
}

export default Books
