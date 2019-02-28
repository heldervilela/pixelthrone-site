/**
 * Dependencies
 */
import Head from 'next/head'
import {Fragment} from "react";

/**
 * Internal
 */
import MenuCTA from '../../_components/_utils/menu-cta'
import Hero from '../../_components/plugin--csblocks/hero'
import Intro from '../../_components/plugin--csblocks/intro'
import Demos from '../../_components/plugin--csblocks/demos'
import HowItWorks from '../../_components/plugin--csblocks/how-it-works'
import Features from '../../_components/plugin--csblocks/features'
import Prices from '../../_components/plugin--csblocks/prices'
import Faqs from '../../_components/faqs'

/**
 * Styles
 */
import '../../static/styles/pages/plugin--coming-sonn-blocks.scss'

/**
 * Config
 */
const pluginDetails = {
	downloadInfo: {
		direct: 'https://downloads.wordpress.org/plugin/coming-soon-blocks.1.3.0.zip',
		site: 'https://wordpress.org/plugins/coming-soon-blocks'
	},
	bulksOptions: {
		'1': '9.99',
		'3': '19.99',
		'5': '39.99',
		'unlimited': '199.99'
	},
	checkout: {
		title: 'Coming Soon & Maintenance Page for WordPress',
		plugin_id: '2893',
		plan_id: '5253',
		public_key: 'pk_b43d7d97999bfe621ba14d6a8647c',
	},
	faqs: [
		{
			title: '...',
			text: '...',
		},
		{
			title: 'What is your refund policy?',
			text: '...',
		},
		{
			title: 'Have more questions?',
			text: 'We have answers! Click here to drop us a line and a member of our team will get back to you as soon as humanly possible.',
		}
	]
}

/**
 * Component
 */
export default () => (
	<Fragment>
		<Head>
			<title>Coming Soon & Maintenance Page for WordPress Block Editor ( Gutenberg )</title>
			<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
			<script src="https://checkout.freemius.com/checkout.min.js"></script>
		</Head>

		<MenuCTA pluginDetails={pluginDetails}/>
		<Hero/>
		<Intro/>
		<Demos/>
		<HowItWorks/>
		<Features/>
		<Prices pluginDetails={pluginDetails}/>
		<Faqs faqs={pluginDetails.faqs}/>
	</Fragment>
)
