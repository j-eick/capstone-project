import Head from 'next/head';
import styled from 'styled-components';

import Layout from '../components/Layout';
import LineChart from '../components/RunChart';

const ArtificialSpacer = styled.div`
	padding: 5px 5px;
	background-color: white;
	color: white;
`;

export default function HomePage() {
	return (
		<Layout>
			<Head>
				<title key="title">Capstone Project</title>
				<meta key="description" name="description" content="This is my project" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
			</Head>
			<ArtificialSpacer>spacer</ArtificialSpacer>
			<LineChart />
		</Layout>
	);
}
