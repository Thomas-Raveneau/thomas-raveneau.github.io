
const initialAppState = {
    currentSection: '',
};

const appSlice = (state = initialAppState, action) => {

    switch (action.type) {
        case 'app/setCurrentSection': {
            const newSection = action.newSection;

            console.log('HERE', action.newSection)
            return {
                ...state,
                currentSection: newSection
            };
        }
        default:
            return state;
    }
};

export default appSlice;