// import dynamic from 'next/dynamic';
import Head from 'next/head';

import Layout from '../components/Layout';
import LineChart from '../components/RunChart';
import DataTable from '../components/Table';

export default function HomePage() {
	// const DynamicWrapper = dynamic(() => import('../components/HydrationWrapper'), {ssr: false});
	return (
		<Layout>
			<Head>
				<title key="title">Capstone Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			{/* <DynamicWrapper> */}
			<DataTable />
			<LineChart />
			{/* </DynamicWrapper> */}
		</Layout>
	);
}
