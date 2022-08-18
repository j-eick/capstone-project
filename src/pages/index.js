import Head from 'next/head';

import Layout from '../components/Layout';
import DataTable from '../components/Table';

export default function HomePage() {
	return (
		<Layout>
			<Head>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			<DataTable />
		</Layout>
	);
}
