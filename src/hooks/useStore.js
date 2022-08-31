import create from 'zustand';

const useStore = create(set => {
	return {
		runData: [
			{
				id: 1,
				day: '12/08',
				distance: 3.4,
				time: '15:23',
				pace: '05:34',
				borg: 7,
				pain: 1,
			},
			{
				id: 2,
				day: '13/08',
				distance: 8.04,
				time: '38:09',
				pace: '06:12',
				borg: 8,
				pain: 1,
			},
			{
				id: 3,
				day: '14/08',
				distance: 6.45,
				time: '32:30',
				pace: '05:55',
				borg: 8,
				pain: 2,
			},
			{
				id: 4,
				day: '14/08',
				distance: 4.45,
				time: '23:30',
				pace: '05:03',
				borg: 7,
				pain: 0,
			},
		],
		addRunData: name => {
			set(state => {
				return {runData: [name, ...state.runData]};
			});
		},
	};
});

export default useStore;
