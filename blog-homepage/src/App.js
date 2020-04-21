import React from 'react';
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

      {/* <YourArticlesSection sectionTitle="For you" articles={yourArticles} />
      <MissedArticlesSection sectionTitle="In case you missed it" articles={missedArticles} /> */}

      <section>
        <h3>For you</h3>
        <div className="articles grid-2-col">
          { yourArticles.map((article, idx) => <YourArticlesSection key={idx} article={article} />)}
        </div>
      </section>

      <section>
        <h3>In case you missed it</h3>
        <div className="articles grid-3-col">
          { missedArticles.map((article, idx) => <MissedArticlesSection key={idx} article={article} />)}
        </div>
      </section>

    </div>
  );
}

export default App;
