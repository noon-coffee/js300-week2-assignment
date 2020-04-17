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
      <div>{name}</div>
    );
  }
}

export default Author;