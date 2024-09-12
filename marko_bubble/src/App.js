// import styles
import "./styles/App.css";
// import components
import Nav from "./components/Nav";
import MainHeader from "./components/MainHeader";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
// import misc
function App() {
  return (
    <>
      <Nav />
      <Menu />
      <MainHeader />
      <MainSection />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
