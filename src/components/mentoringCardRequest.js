import React, {Fragment} from 'react';
import { Grid, TextField, Card, CardContent, Typography, Select, MenuItem, Button, Snackbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from "react-redux";
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const styles = makeStyles({
    card: {
      width: '90%',
      height: 'min-content',
      minWidth: '30vh',
      marginBottom: '4vh',
      ['@media (min-width: 400px)']:{
        width: '80%'
      },
      ['@media (min-width: 800px)']:{
        width: '60%'
      },
      ['@media (min-width: 1000px)']:{
        width: '50%'
      },
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
        marginTop: '3vh',
        marginRight: '2%',
        backgroundColor: '#26a69a',
        '&:hover': {
            backgroundColor: '#00766c',
        },
        color: '#000'
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
  });


export default function MentoringCards() {
    const classes = styles();
    const dispatch = useDispatch();

    const [name, setName] = React.useState('');
    const [sub, setSub] = React.useState('');
    const [datetime, setDatetime] = React.useState('');
    const [open, setOpen] = React.useState(false);
    
    const handleRequestError = () => {
        setOpen(true);
    };

    const handleErrorClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };

    const handleChangeSub = event => {
        setSub(event.target.value);
    };

    const handleChangeName = event => {
        setName(event.target.value);
    };

    const handleChangeDatetime = event => {
        setDatetime(event.target.value);
    };

    function addMentories(name, sub, datetime) {
        if(name != '' && sub != '' && datetime != '') {    
            dispatch({ type: "ADD_MENTORIES", name: name, sub: sub, datetime: datetime });
            setName('');
            setSub('');
            setDatetime('');
        } else {
            setOpen(true);
        }
    }

    return(
        <Fragment>
            <Card className={classes.card}>
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
                                        <TextField onChange={handleChangeName} value={name} className={classes.useridInput} id="outlined-basic" />
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
                                        <Select
                                            value={sub}
                                            onChange={handleChangeSub}
                                            className={classes.subjectSelect}
                                        >
                                            <MenuItem value={'matematica'}>Matemática</MenuItem>
                                            <MenuItem value={'fisica'}>Física</MenuItem>
                                            <MenuItem value={'quimica'}>Quimica</MenuItem>
                                            <MenuItem value={'biologia'}>Biologia</MenuItem>
                                            <MenuItem value={'redacao'}>Redação</MenuItem>
                                            <MenuItem value={'literatura'}>Literatura</MenuItem>
                                            <MenuItem value={'historia'}>História</MenuItem>
                                            <MenuItem value={'geografia'}>Geografia</MenuItem>
                                            <MenuItem value={'filosofia'}>Filosofia</MenuItem>
                                            <MenuItem value={'sociologia'}>Sociologia</MenuItem>
                                            <MenuItem value={'portugues'}>Português</MenuItem>
                                        </Select>
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
                                        <TextField
                                            type="datetime-local"
                                            className={classes.textField}
                                            InputLabelProps={{
                                            shrink: true,
                                            }}
                                            onChange={handleChangeDatetime}
                                            value={datetime}
                                        />
                                    </Grid>
                                </Grid>                
                            </Grid>
                        </Grid>
                    </form>
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                    >
                        <Button classes={{root: classes.cancelButtom, label: classes.cancelButtomText }} variant="outlined">
                            Cancelar
                        </Button>
                        <Button onClick={()=> {addMentories(name, sub, datetime)}} classes={{root: classes.confirmButtom, label: classes.confirmButtomText }} variant="contained">
                            Confirmar
                        </Button>
                    </Grid>
                </CardContent>
            </Card>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleErrorClose}>
                <Alert onClose={handleErrorClose} severity="error">
                    Informações incompletas
                </Alert>
            </Snackbar>
        </Fragment>
    )
}