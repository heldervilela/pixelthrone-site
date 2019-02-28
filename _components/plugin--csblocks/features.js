/**
 * Internal
 */
import Popover from '../_utils/popover.js'

/**
 * Media
 */
import Icon_Backgrounds from '../../static/media/svg/csblocks/feature--backgrounds.svg'
import Icon_Typography from '../../static/media/svg/csblocks/feature--typography.svg'
import Icon_Overlayer from '../../static/media/svg/csblocks/feature--overlayer.svg'
import Icon_CustomBrand from '../../static/media/svg/csblocks/feature--custom-brand.svg'
import Icon_MobileReady from '../../static/media/svg/csblocks/feature--mobile-ready.svg'

import Icon_PasswordProtected from '../../static/media/svg/csblocks/feature--password-protected.svg'
import Icon_SchedulePublish from '../../static/media/svg/csblocks/feature--schedule-publish.svg'
import Icon_RedirectMode from '../../static/media/svg/csblocks/feature--redirect-mode.svg'
import Icon_CookieNotice from '../../static/media/svg/csblocks/feature--cookie-notice.svg'
import Icon_LoggedInUsers from '../../static/media/svg/csblocks/feature--logged-in-users.svg'
import Icon_CssJs from '../../static/media/svg/csblocks/feature--css-js.svg'
import Icon_Favicon from '../../static/media/svg/csblocks/feature--favicon.svg'

/**
 * Main Component
 */
export default () => (
	<section data-component="csblocks/features">

		<div className="the-section-content">
			<h6>Key Features</h6>
			<h2 className="-small-margin">Discover Our Features.</h2>
			<p>Thanks to the new block editor and the various additions I made to it. No designer or developer skills required.</p>
		</div>

		<div className="features-list">
			<div>
				<h3>Block <br/>Options</h3>
			</div>

			<div>

				<Popover content={(
					<div className="featured-info">
						<Icon_Backgrounds/>
						<p>Backgrounds</p>
					</div>
				)}>
					<p>Backgrounds is one of the most important areas in a website, so we’ve added every possible option so that you can create the biggest impact.</p>
					<p>The background options are:</p>
					<ul>
						<li>Solid Color</li>
						<li>Single Image</li>
						<li>Slideshow (<em>pro</em>)</li>
						<li>Video (<em>pro</em>)</li>
					</ul>
				</Popover>
				<Popover content={(
					<div className="featured-info">
						<Icon_Typography/>
						<p>Typography</p>
					</div>
				)}>
					<p>Here we do not leave anything to chance and so we created a super advanced editor where you can choose between the top 50 fonts in Google Fonts. You can also choose the text color, font size, weight, line height and letter spacing.</p>
					<p>All this for desktop and mobile.</p>
				</Popover>
				<Popover content={(
					<div className="featured-info">
						<Icon_Overlayer/>
						<p>Overlayer</p>
					</div>
				)}>
					<p>Add a layer with solid color and define the opacity in order to improve the reading of the text over the background.</p>
				</Popover>
				<div className="featured-info">
					<Icon_CustomBrand/>
					<p>Custom Brand</p>
				</div>
				<Popover content={(
					<div className="featured-info">
						<Icon_MobileReady/>
						<p>Mobile Ready</p>
					</div>
				)}>
					<p>A unique mobile experience, so your content will look great on every device, every time.</p>
				</Popover>

			</div>
		</div>

		<div className="features-list">
			<div>
				<h3>Page <br/>Settings</h3>
			</div>

			<div>

				<div>
					<Popover content={(
						<div className="featured-info">
							<Icon_PasswordProtected/>
							<p>Password Protected</p>
						</div>
					)}>
						<p>Add this option to view the website using a secret password. Ideal for accessing the website without sharing the admin login.</p>
					</Popover>
				</div>
				<div>
					<Popover content={(
						<div className="featured-info">
							<Icon_SchedulePublish/>
							<p>Schedule Publish</p>
						</div>
					)}>
						<p>Schedule your site to be published at a particular time and date, with this option you just have to tell the day and time for the coming Soon to be offline and your site visible to everyone.</p>
					</Popover>
				</div>
				<div>
					<Popover content={(
						<div className="featured-info">
							<Icon_RedirectMode/>
							<p>Redirect Mode</p>
						</div>
					)}>
						<p>If you change your domain and you want to forward the users to the new url then this is the option you are looking for.</p>
					</Popover>
				</div>
				<div>
					<Popover content={(
						<div className="featured-info">
							<Icon_CookieNotice/>
							<p>Cookie Notice</p>
						</div>
					)}>
						<p>A simple but elegant notice which notifies visitors that the website uses cookies.</p>
					</Popover>
				</div>
				<div>
					<Popover content={(
						<div className="featured-info">
							<Icon_LoggedInUsers/>
							<p>Show normal website to logged in users</p>
						</div>
					)}>
						<p>With this option the logged in users will view the website normally while visitors see the maintenance / coming soon page.</p>
					</Popover>
				</div>
				<div>
					<Popover content={(
						<div className="featured-info">
							<Icon_CssJs/>
							<p>Custom Css & Javascript</p>
						</div>
					)}>
						<p>This option is perfect for adding your analytics or facebook tracking code. If you want to do an extra customization on the layout then this CSS option is what you are looking for.</p>
						<p>The available options are:</p>
						<ul>
							<li>Google Analytics Tracking ID</li>
							<li>Facebook Tracking Pixel (pro)</li>
							<li>3rd Party Analytics Code (pro)</li>
							<li>Free Javascript (<em>pro</em>)</li>
							<li>Free CSS  (<em>pro</em>)</li>
						</ul>
					</Popover>
				</div>
				<div>
					<Popover content={(
						<div className="featured-info">
							<Icon_Favicon/>
							<p>Favicon</p>
						</div>
					)}>
						<p>Icon that appears in the browser tab.</p>
					</Popover>
				</div>

			</div>
		</div>

		<div className="features-list">
			<div>
				<h3>Block <br/>Seo</h3>
			</div>

			<div>

				<div>
					<Popover content={(
						<div className="featured-info">
							<Icon_Backgrounds/>
							<p>Search Engines</p>
						</div>
					)}>
						<p>SEO is the most important options for a page and so we’ve created all the options you’ll need to get the best ranking possible.</p>
						<p>The available options are:</p>
						<ul>
							<li>Page Title</li>
							<li>Description meta tag</li>
							<li>Keywords meta tag</li>
							<li>Author meta tag</li>
							<li>Copyright meta tag</li>
						</ul>
					</Popover>
				</div>
				<div>
					<Popover content={(
						<div className="featured-info">
							<Icon_Typography/>
							<p>Facebook & Twitter Share Details</p>
						</div>
					)}>
						<p>A set of options to configure how your page looks when shared on social networks.</p>
					</Popover>
				</div>
				<div>
					<Popover content={(
						<div className="featured-info">
							<Icon_Overlayer/>
							<p>Send No-cache Headers</p>
						</div>
					)}>
						<p>If you don’t want the coming soon page preview to be cached by Facebook and other social media then enable this option. Once you switch to the normal site social media preview (visible when sharing the site link) will immediately be refreshed.</p>
					</Popover>
				</div>
				<div>
					<Popover content={(
						<div className="featured-info">
							<Icon_CustomBrand/>
							<p>Temporarily Pause Search Engines</p>
						</div>
					)}>
						<p>If your site is already indexed and you’re just taking it down for a while, then enable this option. It temporarily discourages search engines from crawling the site telling them it’s under construction by sending a 503 Service Unavailable response.</p>
					</Popover>
				</div>

			</div>
		</div>

	</section>
)
