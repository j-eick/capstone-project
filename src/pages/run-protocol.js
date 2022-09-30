import StyledH1 from '../components/Header/StyledH1';
import StyledTitleDiv from '../components/Header/StyledTitleDiv';
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
