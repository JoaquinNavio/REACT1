import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, InputAdornment, TextField } from '@mui/material';

import React, { useContext, useState } from "react";
import { DataContext } from "./DataContext";


function Catalogo() {
  const { data, setData } = useContext(DataContext);
  const { dataCarrito, setDataCarrito } = useContext(DataContext);


  const addToCarrito = (producto) => {
    const filteredItems = dataCarrito.filter((item) => item.id === producto.id);

    if (filteredItems.length > 0) {
      setDataCarrito((prevData) =>
        prevData.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: parseInt(item.cantidad) + parseInt(valorTextField) }
            : item
        )
      );
    } else {
      producto.cantidad += valorTextField;
      const newDataCarrito = [...dataCarrito, producto];
      setDataCarrito(newDataCarrito);
    }
  };

  const [valorTextField, setValorTextField] = useState(1);
  const handleChange = (event) => {
    setValorTextField(event.target.value);
  };


  const [hoveredCard, setHoveredCard] = useState(null);

  
  return (
    <div style={{ width: "90vh", overflow: "auto", position: "relative" }}>
      <h1>Catalogo de productos</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((producto) => (
          <div
            key={producto.id}
            style={{
              margin: "30px",
              flexBasis: "calc(33.33% - 60px)", // Ajustar según el número de tarjetas por fila
              position: "relative" // Añadir posición relativa para que las tarjetas absolutas sean relativas a este div
            }}
          >
            <div
              onMouseEnter={() => setHoveredCard(producto.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ position: "relative" }}
            >
              <Card
                style={{ position: hoveredCard === producto.id ? "absolute" : "static", zIndex: hoveredCard === producto.id ? 1000 : 1 }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="220"
                    image={producto.img}
                    alt={producto.nombre}
                  />
                  {hoveredCard === producto.id && (
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {producto.nombre}
                      </Typography>
                      <Typography gutterBottom variant="h6" component="div">
                        <strong>Precio:</strong>
                        {producto.precio}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {producto.descripccion}
                      </Typography>
                      <br></br>
                      <button onClick={() => addToCarrito(producto)}>
                        Comprar
                      </button>
                      <br></br>
                      <button style={{marginTop:"5px",backgroundColor: "green"}} onClick={() => addToCarrito(producto)}>
                        Mas Info
                      </button>
                      
                      <div id="container">
                      <br></br>
                        <p>Cantidad:</p>
                        <br></br>
                        <TextField
                          id="filled-basic"
                          label="Ingrese cantidad deseada"
                          variant="filled"
                          onChange={handleChange}
                        />
                      </div>
                    </CardContent>
                  )}
                </CardActionArea>
              </Card>
            </div>
          </div>
        ))}
      </div>
  
      <button style={{ fontSize: "16px", backgroundColor: "green" }}>
        Agregar Producto
      </button>
    </div>
  );
  
}

export default Catalogo;
