import React, {useEffect} from 'react';
import Grid from "@material-ui/core/Grid";
import {useOvermind} from "../Others/OvermindHelper";
import {Constants, Globals} from "../Others/Globals";
import MyLinkItem from "./MyLinkItem";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";

const FirstPage = (props) => {
    const {state, actions} = useOvermind()
    useEffect(() => {
        var jsonStr = localStorage.getItem(Constants.local_json);
        console.log(jsonStr)
        if (jsonStr) {
            actions.setUrls(JSON.parse(jsonStr))
        }
    }, [])

    return (
        <Grid style={Globals.getParentHeightWidth()} container direction='column' alignContent='center'
              alignItems='center' justify='center'>
            <Grid style={Globals.getContainerHeightWidth(90)} container direction='row' spacing={1} justify='center'
                  alignContent='center' alignItems='center'>
                {
                    state.urls?.length > 0 && state.urls.map((item, index) => {
                        return <MyLinkItem index={index} item={item}/>
                    })
                }
            </Grid>

            <Grid>
                <Button onClick={() => {
                    actions.showDialog(true)
                }} style={{width: 200, margin: 8}} variant='outlined' color='primary'>ADD</Button>

                <Button onClick={() => {
                    actions.setDeleteMode(!state.isModeDelete)
                }} style={{width: 200, margin: 8}} variant={state.isModeDelete ? 'contained' : 'outlined'}
                        color='primary'>Delete</Button>
            </Grid>

            <Dialog onClose={() => {
                actions.showDialog(false)
            }} open={state.isShowingDialog}>
                <DialogTitle>Add URL</DialogTitle>
                <DialogContent>
                    <Grid container direction='column'>
                        <TextField id='title_tf' style={{marginTop: 8}} placeholder='Title'/>
                        <TextField id='url_tf' style={{marginTop: 8}} placeholder='Link/URL'/>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        actions.showDialog(false)
                    }} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => {
                        var title = document.getElementById("title_tf").value.toString()
                        var link = document.getElementById("url_tf").value.toString()
                        if (!link.startsWith("http")) {
                            link = "http://" + link
                        }

                        actions.addUrl({
                            title: title,
                            link: link,
                        })

                        localStorage.setItem(Constants.local_json, JSON.stringify(state.urls))

                        actions.showDialog(false)
                    }} color="primary" autoFocus>
                        Add
                    </Button>
                </DialogActions>
            </Dialog>

        </Grid>
    );
}

export default FirstPage;