// import {useState} from 'react';
import StyledRow from './StyledRow';
import StyledRowItems from './StyledRowItems';

export default function DataTable() {
	return (
		<div className="table-container">
			<table>
				<thead>
					<StyledRow>
						<StyledRowItems>Distance</StyledRowItems>
						<StyledRowItems>Time</StyledRowItems>
						<StyledRowItems>Pace</StyledRowItems>
						<StyledRowItems>Borg</StyledRowItems>
						<StyledRowItems>Pain</StyledRowItems>
					</StyledRow>
				</thead>
			</table>
		</div>
	);
}
