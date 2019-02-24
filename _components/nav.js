/**
 * Dependencies
 */
import React from 'react'
import Link from 'next/link';
import { withRouter } from 'next/router';

/**
 * Component
 */
const Nav = ({router}) => {
	const { route } = router;

	return (
		<nav className="the-navigation">
			<Link href="/"><a>Home</a></Link>—
			<Link href="/plugins"><a>Plugins</a></Link>—
			<Link href="/themes"><a>Themes</a></Link>—
			<Link href="/get-in-touch"><a>Get in touch</a></Link>

			<hr/>
		</nav>
	);
}

export default withRouter( Nav );
