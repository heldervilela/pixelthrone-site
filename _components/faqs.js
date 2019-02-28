/**
 * Dependencies
 */
import React, { useState, useEffect } from 'react';

/**
 * Media
 */
import IconArrow from '../static/media/svg/arrow-down.svg'

/**
 * Faq Component
 */
const Faq = ({demo}) => {

	const [open, setState] = useState("false");

	return (
		<article data-open={open}>
			<button onClick={()=> setState( open === 'false' ? 'true' : 'false')}>{ demo.title } <i></i></button>
			<div>
				<p>{demo.text}</p>
			</div>
		</article>
	)
}

/**
 * Main Component
 */
export default ( {faqs} ) => (
	<section data-component="faqs">

		<div className="the-content">
			<h6>FAQs</h6>
			<h2>Frequently asked questions, answered.</h2>
		</div>

		<div className="faqs">
			{
				faqs.map((faq, i) => <Faq key={i} demo={faq}/> )
			}
		</div>

	</section>
)
