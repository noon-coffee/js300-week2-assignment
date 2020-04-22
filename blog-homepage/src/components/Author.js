import React from 'react';
import PropTypes from 'prop-types';

class Author extends React.Component {
  static propTypes = {
    author: PropTypes.exact({
      name: PropTypes.string,
      image: PropTypes.string,
      isMediumMember: PropTypes.bool,
    }),
  }

  render() {
    const {name, image, isMediumMember} = this.props.author;

    return (
      // lc: When doing some research, found out that React Fragments (the empty tag <> ... </>) allow you
      // to have a container element without creating more HTML - interesting.
      <>
        <span className={`author-image ${isMediumMember ? 'author-is-member' : ''}`}>
          <img src={image} alt={name} />
        </span>
        <span className="author-name">{name}</span>
      </>
    );
  }
}

export default Author;