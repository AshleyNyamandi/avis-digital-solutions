
import Layout from "../Layouts/Layout"
import AboutUs from "./AboutUs"
import ContactUs from "./ContactUs"
import FAQ from "./Faq"
import Home from "./Home"
import Galary from "./Gallary"
import Services from "./Sevices"

const Main = () => {
  return (
    <div>
      <Home />
      <Layout>
        <Services />
        <Galary />
        <AboutUs />
        <FAQ />
        <ContactUs />
      </Layout>
    </div>
  )
}

export default Main