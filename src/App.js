import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Widgets } from "./Widgets";
import { Feed } from "./Feed";
import { Login } from "./Login";
import { useStateValue } from "./StateProvider";
import "./App.css";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />

          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
