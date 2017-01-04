import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class BookMenu extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>

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

        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          onClick={this.handleItemClick}>
          Other Stuff
        </Menu.Item>
      </Menu>
    )
  }
}

export default BookMenu