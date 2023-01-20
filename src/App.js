import "./App.css";
import Brands from "./layout/Brands";
import Footer from "./layout/Footer";
import Layout from "./layout/Layout";
import Nav from "./navbar/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Layout />
      <Footer />
    </div>
  );
}

export default App;
