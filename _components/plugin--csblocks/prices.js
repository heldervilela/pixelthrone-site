/**
 * Dependencies
 */
import React, { useState, useEffect } from 'react';
import AnimatedNumber from "animated-number-react";

/**
 * Internal
 */
import Button from '../_utils/buttons.js'
import Icon from '../../static/media/svg/download-icon.svg'
import IconGuarantee from '../../static/media/svg/csblocks/guarantee-icon.svg'

/**
 * Free Plan Component
 */
const FreePlan = ({downloadInfo}) => {

	const [buttonHover, setButtonHover] = useState("false");

	return (
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

				<div className="buttons"
				     data-hover={buttonHover}
				     onMouseEnter={() => setButtonHover('true')}
				     onMouseLeave={() => setButtonHover('false')}
				>

					<Button className="isDefault isLarge">
						<Icon/>
						<p>Download</p>
					</Button>

					<div className="sub-buttons">
						<a href={downloadInfo.direct} download><p>Direct Link</p></a>
						<a href={downloadInfo.site} target="_blank"><p>Open WP.org</p></a>
					</div>

				</div>
			</article>
		</div>
	)
}

/**
 * Premium Plan Component
 */
const PremiumPlan = ( {bulks, checkout} ) => {

	const [bulk, setBulk] = useState("1");
	const configure = {
		plugin_id:  checkout.plugin_id,
		plan_id:   checkout.plan_id,
		public_key: checkout.public_key,
	}

	// Buy Now
	const buyHandler = (event) => {
		event.preventDefault();

		const handler = FS.Checkout.configure(configure);
		handler.open({
			name     : checkout.title,
			licenses : bulk,
			success  : function (response) {
				// console.log( "Response: ", response.user );
			}
		});
	}

	// Try Trial
	const trialHandler = (event) => {
		event.preventDefault();

		const handler = FS.Checkout.configure(configure);
		handler.open({
			name     : checkout.title,
			licenses : 1,
			trial : true,
			success  : function (response) {
				// console.log( "Response: ", response.user );
			}
		});
	}


	return (
		<div className="premium-table">
			{
				// Bulk Prices
			}
			<div className="bulk-pricing" data-bulk={bulk}>
				<button onClick={() => setBulk('1')}>1 Site</button>
				<button onClick={() => setBulk('3')}>3 Sites</button>
				<button onClick={() => setBulk('5')}>5 Sites</button>
				<button onClick={() => setBulk('unlimited')}>Unlimited</button>
				<i></i>
			</div>

			{
				// Table
			}
			<article>
				<div className="title">
					<h1>
						Pro
						<label>Early Bird Price</label>
					</h1>
					<p className="price">
						$
						<AnimatedNumber value={bulks[bulk]} formatValue={ value => value.toFixed(2) } easing={'easeInOutExpo'} />
						<small>/year</small>
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
					<Button onClick={trialHandler} className="isDefault isLarge"><p>Start Free Trial</p></Button>
					<Button onClick={buyHandler} className="isPrimary isLarge"><p>Buy Now</p></Button>
				</div>
			</article>

			{
				//Guarantee
			}
			<div className="guarantee-disclaimer">
				<div>
					<IconGuarantee/>
				</div>
				<div>
					<p>
						<b>You are fully protected by our 100% Risk-Free Guarantee.</b>
						If you don’t like the plugin over the next seven days, we will happily refund 100% of your money. No questions asked.
					</p>
				</div>
			</div>


		</div>
	)
}


/**
 * Main Component
 */
export default ( {pluginDetails} ) => (
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
			<FreePlan downloadInfo={pluginDetails.downloadInfo}/>

			{
				/**
				 * Premium Table
				 */
			}
			<PremiumPlan bulks={pluginDetails.bulksOptions} checkout={pluginDetails.checkout}/>

		</div>

	</section>
)
