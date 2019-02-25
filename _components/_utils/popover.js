import { PureComponent } from 'react';

export default class Popover extends PureComponent {
	state = {
		show: false,
	};

	onMouseEnter = () => {
		this.setState({
			show: true,
		});
	};

	onMouseLeave = () => {
		this.setState({ show: false });
	};

	handleClickOutside = ev => {
		if (
			this.state.show &&
			this.containerEl &&
			(this.containerEl === ev.target || this.containerEl.contains(ev.target))
		) {
			this.onMouseLeave();
		}
	};

	componentDidMount() {
		window.addEventListener('mousedown', this.handleClickOutside);
		window.addEventListener('touchstart', this.handleClickOutside);
	}

	componentWillUnmount() {
		window.removeEventListener('mousedown', this.handleClickOutside);
		window.removeEventListener('touchstart', this.handleClickOutside);
	}

	render() {
		const { content, children } = this.props;
		const { show } = this.state;

		return (
			<div
				data-component="utils/popover"
				className="container"
				ref={el => (this.containerEl = el)}
				onTouchStart={this.onMouseEnter}
				onMouseEnter={this.onMouseEnter}
				onMouseLeave={this.onMouseLeave}
			>
				{content}
				<div className='popover-content' data-show={ show ? 'true' : 'false' }>
					{children}
				</div>
			</div>
		);
	}
}
