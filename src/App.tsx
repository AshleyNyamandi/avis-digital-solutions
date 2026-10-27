import { useEffect } from "react"
import { Link, matchPath, Route, Routes, useLocation } from "react-router"
import { Helmet } from "react-helmet-async"
import Layout from "./Layouts/Layout"
import { services } from "./constants"
import Main from "./pages/Main"
import ServiceDetail from "./pages/ServiceDetail"

const App = () => {
  const { pathname, hash, key } = useLocation()
  const serviceMatch = matchPath("/services/:slug", pathname)
  const service = services.find((item) => item.slug === serviceMatch?.params.slug)

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    } else {
      window.scrollTo({ top: 0, behavior: "instant" })
    }
  }, [pathname, hash, key])

  return (
    <Layout>
      <Helmet>
        <title>{service ? `ADS: ${service.label}` : "Avis Digital Solutions"}</title>
        <meta name="description" content={service ? `Find out more about ${service.label}` : "Security and connectivity solutions from Avis Digital Solutions. Contact us for CCTV, alarms, access control, WiFi, and intercom installation."} />
      </Helmet>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="*" element={
          <div className="min-h-screen flex flex-col items-center justify-center gap-4">
            <h1 className="text-3xl font-bold">Page not found</h1>
            <Link to="/" className="text-blue-600 hover:underline">Back to home</Link>
          </div>
        } />
      </Routes>
    </Layout>
  )
}

export default App
