import Example from './components/Example/index';
import './App.css';
import Facts from './components/Facts/facts.js';
import Images from './components/Photos/photos'; 


function App(){
  const name='Black Mirror';
  const date='2011';
  const country='UK';
  const channel='Netflix';
  

  return(
    <>
    <Example></Example>
    <Facts showDate={date} showName={name} showCountry={country} showChannel={channel}></Facts>
    <h1>Photo Gallery:</h1>
    <Images></Images>

    </>
  )
}

export default App;
