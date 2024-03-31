import '../styles/globals.css'
import Header from './component/Header/Header'
import './style/style.module.css'
import Footer from '../pages/component/footer/Footer'
function MyApp({ Component, pageProps }) {

  return <><Header/><Component {...pageProps} /><Footer/></>
}

export default MyApp
