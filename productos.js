function capturar()
{
    function Productos(id,nombre,cantidad,precio)
    {
        this.id=id;
        this.nombre=nombre;
        this.cantidad=cantidad;
        this.precio=precio;
    }
    var idCapturar = document.getElementById("idt").value;
    var nombreCapturar = document.getElementById("nombret").value;
    var cantidadCapturar = document.getElementById("cantidadt").value;
    var precioCapturar = document.getElementById("preciot").value;


     nuevoProducto = new Productos(idCapturar,nombreCapturar,cantidadCapturar,precioCapturar);

    console.log(nuevoProducto);

    agregar();
    
}



var inventario=[];
function agregar()
{
   inventario.push(nuevoProducto);
   console.log(inventario);
   document.getElementById("tabla").innerHTML+= "<tbody><td>"+nuevoProducto.id+"</td><td>"+nuevoProducto.nombre+"</td><td>"+nuevoProducto.cantidad+"</td><td>"+nuevoProducto.precio+"</td></tbody>";
}


function listar()
{
    
    console.log(inventario);
    for(let i=0;i<this.inventario.length;i++)
    document.getElementById("tabla").innerHTML += "<tbody><td>"+this.inventario[i].id+"</td><td>"+this.inventario[i].nombre+"</td><td>"+this.inventario[i].cantidad+"</td><td>"+this.inventario[i].precio+"</td></tbody>";

}



function eliminar(eliminarID)
{
    

   for(let i=0;i<this.inventario.length;i++)
   {
    
       if(this.inventario[i].id==eliminarID)
       {
        let posicion=i;
        if(posicion>-1)
        {
            this.inventario.splice(posicion,1);
            return null;
        }
        else
        {
            return posicion;
        }
       }
       
   }
   document.getElementById("tabla").innerHTML = "" ;
   console.log(inventario);

   
}





function buscar(busquedaid)
{
for(let i=0;i<this.inventario.length;i++)
{
    if(this.inventario[i].id==busquedaid)
    {
        return document.getElementById("busID").innerHTML= "--> ID: " + this.inventario[i].id +        "  --> Nombre: " + this.inventario[i].nombre +        "  --> Cantidad: " + this.inventario[i].cantidad +        "  --> Precio: " + this.inventario[i].precio;

    }
    
}

}