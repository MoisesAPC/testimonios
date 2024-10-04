import React from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid2'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Container from '@mui/material/Container'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Divider from '@mui/material/Divider'
import Rating from '@mui/material/Rating'
import Checkbox from '@mui/material/Checkbox'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { useState } from 'react'


function FormRegistro() {
  // Datos del formulario {Nombre, Apellidos, Edad}
  const [data, setData] = useState({nombre:'', apellidos:'', edad:''})
  const [lenguaje, setLenguaje] = useState('');
  const [genero, setGenero] = useState('');
  const [puntuacion, setPuntuacion] = React.useState(0);
  const [condicionesAceptadas, setCondicionesAceptadas] = useState(false);
  const [open, setOpen] = React.useState(false);  // Para el diálogo de confirmación
  const [formValido, setFormValido] = useState(false);  // Para comprobar que todos los campos required hayan sido rellenados previamente

  const handleAbrirDialogoConfirmacion = () => {
    setOpen(true);
  };

  const handleCerrarDialogoConfirmacion = () => {
    setOpen(false);
  };

  const handleLenguajeProgramacionFavorito = (event) => {
    setLenguaje(event.target.value);
        
    validarFormulario(data.nombre, data.apellidos, data.edad, event.target.value, genero, condicionesAceptadas);
  };

  const handleGenero = (event) => {
    setGenero(event.target.value);
        
    validarFormulario(data.nombre, data.apellidos, data.edad, lenguaje, event.target.value, condicionesAceptadas);
  };

  const handleEnviar = (e) => {
    //Para que no mande el formulario, sino que haga lo que yo le diga
    e.preventDefault();

    console.log({
      ...data,
      lenguaje,
      genero,
      puntuacion,
      condicionesAceptadas
    });

    // Cerramos el diálogo
    setOpen(false);

    // Limpia los contenidos de las textboxes y otros elementos
    // despues de cerrar el diálogo de confirmación (si le damos a "SÍ")
    limpiarContenidos();
  };

  const handleLimpiar = (e) => {
    //Para que no mande el formulario, sino que haga lo que yo le diga
    e.preventDefault();

    // Limpia los contenidos de las textboxes y otros elementos
    limpiarContenidos();
  };

  const handleChangeNombre = (e) =>{
    setData({
      ...data,
      nombre: e.target.value
    });

    validarFormulario(e.target.value, data.apellidos, data.edad, lenguaje, genero, condicionesAceptadas);
  };

  const handleChangeApellidos = (e) =>{
    setData({
      ...data,
      apellidos: e.target.value
    });
        
    validarFormulario(data.nombre, e.target.value, data.edad, lenguaje, genero, condicionesAceptadas);
  };

  const handleChangeEdad = (e) =>{
    setData({
      ...data,
      edad: e.target.value
    });
        
    validarFormulario(data.nombre, data.apellidos, e.target.value, lenguaje, genero, condicionesAceptadas);
  };

  const handleCheckbox = (event) => {
    setCondicionesAceptadas(event.target.checked);
        
    validarFormulario(data.nombre, data.apellidos, data.edad, lenguaje, genero, event.target.checked);
  };

  // Limpia los contenidos de las textboxes, las encuestas, etc
  const limpiarContenidos = () => {
    setData({nombre: '', apellidos: '', edad: ''});
    setLenguaje('');
    setPuntuacion(0);
    setGenero('');
    setCondicionesAceptadas(false);
    setFormValido(false);
  };

  // Si todos los campos con "required" han sido rellenados
  // "esValido" pasará a ser a true, activando el botón de Enviar
  const validarFormulario = (nombre, apellidos, edad, lenguaje, genero, condicionesAceptadas) => {
    const esValido =
      nombre.trim() !== '' &&
      apellidos.trim() !== '' &&
      edad.trim() !== '' &&
      lenguaje !== '' &&
      genero !== '' &&
      condicionesAceptadas;
    setFormValido(esValido);
  };

  return(
    <Container>
      <Paper elevation={0} square={false} sx={{textAlign:'center'}} >
        <Box
          component='form'
          onSubmit={handleEnviar}
        >
          <Grid container spacing={2}>
            {/* Campo nombre */}
            <Grid item size={{ xs: 12, md: 10, lg: 5, xl: 6 }}>
              <TextField 
                required
                label='Nombre'
                variant='outlined'
                fullWidth
                value={data.nombre}
                onChange={handleChangeNombre}
              />
            </Grid>

            {/* Campo apellidos */}
            <Grid item size={{ xs: 12, md: 10, lg: 5, xl: 6 }}>
              <TextField 
                required
                label='Apellidos'
                variant='outlined'
                fullWidth
                value={data.apellidos}
                onChange={handleChangeApellidos}
              />
            </Grid>

            {/* Campo edad */}
            <Grid item size={{ xs: 12, md: 5, lg: 2, xl: 1 }}>
              <TextField 
                required
                type='number'
                label='Edad'
                variant='outlined'
                fullWidth
                value={data.edad}
                onChange={handleChangeEdad}
              />
            </Grid>
          </Grid>

            {/* Lista de género */}
            <Grid container spacing={2} sx={{ mt: 2 }} justifyContent="flex-end">
              <Grid item size={{ xs: 12, md: 6, lg: 4, xl: 4 }}>
                <FormControl required>
                  <FormLabel id="demo-form-control-label-placement">Género</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-form-control-label-placement"
                    name="position"
                    value={genero}
                    onChange={handleGenero}
                  >
                    <FormControlLabel value="femenino" control={<Radio />} label="Femenino" />
                    <FormControlLabel value="masculino" control={<Radio />} label="Masculino" />
                    <FormControlLabel value="otro" control={<Radio />} label="Otro" />
                  </RadioGroup>
                </FormControl>
              </Grid>

              {/* Lista del enguaje de programación favorito */}
              <Grid item size={{ xs: 12, md: 4, lg: 6, xl: 7 }}>
                <FormControl required fullWidth>
                  <InputLabel id="demo-simple-select-label">Lenguaje de programación favorito</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={lenguaje}
                    label="lenguaje"
                    onChange={handleLenguajeProgramacionFavorito}
                  >
                    <MenuItem value={1}>Javascript</MenuItem>
                    <MenuItem value={2}>Java</MenuItem>
                    <MenuItem value={3}>Python</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            {/* Línea divisora antes de los botones de Enviar y Limpiar */}
            <Grid size={12}>
              <Divider />
            </Grid>

            {/* direction="column" nos permite que todos los items dentro del container se pongan uno debajo del otro */}
            {/* justifyContent="flex-start" alinea los contenidos a la izquierda */}
            <Grid container spacing={2} sx={{ mt: 2 }} justifyContent="flex-start" direction="column">
              {/* Encuesta de estrellas */}
              <Grid item size={{ xs: 12, md: 4, lg: 2, xl: 3 }}>
                <Typography component="legend">Puntúa esta encuesta</Typography>
                
                <Rating
                  name="simple-controlled"
                  value={puntuacion}
                  onChange={(event, newValue) => {
                    setPuntuacion(newValue);
                  }}
                />
              </Grid>

              {/* Checkbox de "He leído los términos y condiciones" */}
              <Grid item size={{ xs: 12, md: 6, lg: 6, xl: 6 }}>
                <FormControlLabel
                  control={<Checkbox checked={condicionesAceptadas} onChange={handleCheckbox}/>}
                  label="He leído los términos y condiciones"
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              {/* Botón de Enviar */}
              <Grid size={{ xs: 12, md: 6, lg: 6, xl: 6 }}>
                  <Button variant='contained' fullWidth onClick={handleAbrirDialogoConfirmacion} disabled={!formValido}>
                    Enviar
                  </Button>
              </Grid>

              {/* Botón de Limpiar */}
              <Grid size={{ xs: 12, md: 6, lg: 6, xl: 6 }}>
                  <Button variant='outlined' fullWidth onClick={handleLimpiar} color="error">
                    Limpiar
                  </Button>
              </Grid>

              {/* Diálogo de confimación al pulsar en Enviar */}
              <Dialog
                open={open}
                onClose={handleCerrarDialogoConfirmacion}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"confirmación"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    ¿Estás seguro de que quieres mandar la encuesta?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCerrarDialogoConfirmacion}>
                    NO
                  </Button>
                  <Button onClick={handleEnviar} autoFocus>
                    SÍ
                  </Button>
                </DialogActions>
              </Dialog>

            </Grid>
        </Box>
      </Paper>
    </Container>
    
  )

}

export default FormRegistro
