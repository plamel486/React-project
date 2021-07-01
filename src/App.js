import './App.css';
import Hi from './component/Hi';

function App() {
  const name = "tom"
  return (
    <div className="App">
      <h1 style={{ color:"red", backgroundColor:"blue" }}>HELLO! {name}</h1>
      <Hi></Hi>
      <div></div>  
          
      <div className="box">여기는 app.js 영역입니다.</div>
    </div>
  );
}

export default App;
