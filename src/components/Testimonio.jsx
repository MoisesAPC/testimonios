import React from 'react';
import { useState } from 'react';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Typography } from '@mui/material';
import { Avatar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { MyButton } from 'milibreria';
import { MyFavourite } from 'milibreria';
import { MyFavouriteBorder } from 'milibreria';
import { MoisesAntonioPC } from 'milibreria';

const Testimonio = ({ nombre, pais, cargo, empresa, alt, testimonio, imagen }) => {

  const [gustado, setMeGusta] = useState(false);

  const handlerMeGusta = () => {
    setMeGusta(!gustado);
  };

  return (
    <>
    {/* Añadimos un "div" para asegurarnos de que el componente "MoisesAntonioPC" esté debajo del Card por defecto de Testimonios */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Card sx={{ maxWidth: 1000 }}>
        <CardContent>
          <CardMedia
            component="img"
            image={imagen}
            alt={alt}
            title={alt}
            sx={{
              width: '100%',
              height: 500,
              marginBottom: '16px',
              objectFit: 'cover'
            }}
          />

          <Typography variant="h6" component="div">
            {nombre} en {pais}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {cargo} en {empresa}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ marginTop: '8px' }}>
            "{testimonio}"
          </Typography>
          
          <IconButton onClick={handlerMeGusta}>
            {gustado ? <MyFavourite color="error" /> : <MyFavouriteBorder />}
          </IconButton>

          <MyButton 
            text='Mi botón' 
            txtcolor='black' 
            bgcolor='yellow' 
            borderColor='orange'
            borderWidth='20px'
            hoverTextColor='white'
            hoverBgColor='orange'
            size='large'
            disabled={false}
            onClick={() => alert("Has hecho click")}
          />
        </CardContent>
      </Card>

      <MoisesAntonioPC
        titulo="Título 1"
        subcabecera="Subcabecera 1"
        texto="Texto de ejemplo 1"
        imagen={imagen}
        textoBoton="Texto botón"
        onFavorite={() => alert("Has hecho click en Me Gusta")}
        onShare={() => alert("Has hecho click en Compartir")}
        onAction={() => alert("Has hecho click en el botón genérico")}
        desactivarCompartir={false}
        desactivarMeGusta={false}
        desactivarBoton={false}
        colorBotonMeGusta="red"
        colorBotonCompartir="blue"
        colorBoton="green"
      />
      </div>
    </>
  );
};

export default Testimonio
