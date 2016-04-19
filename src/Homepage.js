import React from 'react';

class Homepage extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    return <div className='homepage'>

            <section className='header'>
                <h1>alan eng</h1>
            </section>

            <section className='sections'>
              <div className='box'>
                me
              </div>
              <div className='secondary box'>
                stitch fix
              </div>
              <div className='box'>
                projects
              </div>
              <div className='box'>
                contact
              </div>
            </section>

           </div>
  }
};

export default Homepage;
