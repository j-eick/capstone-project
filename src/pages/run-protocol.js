import styled from 'styled-components';

import Layout from '../components/Layout';
import DataTable from '../components/Table';

const StyledTitleContainer = styled.div`
	display: flex;
	justify-content: center;
	background-color: #a0c0d6;
`;
const StyledH1 = styled.h1`
	margin: 13px 0;
	font-size: var(--font_size_header);
	font-weight: var(--font_weight_header);
`;

export default function RunProtocolPage() {
	return (
		<Layout>
			<StyledTitleContainer>
				<StyledH1>Protocol</StyledH1>
			</StyledTitleContainer>
			<DataTable />
		</Layout>
	);
}
