import "./App.css";
import MyNav from "./components/MyNav";
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <div className="App">
      <MyNav mainLink="Home" link2="About" link3="Browse" navBg="bg-info" />
      <Welcome title="React-Shop" subtitle="Il tuo reactive shop preferito!" />
      <AllTheBooks />
      <MyFooter myContacts="Mi disp i miei contatti ma non te li do" />
    </div>
  );
}

export default App;
