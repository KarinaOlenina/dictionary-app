import {STATS_ADD} from "../actions/types";


const initialState = {
    stats: [],
}

export const statsReducer = (state = initialState, action) => {
    console.log('commentReducer => ', action);

    switch (action.type) {

        case STATS_ADD:
            return {
                ...state,
                comments: [...state.result, action.result], /*!!!reducer никогда не должен изменять состояние напрямую!!!*/
            }
}
}
