import React from 'react';
import logo from './logo.svg';
import './App.css';
import YourArticlesSection from './components/YourArticlesSection';
import MissedArticlesSection from './components/MissedArticlesSection';
import yourArticles from './data/your-articles.json';
import missedArticles from './data/missed-articles.json';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <YourArticlesSection sectionTitle="For you" articles={yourArticles} />
      <MissedArticlesSection sectionTitle="In case you missed it" articles={missedArticles} />

    </div>
  );
}

export default App;
