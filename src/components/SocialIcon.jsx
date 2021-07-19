import { SocialIcon } from "react-social-icons";
import React from "react";

class SocialIconWrapper extends React.Component {
  state = {
    isHovered: false,
  };
  render() {
    const { colors, url } = this.props.data;
    return (
      <SocialIcon
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
        url={url}
        fgColor={this.state.isHovered ? colors.hover.fg : colors.fg}
        bgColor={this.state.isHovered ? colors.hover.bg : colors.bg}
        target="_blank"
      />
    );
  }

  toggleHover = () => {
    this.setState((prevState) => ({ isHovered: !prevState.isHovered }));
  };
}

export default SocialIconWrapper;
