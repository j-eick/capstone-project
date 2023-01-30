import {useRouter} from 'next/router';

import CreateWorkout from '../components/CreateWorkout/form';
import StyledH1 from '../components/Header';
import StyledTitleDiv from '../components/Header';
import Layout from '../components/Layout';

export default function CreateWorkoutPage() {
	const router = useRouter();

	return (
		<Layout>
			<StyledTitleDiv>
				{router.asPath === `create-workout` ? <StyledH1>Create Workout</StyledH1> : null}
			</StyledTitleDiv>
			<CreateWorkout />
		</Layout>
	);
}
