import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import React, { useContext, useState  } from "react";
import { DataContext } from "./DataContext";

function Carrito() {

    const { dataCarrito, setDataCarrito } = useContext(DataContext);

    const deleteFromCarrito = (productoToDelete) => {
    const newDataCarrito = dataCarrito.filter((producto) => producto.id !== productoToDelete.id);
    setDataCarrito(newDataCarrito);
};

  const [hoveredCard, setHoveredCard] = useState(null);

  return (

    <div  style={{  width: '10vw', }}>
      <h2>Carrito</h2>
      {!dataCarrito || dataCarrito.length === 0 ? (
        <p>no hay productos en este momento</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          {dataCarrito.map((producto) => (
            <Card key={producto.id}  sx={{ marginLeft: '10px', marginBottom: '10px' }} onMouseEnter={() => setHoveredCard(producto.id)}
            onMouseLeave={() => setHoveredCard(null)}>
              <CardActionArea>
                <CardMedia
                  id='DALECLDO'
                  component="img"
                  image={producto.img}
                  alt={producto.nombre}

                />
                {hoveredCard === producto.id && (
                  <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {producto.nombre}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    <strong>Precio:</strong>{producto.precio}
                    <br></br>
                    <strong>Cantidad:</strong>{producto.cantidad}
                    <br></br>
                    <strong>Total:</strong>{producto.precio*producto.cantidad}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {producto.descripccion}
                  </Typography>
                  <button onClick={() => deleteFromCarrito(producto)} style={{backgroundColor: 'red'}}>Eliminar</button>
                </CardContent>
                )}
                
              </CardActionArea>
              

            </Card>
          ))}
        </div>
      )}
      <button style={{ fontSize: '16px', backgroundColor: 'green', padding: '10px 20px', color: 'white', border: 'none', borderRadius: '5px' }}>Finalizar Pedido</button>

    </div>
  );
}

export default Carrito;
