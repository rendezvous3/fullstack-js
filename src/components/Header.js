import React from 'react';

const color = Math.random() > 0.5 ? 'cyan' : 'lightblue';

const Header = ({ message }) => {
	return (
		<h2 className="Header text-center" style={{ color:color }}>
			{message}
		</h2>
	)
}

Header.propTypes = {
	message: React.PropTypes.string.isRequired
}

export default Header;
