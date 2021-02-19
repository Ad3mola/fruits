import Home from "./components/views/Home/Home";

function App(): JSX.Element {
  return (
    <div className="container mt-5" data-test="app-component">
      <Home />
    </div>
  );
}

export default App;
