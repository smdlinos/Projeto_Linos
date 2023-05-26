import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./componentes/Header";
import Login from "./componentes/section_login";
import Footer from "./componentes/footer";

export default function App() {
  return (
    <div className="App">
      <div className="body">
      <Header />
      <main>
        <Login />
        <Footer />
      </main>
    </div>
    </div>
  );
}
