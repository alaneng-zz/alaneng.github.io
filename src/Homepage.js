import React from 'react';

class Homepage extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    return <div className='homepage'>
             <div className='homepage-child'>centered!</div>
           </div>
  }
};

export default Homepage;