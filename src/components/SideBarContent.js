import React from 'react'
import PropTypes from 'prop-types'
import SideBarPanel from './SideBarPanel'
import { Link } from 'react-router-dom'

const styles = {
  sidebar: {
    width: 256,
    height: '100%'
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: '#757575',
    textDecoration: 'none'
  },
  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: '#757575'
  },
  content: {
    padding: '16px',
    height: '100%',
    backgroundColor: 'white'
  }
}

// Menu divider
// <div style={styles.divider} />

const SidebarContent = props => {
  const style = props.style
    ? { ...styles.sidebar, ...props.style }
    : styles.sidebar

  return (
    <SideBarPanel title={'Tom Schweers'} style={style}>
      <div style={styles.content}>
        <Link to='/'style={styles.sidebarLink}>Home</Link>
        <div style={styles.divider} />
        <Link to='/profile'style={styles.sidebarLink}>Profile</Link>
      </div>
    </SideBarPanel>
  )
}

SidebarContent.propTypes = {
  style: PropTypes.object
}

export default SidebarContent
