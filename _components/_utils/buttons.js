/**
 * Dependencies
 */
import Link from 'next/link';

/**
 * Button
 */
export default function Button( {children, href, as, prefetch, ...props } ) {

	if( href ) {

		return (
			<Link href={href} as={as} prefetch={prefetch}>
				<a data-component="utils/button" role="button" {...props}>
					{children}
				</a>
			</Link>
		);

	} else {

		return (
			<button data-component="utils/button" role="button" {...props}>
				{children}
			</button>
		);

	}

}

