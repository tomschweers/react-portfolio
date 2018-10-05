import React, {Component} from 'react'

const styles = {
  topContainer: {
    margin: 'auto',
    display: 'block'
  }
}

class Home extends Component {
  render () {
    return (
      <div style={styles.topContainer}>
        <div className={'FadeIn'} style={{width: '50%'}}>
          <h1 style={{color: '#24292e'}}>
                  Welcome to my site
          </h1>
          <p>
                  I will be using this to collect and showcase my development work as I begin building my portfolio of
                  projects. The site itself is the first piece of my development portfolio. I built this site using
                  Node.js and React.js, hosted on Heroku.
            <br />
            <br />
                  If you would like to make a similar site for yourself using
                  this site as a starting point, clone/download my repository
                  &nbsp;
            <a href='https://github.com/tomschweers/react-portfolio'target='_blank'>here</a>.
            <br />
            <br />
                  If you are more interested in cloning a similar, but more basic, boilerplate for building a web application
                  that is also mobile compatible, clone/download my repository
                  &nbsp;
            <a href='https://github.com/tomschweers/react-boilerplate'target='_blank'>here</a>.
          </p>
        </div>
      </div>
    )
  }
}

export default Home
