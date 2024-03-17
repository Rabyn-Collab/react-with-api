import HomePage from "./features/home/HomePage"
import Footer from "./ui/Footer"
import Header from "./ui/Header"



const App = () => {


  return (
    <div>

      <Header />
      <div className=" border-b-2 border-black "></div>
      <HomePage />
      <div className=" border-b-2 border-black "></div>
      <Footer />



    </div>
  )
}
export default App