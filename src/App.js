import './App.css';
import React, {useState} from 'react';
import Hi from './component/Hi';
import Tour from './component/Tour';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';

function App() {

  let [name,change] = useState("tom");
  return (
    <BrowserRouter>

    <div className="App">

      <h1>안녕하세요! 오신 걸 환영 합니다.
      </h1>
      <Tour></Tour>

      <Switch>
          <Route exact path="/">
      <h1>HELLO! {name}</h1>
      <button onClick={()=>change(name==="tom"?"jane":"tom")}>변경이닷</button>
      <Hi></Hi>
      <div></div>  
          
      <div className="box">여기는 app.js 영역입니다.</div>

      <Link to="/page2">숨겨진 페이지로 이동</Link>
          </Route>

        <Route exact path="/page2">
            <h1>숨겨진 페이지!</h1>
            <Link to="/">홈으로 이동</Link>

        </Route>

      </Switch>

    </div>

    </BrowserRouter>
  );
}

export default App;
