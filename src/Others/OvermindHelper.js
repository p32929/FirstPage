// npm install overmind overmind-react
// yarn add overmind overmind-react

import {createOvermind} from "overmind";
import {createHook} from "overmind-react";

export const useOvermind = createHook();
export const overmind = createOvermind({
    state: {
        urls: [],
        isShowingDialog: false,
        isModeDelete: false,
    },
    actions: {
        setUrls({state}, urls) {
            state.urls = urls
        },
        addUrl({state}, url) {
            state.urls = [
                ...state.urls,
                url
            ]
        },
        deleteUrl({state}, index) {
            state.urls.splice(index, 1)
            if (state.urls.length == 0) {
                state.isModeDelete = false
            }
        },
        showDialog({state}, b) {
            state.isShowingDialog = b
        },
        setDeleteMode({state}, b) {
            state.isModeDelete = b
        },
    }
});
