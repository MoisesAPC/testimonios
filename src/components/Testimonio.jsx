import React from 'react';
import { useState } from 'react';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Typography } from '@mui/material';
import { Avatar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Testimonio = ({ nombre, pais, cargo, empresa, alt, testimonio, imagen }) => {

  const [gustado, setMeGusta] = useState(false);

  const handlerMeGusta = () => {
    setMeGusta(!gustado);
  };

  return (
    <Card sx={{ maxWidth: 1000 }}>
      <CardContent>

      <CardMedia
          component="img"
          image={imagen}
          alt={alt}
          sx={{
            width: '100%',
            height: 500,
            marginBottom: '16px',
            objectFit: 'cover'
          }}/>

        {/* <Avatar src={imagen} alt={alt} sx={{ width: 60, height: 60, marginBottom: '8px' }} /> */}

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
          {/* color="error" es rojo */}
          {gustado ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
        </IconButton>

      </CardContent>
    </Card>
  );
};

export default Testimonio
