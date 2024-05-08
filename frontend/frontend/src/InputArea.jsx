import { useState } from "react";

const InputArea = (props) => {
  const [items, setItems] = useState(props.productos);
  const [newItem, setNewItem] = useState("");
  const handleExeption = () =>{
    alert("aún no agregamos esa función")
  }
  const addItem = (event) => {
    event.preventDefault();
    const itemObject = {
      id: items.length + 1,
      producto: newItem,
      precio: 120,
    };
    setItems(items.concat(itemObject));
    setNewItem("");
  };

  const handleItemChange = (event) => {
    console.log(event.target.value);
    setNewItem(event.target.value);
  };

  return (
    <>
    <section className="text-gray-600 body-font relative w-[100vw]">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Agregar Producto</h1>
    </div>
      <form className="lg:w-1/2 md:w-2/3 mx-auto" onSubmit={addItem}>
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            <div className="relative"> 
            <input
              value={newItem}
              onChange={handleItemChange}
              type="text"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              id="inlineFormInputGroupUsername0"
              placeholder="...agregar nuevo producto"
            />
            </div>
          </div>
        
          <div className="p-2 w-1/2">
          <div className="relative"> 
            <input
              type="text"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              id="inlineFormInputGroupUsername1"
              placeholder="precio"
            />
          </div>
        </div>
        </div>
        <div className="py-2 w-full">
          <div className="relative">
            <textarea id="message" placeholder="descripción" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="py-2 w-full">
          <div className="relative">
            <input id="imagen" placeholder="url de imagen" name="image" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-full">
          <button type="submit" onClick={handleExeption} className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
            Agregar Producto
          </button>
        </div>
      </form>
      </div>
      </section>
    </>
  );
};

export default InputArea;