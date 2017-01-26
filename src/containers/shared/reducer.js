// Estado inicial do App
const initialState = {
    loading: false,
    error: false,
};

function appReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default appReducer;
