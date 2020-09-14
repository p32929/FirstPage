import React from 'react';
import Grid from "@material-ui/core/Grid";
import {useOvermind} from "../Others/OvermindHelper";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

const MyLinkItem = (props) => {
    const {item, index} = props;
    const {state, actions} = useOvermind()

    return (
        <Grid item xs={3}>
            <Button
                // target="_blank" href={item?.link}
                onClick={() => {
                    if (state.isModeDelete) {
                        actions.deleteUrl(index)
                    } else {
                        window.open(item?.link, '_blank');
                    }
                }} style={{width: '100%'}} color='primary'
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