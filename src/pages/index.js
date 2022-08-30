import Head from 'next/head';

import Layout from '../components/Layout';
import LineChart from '../components/RunChart';
import DataTable from '../components/Table';

export default function HomePage() {
	return (
		<Layout>
			<Head>
				<title key="title">Capstone Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			<DataTable />
			<LineChart />
		</Layout>
	);
}
