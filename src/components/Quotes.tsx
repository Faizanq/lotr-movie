import QuoteStyles from "../styles/Quotes.module.css"
import Styles from "../styles/Movies.module.css"
import { Quote } from "../types"

interface Props {
  data: {
    docs: Quote[];
  };
}

export default function Quotes(props: Props) {
  const { data } = props
  const filteredQuotes = data.docs.filter((quote) => quote.dialog && quote.dialog.length > 10);

  return (
    <div className={Styles.movieDashboard}>
      {filteredQuotes.map((quote, index) => (
        <div key={index}>
            <p className={QuoteStyles.quoteText}>{quote.dialog}</p>
        </div>
      ))}
    </div>
  )
}
