import React from 'react';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import Testimonio from './components/Testimonio';

function App() {
  const testimonios = [
    {
      id: 1,
      nombre: "María Rodríguez",
      pais: "España",
      cargo: "Desarrolladora Frontend",
      empresa: "TechIberia",
      alt: "Retrato de María Rodríguez, quien trabaja en TechIberia como desarrolladora frontend.",
      testimonio:"Desde que empecé a usar React, mi productividad ha aumentado significativamente. La capacidad de crear componentes reutilizables me ha permitido construir aplicaciones más rápidas y eficientes. Además, la comunidad de React es increíble; siempre hay recursos y soporte disponibles. Definitivamente, lo recomendaría a cualquier desarrollador que busque una forma moderna de construir interfaces de usuario.",
      imagen: 'src/assets/mujer1.jpg'
    },
    {
      id: 2,
      nombre: "Carlos Gómez",
      pais: "México",
      cargo: "Diseñador UX/UI",
      empresa: "CreativeMX",
      alt: "Diseñador UX/UI cualificado.",
      testimonio: "React ha cambiado la forma en que desarrollo aplicaciones web. La arquitectura basada en componentes facilita la organización del código y mejora la mantenibilidad. Me encanta cómo se integra con otras bibliotecas y frameworks, lo que me permite personalizar mis proyectos según las necesidades específicas. Aunque al principio puede ser un poco abrumador, los beneficios a largo plazo son innegables.",
      imagen: 'src/assets/hombre1.jpg'
    },
    {
      id: 3,
      nombre: "Ana Martínez",
      pais: "Argentina",
      cargo: "Ingeniera de Software",
      empresa: "TechBA",
      alt: "Ingeniera argentina con años de experiencia.",
      testimonio: "He estado usando React en varios proyectos y lo que más me gusta es su flexibilidad. Podemos elegir cómo gestionar el estado, ya sea con Context API o Redux, dependiendo del tamaño y la complejidad de la aplicación. También aprecio el enfoque declarativo de React; es fácil entender cómo se renderiza la UI en función del estado. Esto hace que colaborar con otros desarrolladores sea mucho más sencillo.",
      imagen: 'src/assets/mujer2.jpg'
    },
    {
      id: 4,
      nombre: "Javier López",
      pais: "Colombia",
      cargo: "Gerente de Proyectos",
      empresa: "InnovaCOL",
      alt: "Gerento cualificado graduado en Universidad.",
      testimonio: "React es una herramienta poderosa para el desarrollo web. La posibilidad de utilizar hooks ha simplificado mucho el manejo del estado y los efectos secundarios en mis componentes. Además, la integración con TypeScript ha mejorado aún más mi experiencia, permitiéndome escribir código más seguro y fácil de mantener. Sin duda, React es una elección sólida para cualquier proyecto moderno.",
      imagen: 'src/assets/hombre2.jpg'
    }
  ];

  return (
    <Container maxWidth="lg">
      <Grid 
        container 
        direction="column" 
        spacing={3} 
        alignItems="center"
      >
        {
          testimonios.map((testimonio) => (
            <Grid item key={testimonio.id}>
              <Testimonio {...testimonio} />
            </Grid>
          ))
        }
      </Grid>
    </Container>
  );
}

export default App
