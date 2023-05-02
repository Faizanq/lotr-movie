import "./App.css"
import Dashboard from "./components/Dashboard"

function App() {
  return (
    <div className="App">
      <header>this is the header</header>
      <main>
        <img
          src="https://coolwallpapers.me/th700/5589488-fantasy-island-wallpapers.jpg"
          alt="lotr-background-img"
          className="bg-img"
        />
        <Dashboard />
      </main>
      {/* <footer>This si the footer</footer> */}
    </div>
  )
}

export default App
