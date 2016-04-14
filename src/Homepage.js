import React from 'react';

class Homepage extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    return <div className='homepage'>
             <div className='homepage-child'>child1</div>
             <div className='homepage-child'>child2</div>
             <div className='homepage-child'>child3</div>
             <div className='homepage-child'>child4</div>
           </div>
  }
};

export default Homepage;