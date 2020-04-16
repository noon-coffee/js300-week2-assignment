import React from 'react';

class Author extends React.Component {
    render() {
      const {name, image, isMediumMember} = this.props.author;

      return (
        <div>{name}</div>
      );
    }
}

export default Author;