import React, {useState} from "react";
import {SocialIcon as ReactSocialIcon} from "react-social-icons";

function SocialIcon({ data }) {
  const [hovering, setHovering] = useState(false)

  const toggleHover = () => {
    setHovering((prevState) => !prevState)
  }

  return (
    <ReactSocialIcon
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      url={data.url}
      fgColor={hovering ? data.colors.hover.fg : data.colors.fg}
      bgColor={hovering ? data.colors.hover.bg : data.colors.bg}
      target="_blank"
    />
  )
}

export default SocialIcon;
