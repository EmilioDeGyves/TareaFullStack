const ListArea = ({productos}) => {
    return (
      <>
        <section className="text-gray-600 body-font w-[100vw]">
        <div className="px-5 py-24 mx-16 ">
          <div className="flex flex-wrap -m-4 ">
          {productos.map(producto => 
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={producto.id}>
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={producto.content.imagenUrl} />
                  </a>
                <div className="mt-4 flex flex-col">
                <h2 className="text-gray-900 title-font text-lg font-medium">{producto.content.producto}</h2>
                <p className="mt-1">{producto.content.descripcion}</p>
                <p className="mt-1 self-end">${producto.content.precio}</p>
          </div>
          </div>
                
  
          
          )}
          </div>
              </div>
        </section>
      </>
    );
  };
  
  export default ListArea;