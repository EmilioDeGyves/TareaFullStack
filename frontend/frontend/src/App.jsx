import { useState, useEffect } from "react";
import "./App.css";
import Notification from "./components/Notifications";
import InputArea from "./InputArea";
import ListArea from "./ListArea";
import loginService from "./services/login";
import Header from "./Header"
import productService from "./services/products";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [user, setUser] = useState(null);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    productService.getAllProducts().then(initialProducts => {
      setProductos(initialProducts);
    });
  }, []);


  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService.login({
        username,
        password,
      });

      window.localStorage.setItem("loggeAppUser", JSON.stringify(user));

      setUser(user);
      setUsername("");
      setPassword("");
    } catch (exception) {
      setErrorMessage("Wrong credentials");
      setUsername("");
      setPassword("");
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
    }
  };

  const productsForm = () => (
    <div className="container mt-5">
      <ListArea productos={productos} />
      <InputArea productos={productos} />
    </div>
  );

  const loginForm = () => (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 className="title-font font-medium text-3xl text-green-500">La Tienda de Rick</h1>
      <p className="leading-relaxed mt-4">Inicia sesion para ver los increibles productos que tenemos para ti!, No lo podras creer</p>
    </div>
    
      <form onSubmit={handleLogin} className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Login</h2>
        <div className="relative mb-4">
          <p className="leading-7 text-sm text-gray-600">username</p>
          <input
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
            className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <h2 className="leading-7 text-sm text-gray-600">password</h2>
          <input
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
            className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button type="submit" className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">login</button>
        <Notification mensaje={errorMessage} />
      </form>
      </div>
    </section>




  );

  return (
    <>
    
      {/*{user === null && loginForm()}
      {user !== null && productsForm()} */}

      {user === null ? (
        loginForm()
      ) : (
        <div>
          <Header />
          <p className="mx-24 text-xl">Hola, {user.name} ¿Qué deseas comprar hoy?</p>
          {productsForm()}
        </div>
      )}
    </>
  );
}

export default App;