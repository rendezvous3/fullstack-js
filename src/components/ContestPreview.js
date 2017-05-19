import React from 'react';

const ContestPreview = (contest) => (
	<div className="ContestPreview">
		<div className="category-name">
			{contest.categoryName}
		</div>
		<div className="contest-name">
			{contest.contestName}
		</div>
	</div>
)

export default ContestPreview;


// https://www.npmjs.com/package/node-sass-middleware
// npm i -S node-sass-middleware