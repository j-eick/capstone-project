import Head from 'next/head';

import CollapsibleForm from '../components/CollapsibleForm';
import Layout from '../components/Layout';
import LineChart from '../components/RunChart';

export default function HomePage() {
	return (
		<Layout>
			<Head>
				<title key="title">Capstone Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			<LineChart />
			<CollapsibleForm />
		</Layout>
	);
}
