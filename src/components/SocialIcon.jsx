import React, {useState} from "react";
import {SocialIcon as ReactSocialIcon} from "react-social-icons";

function SocialIcon(props) {
	const [hovering, setHovering] = useState(false);
	const {colors, url} = props.data;

	const toggleHover = () => {
		setHovering((prevState) => (!prevState));
	};

	return (
		<ReactSocialIcon
			onMouseEnter={toggleHover}
			onMouseLeave={toggleHover}
			url={url}
			fgColor={hovering ? colors.hover.fg : colors.fg}
			bgColor={hovering ? colors.hover.bg : colors.bg}
			target="_blank"
		/>
	)
}

export default SocialIcon;