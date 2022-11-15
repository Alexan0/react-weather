import React from 'react';

import cloud from '../assets/img/cloud.png';

const Loading = () => {
	return (
		<div className="cloud">
			<div className="cloud__body">
				<div className="cloud__content">
					<img src={cloud} alt="cloud" className="cloud1" />
					<img src={cloud} alt="cloud" className="cloud2" />
					<img src={cloud} alt="cloud" className="cloud3" />
					<img src={cloud} alt="cloud" className="cloud4" />
				</div>
			</div>
		</div>
	)
}

export default Loading;