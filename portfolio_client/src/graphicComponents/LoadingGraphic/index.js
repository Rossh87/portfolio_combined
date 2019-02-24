import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const LoadingGraphic = props => {
	return(
		<div className="c-loadingGraphic">
			<div className="c-loadingGraphic_animation">
				<div className="c-loadingGraphic_bubble bubble--1"></div>
				<div className="c-loadingGraphic_bubble bubble--2"></div>
				<div className="c-loadingGraphic_bubble bubble--3"></div>
				<div className="c-loadingGraphic_bubble bubble--4"></div>
				<div className="c-loadingGraphic_bubble bubble--5"></div>
				<div className="c-loadingGraphic_bubble bubble--6"></div>
			</div>
			<div className="c-loadingGraphic_text">
				Loading...
			</div>
		</div>
	)
}

export default LoadingGraphic;