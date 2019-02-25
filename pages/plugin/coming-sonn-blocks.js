/**
 * Dependencies
 */
import Head from 'next/head'
import {Fragment} from "react";

/**
 * Internal
 */
import MenuCTA from '../../_components/_utils/menu-cta.js'
import Hero from '../../_components/plugin--csblocks/hero.js'
import Intro from '../../_components/plugin--csblocks/intro.js'

/**
 * Styles
 */
import '../../static/styles/pages/plugin--coming-sonn-blocks.scss'

/**
 * Config
 */
const downloadInfo = {
	direct:'https://downloads.wordpress.org/plugin/coming-soon-blocks.1.3.0.zip',
	site:'https://wordpress.org/plugins/coming-soon-blocks'
};

/**
 * Component
 */
export default () => (
	<Fragment>
		<Head>
			<title>Coming Soon & Maintenance Page for WordPress Block Editor ( Gutenberg )</title>
		</Head>

		<MenuCTA downloadInfo={downloadInfo}/>
		<Hero/>
		<Intro/>
	</Fragment>
)
