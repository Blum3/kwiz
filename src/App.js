import './App.css';
import React, { useState, useEffect } from "react";
import openSocket from "socket.io-client";

import { Route, Link, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/home';
import QuestionsComponent from './components/questions';
import NoPage from './components/nopage';

import 'bootstrap/dist/css/bootstrap.css';

const ENDPOINT = "http://localhost:8080";
const socket = openSocket(ENDPOINT, { transports: ['websocket'] });


function App() {

  const [questions, setQuestions] = useState([]);
  const [clientCount, setClientCount] = useState(0);
  const [clientNames, setClientNames] = useState([]);

  useEffect(() => {
    socket.on("quiz", data => {
      setQuestions(data.quiz);
    });
  }, []);

  useEffect(() => {
    socket.on("num_of_clients", clientCount => {
      setClientCount(clientCount);
    });
  }, []);

  useEffect(() => {
    socket.on("clients_names", clientNames => {
      setClientNames(clientNames);
    });
  }, []);
  

  return ( 
    <div className="App">
     

      <BrowserRouter>
        <div>
          <div className="container">
            <div className = "row" >
              <div className=" col header">
                  <h1 className="display-1 fw-bold">Kwizzz</h1>
                  <p className="display-5"> Interactive and Multi-User Quizz.</p>
                  
              </div>
            </div>
          </div>

          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
              <li><Link to={'/play'} className="nav-link"> Play </Link></li>
            </ul>
          </nav>

          <hr />

          <div className='container'>
            <p > Player(s) Connected : {clientCount}</p>

            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/play' element={<QuestionsComponent questions={questions} socket={socket}></QuestionsComponent>} />
              <Route path='*' element={<NoPage />} />
            </Routes>
          </div>
          <p > Players names : {clientNames}</p>

          
          <div className="Container">
            <div className = "row" >
              <footer id="site-footer">
                <p>Copyright &copy;KWIZZZ 2022</p>
              </footer>
            </div>
          </div>
        </div>
      </BrowserRouter>


    

      
          
      
    </div>
  );
}

export default App;
