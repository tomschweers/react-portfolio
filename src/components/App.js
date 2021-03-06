import React, {Component} from 'react'
import Sidebar from 'react-sidebar'
import SideBarContent from './SideBarContent'
import MainRouter from './MainRouter'
import SideBarPanel from './SideBarPanel'

// Font Awesome icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
// Adding all icons to the library
library.add(fas, far, fab)

const styles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    padding: 8
  },
  contentHeaderTitle: {
    float: 'right'
  },
  headerIcons: {
    color: 'white'
  },
  content: {
    padding: 'auto 0'
  }
}

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      docked: false,
      open: false,
      transitions: true,
      touch: true,
      shadow: true,
      pullRight: false,
      touchHandleWidth: 20,
      dragToggleDistance: 30
    }

    this.renderPropCheckbox = this.renderPropCheckbox.bind(this)
    this.renderPropNumber = this.renderPropNumber.bind(this)
    this.onSetOpen = this.onSetOpen.bind(this)
    this.menuButtonClick = this.menuButtonClick.bind(this)
  }

  onSetOpen (open) {
    this.setState({ open })
  }

  menuButtonClick (ev) {
    ev.preventDefault()
    this.onSetOpen(!this.state.open)
  }

  renderPropCheckbox (prop) {
    const toggleMethod = ev => {
      const newState = {}
      newState[prop] = ev.target.checked
      this.setState(newState)
    }

    return (
      <p key={prop}>
        <label htmlFor={prop}>
          <input
            type="checkbox"
            onChange={toggleMethod}
            checked={this.state[prop]}
            id={prop}
          />
          {prop}
        </label>
      </p>
    )
  }

  renderPropNumber (prop) {
    const setMethod = ev => {
      const newState = {}
      newState[prop] = parseInt(ev.target.value, 10)
      this.setState(newState)
    }

    return (
      <p key={prop}>
        {prop}{' '}
        <input type="number" onChange={setMethod} value={this.state[prop]} />
      </p>
    )
  }

  render () {
    const sidebar = <SideBarContent />

    const contentHeader = (
      <span>
        {!this.state.docked && (
          <a
            onClick={this.menuButtonClick}
            href="#"
            style={styles.contentHeaderMenuLink}
          >
            <FontAwesomeIcon icon={'bars'} style={styles.headerIcons} />
          </a>
        )}
        <span style={styles.contentHeaderTitle}> 
          &nbsp;
          <a href='https://github.com/tomschweers' target='_blank'>
            <FontAwesomeIcon icon={['fab', 'github']} style={styles.headerIcons} />
          </a>
          &nbsp;
          &nbsp;
          <a href='https://stackoverflow.com/users/7891298/schws' target='_blank'>
            <FontAwesomeIcon icon={['fab', 'stack-overflow']} style={styles.headerIcons} />
          </a>
          &nbsp;
          &nbsp;
          <a href='https://www.linkedin.com/in/tomschweers/' target='_blank'>
            <FontAwesomeIcon icon={['fab', 'linkedin-in']} style={styles.headerIcons} />
          </a>
          &nbsp;
          &nbsp;
          <a href='mailto:trschweers@gmail.com'>
            <FontAwesomeIcon icon={'envelope-square'} style={styles.headerIcons} />
          </a>
          &nbsp;
        </span>
      </span>
    )

    const sidebarProps = {
      sidebar,
      docked: this.state.docked,
      sidebarClassName: 'custom-sidebar-class',
      contentId: 'custom-sidebar-content-id',
      open: this.state.open,
      touch: this.state.touch,
      shadow: this.state.shadow,
      pullRight: this.state.pullRight,
      touchHandleWidth: this.state.touchHandleWidth,
      dragToggleDistance: this.state.dragToggleDistance,
      transitions: this.state.transitions,
      onSetOpen: this.onSetOpen
    }

    return (
      <Sidebar {...sidebarProps}>
        <SideBarPanel title={contentHeader}>
          <div style={styles.content}>
            <MainRouter />
          </div>
        </SideBarPanel>
      </Sidebar>
    )
  }
}

export default App
