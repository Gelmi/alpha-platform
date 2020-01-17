import React from 'react';
import Header from './../../components/header'
import MentoringCardRequest from './../../components/mentoringCardRequest'
import { makeStyles } from '@material-ui/core/styles';
import MentoringCards from './../../components/mentoringCards';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const styles = makeStyles({
    app: {
        minHeight: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.08)',
        minWidth: '34vh'
    },
    cardDiv: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        display: 'flex',
        paddingTop: '4vh'
    },
    addFab: {
        position: 'fixed',
        bottom: 0,
        right: 0,
        marginBottom: '2vh',
        marginRight: '2vh'
    }
});

const index = () => {
    const classes = styles();

    return (
        <div className={classes.app}>
            <Header/>
            <div className={classes.cardDiv}>
                <MentoringCardRequest/>
                <MentoringCards/>
                <Fab className={classes.addFab} color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </div>    
        </div>
    )
}

export default index;
