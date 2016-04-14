import React from 'react';

class Homepage extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    return <div className='homepage'>
             <div className='header'>
               <h1>hello world!</h1> 
             </div>
           </div>
  }
};

export default Homepage;