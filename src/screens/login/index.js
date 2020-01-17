import React from 'react'
import { Grid, TextField, Card, CardContent, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

const styles = makeStyles({
    app: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.08)',
    },
    card: {
      width: '40%',
      height: 'min-content',
      minWidth: '30vh'
    },
    loginTitle: {
        marginBottom: '2vh',
        marginLeft: '3%',
        marginTop: '.25vh'
    },
    gridUserid: {
        width: '100%',
    },
    gridUseridInput: {
        width: '85%',
    },
    useridInput: {
        width: '100%',
    },
    useridTitle: {
        marginLeft: '6%',
        marginBottom: '1vh'
    },
    passwordTitle: {
        marginLeft: '6%',
        marginTop: '2vh',
        marginBottom: '1vh'
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
    }
  });

const index = (props) => {
    const classes = styles();

    return (
        <div className={classes.app}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" className={classes.loginTitle}>
                    Login:
                    </Typography>
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
                                <Typography variant="subtitle1" className={classes.useridTitle}>
                                    Número de Matricula:
                                </Typography>
                                <Grid
                                    container 
                                    justify="center"
                                    alignItems="center"
                                >
                                    <Grid className={classes.gridUseridInput} item>                     
                                        <TextField className={classes.useridInput} id="outlined-basic" label="Matricula" variant="outlined" />
                                    </Grid>
                                </Grid>   
                                <Typography variant="subtitle1" className={classes.passwordTitle}>
                                    Senha:
                                </Typography>
                                <Grid
                                    container 
                                    justify="center"
                                    alignItems="center"
                                >
                                    <Grid className={classes.gridUseridInput} item>                     
                                        <TextField className={classes.useridInput} id="outlined-basic" label="Senha" variant="outlined" />
                                    </Grid>
                                </Grid>                
                            </Grid>
                        </Grid>
                    </form>
                    <Grid
                        container
                        direction="row"
                        justify="flex-end"
                    >
                        <Button onClick={() => {props.history.push('/mentoring')}} classes={{root: classes.enterButtom, label: classes.enterButtomText }} variant="contained">
                            Entrar
                        </Button>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )
}

export default withRouter(index);

