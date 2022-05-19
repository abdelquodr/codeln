import "./app.css"
import { Sidebar, Navbar } from "../src/components"
import { MessageBody } from "../src/layout"

function App() {
  return (
    <div className="app">
      <Sidebar />

      <div className="main">
        <Navbar />
        <MessageBody />
      </div>
    </div>
  );
}

export default App;
