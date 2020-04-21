import React from 'react';
import PropTypes from 'prop-types';
import Author from './Author';
import './Article.css';
import Utils from './Utils';

class MissedArticle extends React.Component {

  static propTypes = {
    article: PropTypes.exact({
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
    }).isRequired,

  }

  constructor(props) {
    super(props);
    this.state = { isBookmarkOn: false };
    this.toggleBookmark = this.toggleBookmark.bind(this);
  }

  toggleBookmark() {
    this.setState(state => ({
      isBookmarkOn: !state.isBookmarkOn
    }));
    console.log('clicked');
  }

  render() {
    const {article} = this.props;

    return (
      <article className="grid-top-image">
        <div className='image' style={{backgroundImage: `url(${article.image})`}}></div>

        {article.hasAudioAvailable &&
          <div className="options audio">
            <span className="glyphicon glyphicon-volume-up" aria-hidden="true"></span> Audio available
          </div>}
        
        {article.memberPreview &&
          <div className="options preview">
            <span className="glyphicon glyphicon-star" aria-hidden="true"></span> Member preview
          </div>}

        {/* BONUS: Make each bookmark component clickable. */}
        <div className="bookmark">
            <span onClick={this.toggleBookmark} className={`glyphicon glyphicon-bookmark ${this.state.isBookmarkOn && 'bookmarked'}`} aria-hidden="true"></span>
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

export default MissedArticle;