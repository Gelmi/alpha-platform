import React from 'react';
import { Grid, TextField, Card, CardContent, Typography, Select, MenuItem, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
    card: {
      width: '90%',
      height: 'min-content',
      minWidth: '30vh',
      ['@media (min-width: 400px)']:{
        width: '80%'
      },
      ['@media (min-width: 800px)']:{
        width: '60%'
      },
      ['@media (min-width: 1000px)']:{
        width: '50%'
      },
      marginBottom: '3vh'
    },
    gridUserid: {
        width: '100%',
    },
    gridUseridInput: {
        width: '95%',
    },
    useridInput: {
        width: '100%',
    },
    useridTitle: {
        marginLeft: '3%',
        marginTop: '1vh',
    },
    passwordTitle: {
        marginLeft: '3%',
        marginTop: '1vh',
    },
    enterButtom: { 
        marginTop: '3vh',
        marginRight: '2%',
        backgroundColor: '#26a69a',
        '&:hover': {
            backgroundColor: '#00766c',
        },
        color: '#000'
    },
    enterButtomText: {
        textTransform: 'none',
    },
    textField: {
        width: "100%",
    },
    subjectSelect: {
        width: "100%",
    },
    loginTitle: {
        //marginTop: '1vh',
        marginLeft: '1vh',
    },
    confirmButtom: { 
        marginRight: '2%',
        backgroundColor: '#26a69a',
        '&:hover': {
            backgroundColor: '#00766c',
        },
        color: '#000',
    },
    confirmButtomText: {
        textTransform: 'none',
    },
    cancelButtom: { 
        marginTop: '3vh',
        marginLeft: '2%',
        color: '#f00',
        border: '1px solid rgba(255, 0, 0, 0.4)'
    },
    cancelButtomText: {
        textTransform: 'none',
    },
    cardInfoText: {
        marginLeft: '1vh'
    },
    mentorIdInput: {
        width: '60%',
        marginLeft: '1vh',
        ['@media (max-width: 500px)']:{
            width: '100%',
            marginBottom: '2vh',
            marginLeft: '0vh'
        },
    },
    actionGrid: {
        marginTop: '3vh',
        justifyContent: 'space-between',
        ['@media (max-width: 500px)']:{
            justifyContent: 'center',
        },
    }
  });


export default function MentoringCards() {
    const classes = styles();

    const mentories = 
        [
            {
                id: 1,
                name: 'Guilherme Gelmi',
                sub: 'matematica',
                datetime: '24/01/2020 00:00'
            },
            {
                id: 2,
                name: 'Guilherme Gelmi',
                sub: 'portugues',
                datetime: '12/01/2008 00:00'
            }
        ]
    ;

    const MentoryCard = mentories.map((cardm) => 
            <Card key={cardm.id} className={classes.card}>
                <CardContent>
                    <form className="loginForm" noValidate autoComplete="off">
                        <Grid 
                            container 
                            spacing={3}
                            direction="column"
                            justify="center"
                            alignItems="center"
                            className="grid"
                        >
                            <Grid className={classes.gridUserid} item>
                                <Typography variant="h6" className={classes.loginTitle}>
                                    Marque sua Mentoria:
                                </Typography>      
                                <Typography variant="subtitle2" className={classes.useridTitle}>
                                    Seu nome:
                                </Typography>
                                <Grid
                                    container 
                                    justify="center"
                                    alignItems="center"
                                >
                                    <Grid className={classes.gridUseridInput} item>                     
                                        <Typography className={classes.cardInfoText} variant="h6">Guilherme Gelmi</Typography>
                                    </Grid>
                                </Grid>   
                                <Typography variant="subtitle2" className={classes.passwordTitle}>
                                    Matéria:
                                </Typography>
                                <Grid
                                    container 
                                    justify="center"
                                    alignItems="center"
                                >
                                    <Grid className={classes.gridUseridInput} item>                     
                                        <Typography className={classes.cardInfoText} variant="h6">Matemática</Typography>
                                    </Grid>
                                </Grid>   
                                <Typography variant="subtitle2" className={classes.passwordTitle}>
                                    Horário e Data: 
                                </Typography>
                                <Grid
                                    container 
                                    justify="center"
                                    alignItems="center"
                                >
                                    <Grid className={classes.gridUseridInput} item>                     
                                        <Typography className={classes.cardInfoText} variant="h6">24/01/2020 00:00</Typography>
                                    </Grid>
                                </Grid>                
                            </Grid>
                        </Grid>
                    </form>
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                        className={classes.actionGrid}
                    >
                        <TextField className={classes.mentorIdInput} id="outlined-basic" />
                        <Button classes={{root: classes.confirmButtom, label: classes.confirmButtomText }} variant="contained">
                            Confirmar
                        </Button>
                    </Grid>
                </CardContent>
            </Card>
        )
    ;

    return(
        MentoryCard
    )
}