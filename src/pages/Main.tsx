
import Layout from "../Layouts/Layout"
import AboutUs from "./AboutUs"
import ContactUs from "./ContactUs"
import Home from "./Home"
import Portfolio from "./Portfolio"
import Services from "./Sevices"

const Main = () => {
  return (
    <div>
        <Layout>
          <Home />
          <Services />
          <Portfolio />
          <AboutUs />
          <ContactUs />
        </Layout>
    </div>
  )
}

export default Main