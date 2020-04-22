import React from 'react';
import PropTypes from 'prop-types';
import Author from './Author';
import './Article.css';
import Utils from './Utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faStar, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

class YourArticle extends React.Component {

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
      <article className="grid-left-image">
        <div className='image' style={{backgroundImage: `url(${article.image})`}}></div>

        {article.hasAudioAvailable &&
          <div className="options audio">
            <FontAwesomeIcon className="icon audio" icon={faVolumeUp} /> Audio available
          </div>}
        
        {article.memberPreview &&
          <div className="options preview">
            <FontAwesomeIcon className="icon star" icon={faStar} />
          </div>}

        <div className="bookmark">
            <FontAwesomeIcon 
              onClick={this.toggleBookmark} 
              className={`icon bookmark ${this.state.isBookmarkOn && 'isBookmarkOn'}`} 
              icon={faBookmark} 
            />
        </div>

        <div className="title"><a href={article.link} target="_blank" rel="noopener noreferrer">{article.title}</a></div>

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

export default YourArticle;