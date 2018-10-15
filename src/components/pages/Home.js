import React, {Component} from 'react'
import mainLogo from '../images/logo_transparent.png'
import devHeader from '../images/dev-header.png'

const styles = {
  mainContainer: {
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    backgroundColor: '#ffffff',
    margin: '0 auto',
    border: '1px solid #bcbcbc',
    maxWidth: '800px',
    paddingBottom: '10%'
  },
  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: '#757575'
  },
  backgroundPic: {
    width: '100.2%',
    marginLeft: '-.5px',
    maxHeight: '200px',
    objectFit: 'cover'
  },
  mainLogo: {
    width: '25%',
    borderRadius: '50%',
    border: '.3em solid #ededed',
    boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 .2px 1px 0 rgba(0, 0, 0, 0.19)',
    marginTop: '-10%',
    backgroundColor: '#f5f5f5'
  },
  mainTable: {
    borderSpacing: '5em 0',
    width: '100%',
    position: 'relative',
    textAlign: 'left'
  },
  tableData: {
    padding: '3% 0'
  }
}
class Home extends Component {
  render () {
    return (
      <div className={'FadeIn'} style={{textAlign: 'center'}}>
        <div style={styles.mainContainer}>
          <img src={devHeader} style={styles.backgroundPic} alt='background-pic'/>
          <img src={mainLogo} style={styles.mainLogo} alt='main-logo'/>
          <table style={styles.mainTable}>
            <th style={{textAlign: 'center'}}>
              <h1 style={{color: '#24292e'}}>
                  Welcome to my site
              </h1>
            </th>
            <tr>
              <p>
                  I will be using this to collect and showcase my development work as I begin building my portfolio of
                  projects. This site itself is the first piece of my development portfolio built with Node.js and React.js.
                <br />
              </p>
              <p>
                <br />
                  If you would like to make a similar site for yourself using
                  this site as a starting point, clone/download my repository <a href='https://github.com/tomschweers/react-portfolio'target='_blank'>here</a>.
                <br />
                <br />
                  If you are more interested in cloning a similar, but more basic, boilerplate for building a web application
                  that is also mobile compatible, clone/download my repository <a href='https://github.com/tomschweers/react-boilerplate'target='_blank'>here</a>.
                <br />
              </p>
            </tr>
          </table>
        </div>
      </div>
    )
  }
}

export default Home
