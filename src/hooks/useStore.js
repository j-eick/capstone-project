import {nanoid} from 'nanoid';
import create from 'zustand';

const useStore = create(set => {
	return {
		runData: [],
		addRunData: name => {
			set(state => {
				return {runData: [...state.runData, {name, id: nanoid()}]};
			});
		},
	};
});

export default useStore;
