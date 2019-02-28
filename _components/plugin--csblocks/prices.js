/**
 * Internal
 */
import Button from '../_utils/buttons.js'
import Icon from '../../static/media/svg/download-icon.svg'
import Popover from "../_utils/popover";

/**
 * Media
 */

/**
 * Main Component
 */
export default ( {downloadInfo} ) => (
	<section data-fullwidth="true"  data-component="csblocks/prices">

		<div className="the-section-content">
			<h6>Pricing</h6>
			<h2 className="-small-margin"><b>It’s Free forever.</b><br/>If you need more control there is always a Pro plan for you.</h2>
			<p>The most innovative coming soon plugin for the new WordPress block editor.</p>
		</div>

		<div className="tables">
			{
				/**
				 * Free Table
				 */
			}
			<div className="free-table">
				<article>
					<div className="title">
						<h1>Free</h1>
					</div>

					<ul className="the-list">
						<li>8 Templates</li>
						<li>
							Background Options
							<ul>
								<li>— Solid Color</li>
								<li>— Single Image</li>
							</ul>
						</li>
						<li>Show site to logged users</li>
						<li>Password protected</li>
						<li>Redirect Mode</li>
						<li>Cookie Notice</li>
						<li>
							Custom CSS and Javascript
							<ul>
								<li>— Google Analytics ID</li>
							</ul>
						</li>
						<li>( SEO ) Search Engines</li>
						<li>( SEO ) Temporarily pause search engines</li>
						<li>( SEO ) No-cache Headers</li>
						<li>Facebook and Twitter share details</li>
						<li>Favicon</li>
					</ul>

					<div className="extras">
						<p>SUPPORT AND SERVICES</p>
						<ul className="the-list">
							<li>Support through wp.org forum</li>
						</ul>
					</div>

					<div className="buttons">
						<Popover content={(
							<Button className="isDefault isLarge">
								<Icon/>
								<p>Download</p>
							</Button>
						)}>
							<a href={downloadInfo.direct} download>Direct Link</a>
							<a href={downloadInfo.site} target="_blank">Open WP.org</a>
						</Popover>
					</div>
				</article>
			</div>

			{
				/**
				 * Premium Table
				 */
			}
			<div className="premium-table">
				<div className="bulk-pricing">
					<button>1 Site</button>
					<button>3 Sites</button>
					<button>5 Sites</button>
					<button>Unlimited</button>
				</div>

				<article>
					<div className="title">
						<h1>
							Pro
							<label>Early Bird Price</label>
						</h1>
						<p className="price">
							$9.99<small>/year</small>
						</p>
					</div>

					<ul className="the-list">
						<li>8 Templates</li>
						<li>
							Background Options
							<ul>
								<li>— Solid Color</li>
								<li>— Single Image</li>
								<li>— Slideshow</li>
								<li>— Video</li>
							</ul>
						</li>
						<li>Show site to logged users</li>
						<li>Password protected</li>
						<li>Redirect Mode</li>
						<li>Cookie Notice</li>
						<li>
							Custom CSS and Javascript
							<ul>
								<li>— Google Analytics IDD</li>
								<li>— Facebook Tracking Pixel</li>
								<li>— 3rd Party Analytics Code</li>
								<li>— Free Javascript</li>
								<li>— Free CSS</li>
							</ul>
						</li>
						<li>( SEO ) Search Engines</li>
						<li>( SEO ) Temporarily pause search engines</li>
						<li>( SEO ) No-cache Headers</li>
						<li>Facebook and Twitter share details</li>
						<li>Favicon</li>
						<li>Custom Typography</li>
						<li>Schedule Publish</li>
					</ul>

					<div className="extras">
						<p>SUPPORT AND SERVICES</p>
						<ul className="the-list">
							<li>Support through wp.org forum</li>
							<li>24/7 Prioritized Email Support</li>
							<li>Access to beta programs and new features</li>
						</ul>
					</div>

					<div className="buttons">
						<Button className="isDefault isLarge"><p>Start Free Trial</p></Button>
						<Button className="isPrimary isLarge"><p>Buy Now</p></Button>
					</div>
				</article>
			</div>
		</div>

	</section>
)
