import React from 'react';
import Grid from "@material-ui/core/Grid";
import { useOvermind } from "../Others/OvermindHelper";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { SavedDataManager } from "../Others/Globals";

const MyLinkItem = (props) => {
    const { item, index } = props;
    const { state, actions } = useOvermind()

    return (
        <Grid item item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Button
                // target="_blank" href={item?.link}
                onClick={() => {
                    if (state.isModeDelete) {
                        actions.deleteUrl(index)
                        SavedDataManager.saveUrls(state)
                    } else {
                        window.open(item?.link, '_self');
                        // window.open(item?.link, '_blank');
                    }
                }} style={{ width: '100%' }} color='primary'
                variant={state.isModeDelete ? 'contained' : 'outlined'}>{item?.title}</Button>
        </Grid>
    );
}

MyLinkItem.prototype = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
    }).isRequired
}

export default MyLinkItem;