import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { DefaultLayout } from "./DefaultLayout"
import Header from "./components/Header"
import { Footer, MascotFooter } from "./components/Footer"

function App() {

  return (
    <ThemeProvider theme= {defaultTheme}>
      <Header/>
      <DefaultLayout/>
      <MascotFooter/>
      <Footer/>
      <GlobalStyle/>
    </ThemeProvider>

  )
}
export default App
