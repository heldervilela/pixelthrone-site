/**
 * Internal
 */
import Popover from './popover.js'

/**
 * Component
 */
export default ( {downloadInfo} ) => {

	const DownloadButton = (
		<button className="button -download">
			<img src="/static/media/svg/wp-brand.svg"/>
			<p>Download</p>
		</button>
	);

	return (
		<div data-component="utils/menu-cta">
			<button className="button -buy">
				<p>Buy Now</p>
			</button>

			<Popover content={DownloadButton}>
				<a href={downloadInfo.direct} download>Direct Link</a>
				<a href={downloadInfo.site} target="_blank">Open WP.org</a>
			</Popover>

		</div>
	);
}
