/**
 * Config
 */
const demos = [
	{
		thumb : '/static/media/plugin/csblocks/thumb-01.png',
	},
	{
		thumb : '/static/media/plugin/csblocks/thumb-02.png',
	},
	{
		thumb : '/static/media/plugin/csblocks/thumb-03.png',
	},
	{
		thumb : '/static/media/plugin/csblocks/thumb-04.png',
	},
	{
		thumb : '/static/media/plugin/csblocks/thumb-05.png',
	},
	{
		thumb : '/static/media/plugin/csblocks/thumb-06.png',
	},
	{
		thumb : '/static/media/plugin/csblocks/thumb-07.png',
	},
	{
		thumb : '/static/media/plugin/csblocks/thumb-08.png',
	},
	{
		thumb : '/static/media/plugin/csblocks/thumb-09.png',
	},
	{
		thumb : '/static/media/plugin/csblocks/thumb-10.png',
	},
	{
		thumb : '/static/media/plugin/csblocks/thumb-11.png',
	},
	{
		thumb : '/static/media/plugin/csblocks/thumb-12.png',
	}
]


/**
 * Thumb Component
 */
const Thumb = ({demo}) => (
	<button>
		<img src={demo.thumb}/>
	</button>
)


/**
 * Main Component
 */
export default () => (
	<section data-fullwidth="true" data-component="csblocks/demos">

		<div className="the-section-content">
			<h6>12 demos ready to use</h6>
			<h2>Our demos are customizable and easy to edit.</h2>
		</div>

		<div className="demos-list">
			{
				demos.map((thumb, i) => <Thumb key={i} demo={thumb}/> )
			}
		</div>

	</section>
)
