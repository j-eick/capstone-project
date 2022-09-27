import CreateWorkout from '../components/CreateWorkout/index';
import StyledH1 from '../components/Header/StyledH1';
import StyledTitleContainer from '../components/Header/StyledTitleContainer';
import Layout from '../components/Layout';

export default function CreateWorkoutPage() {
	return (
		<Layout>
			<StyledTitleContainer>
				<StyledH1>Create Workout</StyledH1>
			</StyledTitleContainer>
			<CreateWorkout />
		</Layout>
	);
}
