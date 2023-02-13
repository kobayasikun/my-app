import { useRef, useState } from 'react';
import './App.css';
import ImageGrallery from './ImageGrallery';

function App() {
 const [fatchData, setFetchData] = useState([]);
 const ref = useRef();

 const handleSubmit = (e)=>{
  e.preventDefault();
  console.log(ref.current.value);

  //APIURL
  const endpointURL = `https://pixabay.com/api/?key=33609685-56197d5dfcfa9fa98a710d3ae&q=${ref.current.value}&image_type=photo`;
  //APIfetch
  fetch(endpointURL)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    setFetchData(data)
  });
 }

  return(
  <div className="container">
    <h2>My pixabay</h2>
      <form onSubmit={(e) => handleSubmit (e)}>
        <input type="text" placeholder="画像を探す" ref={ref} />
      </form>
    <ImageGrallery />
  </div>
  );
}

export default App;
