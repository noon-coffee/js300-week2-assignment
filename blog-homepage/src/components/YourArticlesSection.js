import React from 'react';
import PropTypes from 'prop-types';
import Author from './Author';
import './ArticleSection.css';

class YourArticlesSection extends React.Component {

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
        <h3>{sectionTitle}</h3>
        <div className="articles grid-2-col">
          { 
            articles.map((article, idx) =>
              <article key={idx} className="grid-left-thumbnail">
                <div className='thumbnail' style={{backgroundImage: `url(${article.image})`}}></div>

                {article.hasAudioAvailable ?
                  <div className="options audio">
                    <span class="glyphicon glyphicon-volume-up" aria-hidden="true"></span> Audio available
                  </div> : ''}
                
                {article.memberPreview ?
                  <div className="options preview">
                    <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                  </div> : ''}

                <div className="bookmark">
                  <span class="glyphicon glyphicon-bookmark" aria-hidden="true"></span>
                </div>

                <div className="title">{article.title}</div>

                <div className="description">{article.description}</div>

                <Author author={article.author} />

                <div className="footer">
                  { this.formatArticleDate(article.postedDate) }
                  <span className="spacer">·</span>
                  {article.minutesToRead} min read
                </div>
              </article>
            )
          }
        </div>
      </section>
    );
  }

  formatArticleDate(dateString) {
    const date = new Date(dateString);
    const month = date.toLocaleString('default', {month: 'short'})
    const day = date.getDate();
    return `${month} ${day}`;
  }
}

export default YourArticlesSection;