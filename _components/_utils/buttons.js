/**
 * Internal
 */
import Link from 'next/link';

/**
 * Button
 */
export default function Button( {title, href, as, prefetch} ) {

	if( href ) {

		return (
			<Link href={href} as={as} prefetch={prefetch}>
				<a data-component="csblocks/link">
					<p>{title}</p>
				</a>
			</Link>
		);

	} else {

		return (
			<button data-component="csblocks/button"
			        {...props}
			>
				<p>{title}</p>
			</button>
		);

	}

}

