import "./App.css";
import Footer from "./components/footer/Footer";
import Layout from "./components/layout/Layout";
import Nav from "./components/navbar/Nav";

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
