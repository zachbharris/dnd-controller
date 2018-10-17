import React, { Component } from 'react';

class Content extends Component {
  constructor(props) {
    super(props);
    this.dropdown = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
  }

  handleOutsideClick = e => {
    const { toggleDropdown } = this.props;
    if (!this.dropdown.current.contains(e.target)) {
      toggleDropdown();
    }
  }

  render() {
    const { children, height, width } = this.props;

    return (
      <div
        className="dropdown"
        ref={this.dropdown}
        style={{
          top: height,
          minWidth: width,
        }}
      >
        {children}
      </div>
    );
  }
}

const Dropdown = ({ children, isOpen, height, width, toggleDropdown }) => {
  const heightWithPadding = height + 16;
  if (isOpen) {
    return (
      <Content
        isOpen={isOpen}
        toggleDropdown={toggleDropdown}
        height={heightWithPadding}
        width={width}
      >
        {children}
      </Content>
    );
  }
  return null;
}

export default Dropdown;
