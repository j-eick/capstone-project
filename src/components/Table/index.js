// import {useState} from 'react';
import {nanoid} from 'nanoid';
import {useState} from 'react';

import mockData from '../lib/mock-data.json';
import RunDataForm from '../RunDataForm';

import StyledTableContainer from './StyledTableContainer';
import StyledTRBody from './StyledTRBody';
import StyledTRHead from './StyledTRHead';

export default function DataTable() {
	const [runData, setRunData] = useState(mockData);
	console.log(runData);

	function addRunningData(data) {
		console.log(data);
		setRunData([...runData, {id: nanoid(), ...data}]);
	}

	return (
		<>
			<StyledTableContainer>
				<thead>
					<StyledTRHead>
						<th>Distance</th>
						<th>Time</th>
						<th>Pace</th>
						<th>Borg</th>
						<th>Pain</th>
					</StyledTRHead>
				</thead>
				<tbody>
					{runData.map(data => (
						<StyledTRBody key={data.id}>
							<td>{data.distance}</td>
							<td>{data.time}</td>
							<td>{data.pace}</td>
							<td>{data.borg}</td>
							<td>{data.pain}</td>
						</StyledTRBody>
					))}
				</tbody>
			</StyledTableContainer>
			<RunDataForm onAddRunningData={addRunningData} />
		</>
	);
}
