import Hero from "./components/Hero";
import Header from "./components/Header";
import Info from "./components/Info";
import Services from "./components/Services";
import External from "./components/External";

function App() {
  return (
    <div className="App">
       <Header />
       <Hero />
       <Info />
       <Services />
       <External />
    </div>
  );
}

export default App;
