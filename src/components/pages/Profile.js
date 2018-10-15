import React, {Component} from 'react'
import ProfilePic from '../images/profile-pic.jpg'
import SfHeader from '../images/sf-header.jpg'

const styles = {
  mainContainer: {
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    backgroundColor: '#ffffff',
    margin: '0 auto',
    borderLeft: '1px solid #bcbcbc',
    borderRight: '1px solid #bcbcbc',
    maxWidth: '800px',
    paddingBottom: '10%',
    fontSize: '.9em'
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
  profilePic: {
    width: '10em',
    borderRadius: '50%',
    border: '.3em solid #f5f5f5',
    boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 .2px 1px 0 rgba(0, 0, 0, 0.19)',
    marginTop: '-100px'
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
class Profile extends Component {
  render () {
    return (
      <div className={'FadeIn'} style={{textAlign: 'center'}}>
        <div style={styles.mainContainer}>
          <img src={SfHeader} style={styles.backgroundPic} alt='background-pic'/>
          <img src={ProfilePic} style={styles.profilePic} alt='profile-pic'/>
          <table style={styles.mainTable}>
            <th>
              <h1>
                  Tom Schweers
              </h1>
            </th>
            <tr>
              <td style={styles.tableData}>
                <h3>
                  Summary
                </h3>
                <div style={styles.divider} />
                <p>
                  Enterprise applications consultant and developer with a
                  background configuring and integrating cloud apps (SaaS)
                  for Fortune 500 companies.
                  <br />
                </p>
              </td>
            </tr>
            <tr>
              <td style={styles.tableData}>
                <h3>
                  Technologies
                </h3>
                <div style={styles.divider} />
                <p>
                  <strong>Business systems</strong>
                  <br />
                  <br />
                  Oracle CPQ Cloud, Oracle Sales Cloud, Salesforce Sales Cloud
                  , Salesforce Service Cloud, Salesforce CPQ Cloud, Mulesoft
                  , Oracle Integration Coud, SnapLogic, and more.
                  <br />
                  <br />
                  <strong>Open source</strong>
                  <br />
                  <br />
                  Git, Bash, ES6, Yarn, Node.js, React.js, Heroku, Webpack, and more.
                </p>
              </td>
            </tr>
            <tr>
              <td style={styles.tableData}>
                <h3>
                  Location
                </h3>
                <div style={styles.divider} />
                <p>
                  San Francisco Bay Area
                  <br />
                  <br />
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
