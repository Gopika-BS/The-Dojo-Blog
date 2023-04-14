import { useState } from "react";

const Home = () => {
// let name = Gopika;

const [name, setname] = useState('Gopika ')


const handleClick = () =>{
    setname('AmalNandan')
}



    return (  
        <div className="home">
          <h2>Home page</h2>  
          <p>Hello {name}</p>
          <button onClick={handleClick}>Click Me</button>
        </div>
    );
}
 
export default Home;