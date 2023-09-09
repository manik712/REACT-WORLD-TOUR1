import { useState } from 'react';
import './Country.css';

const Country = ({country}) => {
  console.log(country);
    const {name ,flags,population ,area,cca3} = country;
    const [visited, setVisited] = useState(false);
return (
    <div className='country'>
       <h3>Name:{name?.common}</h3>
       <img src={flags.png} alt="" />
       <p>population:{population}</p>
       <p>area:{area}</p>
       <p><small>Code:{cca3}</small></p>
       <button>Visited</button>
    </div>
  );
};

export default Country;

