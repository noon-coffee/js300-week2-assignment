import React from 'react';
import './App.css';
import YourArticle from './components/YourArticle';
import MissedArticle from './components/MissedArticle';
import yourArticles from './data/your-articles.json';
import missedArticles from './data/missed-articles.json';

function App() {
  return (
    <div className="App">

      <section>
        <h3>For you</h3>
        <div className="articles grid-2-col">
          { yourArticles.map((article, idx) => <YourArticle key={idx} article={article} />)}
        </div>
      </section>

      <section>
        <h3>In case you missed it</h3>
        <div className="articles grid-3-col">
          { missedArticles.map((article, idx) => <MissedArticle key={idx} article={article} />)}
        </div>
      </section>

    </div>
  );
}

export default App;
