import { Route, Routes } from "react-router"
import Main from "./pages/Main"
import ServiceDetail from "./pages/ServiceDetail"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/services/:slug" element={<ServiceDetail />} />
    </Routes>
  )
}

export default App