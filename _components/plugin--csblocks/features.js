/**
 * Internal
 */


/**
 * Thumb Component
 */
const Icon = ({demo}) => (
	<button>
		<img src={demo.thumb}/>
	</button>
)

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

				<div>
					<p>Backgrounds</p>
				</div>
				<div>
					<p>Typography</p>
				</div>
				<div>
					<p>Overlayer</p>
				</div>

			</div>
		</div>

	</section>
)
