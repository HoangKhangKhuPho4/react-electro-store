import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <div className="container">
          <h1>Welcome to Electro Store</h1>
          <p>Your Header component is now working!</p>
        </div>
      </main>
    </div>
  );
}

export default App;
