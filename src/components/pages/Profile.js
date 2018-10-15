import React, {Component} from 'react'
import ProfilePic from '../images/profile-pic.jpg'
import SfHeader from '../images/sf-header.jpg'

const styles = {
  mainContainer: {
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    backgroundColor: '#ffffff',
    margin: '2% 20%',
    border: '1px solid #bcbcbc'
  },
  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: '#757575'
  },
  backgroundPic: {
    width: '100%'
  },
  profilePic: {
    width: '20%',
    borderRadius: '50%',
    border: '4px solid #f5f5f5',
    boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 .2px 1px 0 rgba(0, 0, 0, 0.19)',
    marginTop: '-100px'
  },
  mainTable: {
    borderSpacing: '5em 0',
    width: '100%',
    position: 'relative',
    fontSize: '1vw',
    textAlign: 'left'
  }
}
class Profile extends Component {
  render () {
    return (
      <div className={'FadeIn'} style={{textAlign: 'center'}}>
        <div style={styles.mainContainer}>
          <img src={SfHeader} style={styles.backgroundPic} alt='background-pic'/>
          <img src={ProfilePic} style={styles.profilePic} alt='profile-pic'/>
          <table style={styles.mainTable}>
            <th style={{textAlign: 'center'}}>
              <h1>
                  Tom Schweers
              </h1>
            </th>
            <tr>
              <td>
                <div style={styles.divider} />
              </td>
            </tr>
            <tr>
              <h3>
                Summary
              </h3>
            </tr>
            <tr>
              <td>
                <p>
                  Enterprise applications consultant and developer with a
                  background configuring and integrating cloud apps (SaaS)
                  for Fortune 500 companies.
                  <br />
                </p>
              </td>
            </tr>
            <tr>
              <h3>
                Technologies
              </h3>
            </tr>
            <tr>
              <td>
                <p>
                  Business systems:
                  Oracle CPQ Cloud, Oracle Sales Cloud, Salesforce Sales Cloud, Salesforce Service Cloud, Salesforce CPQ Cloud, Mulesoft, Oracle Integration Coud, SnapLogic.
                  <br />
                  <br />
                  Open source technologies:
                  Git, Bash, ES6, Yarn, Node.js, React.js, Heroku, Webpack.
                </p>
              </td>
            </tr>
          </table>
        </div>
      </div>
    )
  }
}

export default Profile
