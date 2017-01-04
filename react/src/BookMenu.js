import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import './BookMenu.css';

class BookMenu extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu borderless="true" size="large">

        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}>
          Home
        </Menu.Item>

        <Menu.Item
          name='library'
          active={activeItem === 'library'}
          onClick={this.handleItemClick}>
          My Library
        </Menu.Item>

        <Menu.Item
          name='reviews'
          active={activeItem === 'reviews'}
          onClick={this.handleItemClick}>
          Trending
        </Menu.Item>

        <Menu.Menu position='right'>

          <Menu.Item>
            <Input className='search' icon='search' placeholder='Search...' />
          </Menu.Item>

          <Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick}>
            Sign Up
          </Menu.Item>

          <Menu.Item name='help' active={activeItem === 'help'} onClick={this.handleItemClick}>
            Help
          </Menu.Item>
       </Menu.Menu>
      </Menu>
    )
  }
}

export default BookMenu