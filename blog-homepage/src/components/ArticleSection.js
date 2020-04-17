import React from 'react';
import PropTypes from 'prop-types';
import Author from './Author';

class ArticleSection extends React.Component {

  static propTypes = {
    sectionTitle: PropTypes.string.isRequired,
    articles: PropTypes.arrayOf(PropTypes.exact({
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      link: PropTypes.string,
      author: PropTypes.exact({
        name: PropTypes.string,
        image: PropTypes.string,
        isMediumMember: PropTypes.bool,
      }),
      postedDate: PropTypes.string,
      minutesToRead: PropTypes.number,
      hasAudioAvailable: PropTypes.bool,
      memberPreview: PropTypes.bool,
    })).isRequired,

  }

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