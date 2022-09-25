import Head from 'next/head';

import StyledH1 from '../components/Header/StyledH1';
import StyledTitleDiv from '../components/Header/StyledTitleDiv';
import Layout from '../components/Layout';
import LineChart from '../components/RunChart';

export default function HomePage() {
	return (
		<Layout>
			<Head>
				<title key="title">Capstone Project</title>
				<meta key="description" name="description" content="This is my project" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
			</Head>
			<StyledTitleDiv>
				<StyledH1>Dashboard</StyledH1>
			</StyledTitleDiv>
			<LineChart />
		</Layout>
	);
}
