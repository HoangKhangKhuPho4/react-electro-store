import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <main className="main-content">
        <div className="container">
          <h1>Welcome to Electro Store</h1>
          <p>Your Header and Navigation components are now working!</p>
        </div>
      </main>
    </div>
  );
}

export default App;
