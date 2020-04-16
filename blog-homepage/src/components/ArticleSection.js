import React from 'react';
import Author from './Author';

class ArticleSection extends React.Component {
    render() {
        const {sectionTitle, articles} = this.props;

        return (
            <section>
                <h1>{sectionTitle}</h1>
                <hr />
                { 
                  articles.map((article, idx) => 
                    <article key={idx}>
                      <div>{article.title}</div>
                      <Author author={article.author} />
                    </article>
                  )
                }
            </section>
        );
    }
}

export default ArticleSection;