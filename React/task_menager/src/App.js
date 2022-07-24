function App() {
  const name = "Marta";
  const x = true;
  return (
    <div className="Container">
      <header>
        <p>Hi there</p>
        <h1>Let's do a website {name}</h1>
        <h2>u cool? {x ? "Yes" : "NO"}</h2>
      </header>
    </div>
  );
}

export default App;
