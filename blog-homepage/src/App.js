import React from 'react';
import logo from './logo.svg';
import './App.css';
import ArticleSection from './components/ArticleSection';
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

      <ArticleSection sectionTitle="For you" articles={yourArticles} />
      <ArticleSection sectionTitle="In case you missed it" articles={missedArticles} />

    </div>
  );
}

export default App;
