import StyledH1 from '../components/Header.jsx';
import StyledTitleDiv from '../components/Header.jsx';
import Layout from '../components/Layout';
import DataTable from '../components/Table';

export default function RunProtocolPage() {
	return (
		<Layout>
			<StyledTitleDiv>
				<StyledH1>Protocol</StyledH1>
			</StyledTitleDiv>
			<DataTable />
		</Layout>
	);
}
