/**
 * Internal
 */
import Button from '../_utils/buttons.js'
import Icon from '../../static/media/svg/download-icon.svg'

/**
 * Component
 */
export default () => (
	<section data-component="csblocks/intro">

		<div className="the-content">
			<h2 className="-section-title">The best <b>WordPress plugin</b> to put your site under construction!</h2>
			<p>Coming Soon Blocks is a new and innovative way of building WordPress pages visually, all thanks to the new block editor and the various additions I made to it. No designer or developer skills required, the only technique you’ll need to master is clicking.</p>
			<p>With Coming Soon Blocks you can create a unique and stylish Coming Soon or Maintenance page for your visitors while you are developing your website in private.</p>
			<div className="cta-buttons">
				<Button href="#price" className="isDefault isLarge withBorder">
					<Icon/>
					<p>Download</p>
				</Button>
				<Button href="#" className="isPrimary isLarge"><p>Start 7 day Free Trial</p></Button>
			</div>
		</div>

		<div className="the-image">

		</div>

	</section>
)
