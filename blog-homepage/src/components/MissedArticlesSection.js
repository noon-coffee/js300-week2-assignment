import React from 'react';
import PropTypes from 'prop-types';
import Author from './Author';
import './ArticleSection.css';
import Utils from './Utils';

class MissedArticlesSection extends React.Component {

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
    const {index, article} = this.props;

    return (
      <article key={index} className="grid-top-image">
        <div className='image' style={{backgroundImage: `url(${article.image})`}}></div>

        {article.hasAudioAvailable ?
          <div className="options audio">
            <span className="glyphicon glyphicon-volume-up" aria-hidden="true"></span> Audio available
          </div> : ''}
        
        {article.memberPreview ?
          <div className="options preview">
            <span className="glyphicon glyphicon-star" aria-hidden="true"></span> Member preview
          </div> : ''}

        <div className="bookmark">
          <span className="glyphicon glyphicon-bookmark" aria-hidden="true"></span>
        </div>

        <div className="title">{article.title}</div>

        <div className="description">{article.description}</div>

        <Author author={article.author} />

        <div className="footer">
          { Utils.formatArticleDate(article.postedDate) }
          <span className="spacer">·</span>
          {article.minutesToRead} min read
        </div>
      </article>
    );
  }
}

export default MissedArticlesSection;