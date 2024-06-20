import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <main>
        <Home />
        <Content />
        <Footer />
      </main>
    </div>
  );
}

export default App;
