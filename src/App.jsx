import './styles/main.scss'
import {Header,Hero,About,Contact,Works,Footer} from "./components/"

function App() {


  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <Works/>
        <About/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}

export default App
