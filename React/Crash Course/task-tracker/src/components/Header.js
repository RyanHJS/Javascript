import PropTypes from 'prop-types'
import React from 'react'
import Button from './Button'

const Header = ({title, taskToggle, toggleShowAddTask}) => {

  return (
    <header className='header'>
        <h1>{title}</h1> 
        <Button color={toggleShowAddTask ? 'red' : 'green'} text={toggleShowAddTask ? 'Close' : 'Add'} onClick={taskToggle}/>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header