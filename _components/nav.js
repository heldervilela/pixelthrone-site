/**
 * Dependencies
 */
import Link from 'next/link';
import { withRouter } from 'next/router';

/**
 * Internal
 */
import SVG_Brand from '../static/media/svg/main-brand.svg'

/**
 * Component
 */
const Nav = ({router}) => {
	const { route } = router;

	return (
		<nav className="the-navigation">
			<div className="the-content">
				<Link href="/" prefetch>
					<a className="the-brand"><SVG_Brand/></a>
				</Link>
				<div className="the-menu">
					<Link href="/themes" prefetch><a>Themes</a></Link>
					<Link href="/plugins" prefetch><a>Plugins</a></Link>
					<Link href="/support" prefetch><a>Support</a></Link>
				</div>
			</div>
		</nav>
	);
}

export default withRouter( Nav );
