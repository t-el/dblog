import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Nav from "./components/NAV.jsx";
import Station from './components/STATION';
import Mars from './components/MARS';
import Editor from './components/EDITOR';
import Article from './components/ARTICLE';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
ReactDOM.render(
       <BrowserRouter>
       <Nav />
       <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<Station />} />
          <Route path="/social" element={<Mars />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/mse" element={<Editor />} />
          <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
  
       </Routes>
       <hr></hr>

<footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 ">
        <span className="text-sm text-gray-500 sm:text-center ">© 2022 <a href="https://github.com/t-el" className="underline">Taha Elkarroumy app</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500  sm:mt-0">
       
        <li>
        <a href="https://twitter.com/ElkarroumyTaha" className="hover:underline">Contact me</a>
        </li>
        </ul>
</footer>

       
      </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
