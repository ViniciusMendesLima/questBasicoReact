import AlertButton from "./components/AlertButton/index";
function App() {
  return (
    <>
      <AlertButton label='Texto 1'/>
      <AlertButton />
      <AlertButton label='Texto 2' color='blue'/>
      <AlertButton label='Texto 3' color='green'/>
    </>
  );
}

export default App;
