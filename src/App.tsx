import { Route, Routes } from "react-router"
import Main from "./pages/Main"
import NotFound from "./pages/NotFound"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App