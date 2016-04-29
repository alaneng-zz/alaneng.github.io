import React from 'react';

class Homepage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      subject: 'alan eng'
    }
  };

  handleBoxSelect(subject) {
    this.setState({subject: subject})
  };

  render() {
    let { subject } = this.state;
    const subjects = ['me', 'stitch fix', 'projects', 'blog'];

    let boxes = subjects.map(subject =>
      <div key={subject} onClick={this.handleBoxSelect.bind(this, subject)}>{subject}</div>
    )

    return <div className='homepage'>
            <section className='header'>
                <h1>{ subject }</h1>
            </section>
            <section className='boxes'>
              { boxes }
            </section>
           </div>
  }
};

export default Homepage;
