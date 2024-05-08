
const Header = ()=>{
  const handleExeption = () =>{
    alert("aún no agregamos esa función")
  }
  const refreshPage = () => {
    window.location.reload();
  };
    return(<header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-green-600 mb-4 md:mb-0">
        <img src="https://i.pinimg.com/originals/6e/51/32/6e5132a90812ad1abf3711135a5cf406.png" className="w-16"/>
        <span className="ml-3 text-3xl">La Tienda de Rick</span>
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a className="mr-5 hover:text-gray-900 cursor-pointer " onClick={handleExeption} >Agregar Producto</a>
      </nav>
      <button onClick={refreshPage} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">LogOut
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </header>
        );
}

export default Header;