import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Pokedex from "./containers/Pokedex"
import AppNavigator from "./components/AppNavigator"

function App() {
  return (
    <Router>
      <AppNavigator />
      <Routes>
        <Route path="/" Component={Pokedex} />
      </Routes>
    </Router>
  );
}

export default App