import './App.css'
import Navbar from './components/Navbar';
import Text from './components/Text';
import Button from './components/Button';
import discordImage from './assets/discordImage.png';

const buttonStyle = { color: 'white', backgroundColor: 'black'};
function App() {
  return (
    <div>
      <Navbar/>
      <Text/>

      <div id= 'info'> 
        <section className = 'buttons'> 
          <Button 
          link = 'https://apps.apple.com/us/app/discord-talk-play-hang-out/id985746746?attemptId=f997dcfa-9d7f-471c-9563-c22fa961bc8b&fingerprint=1254928130750152775.rfT1uFfKSmz4Jkj3amXF_qKK4rE' 
          label = 'Download for Mac' />
          <Button 
          link = 'https://discord.com/' 
          label = 'Open Discord in your browser' 
          style = {buttonStyle}/>
        </section>
        <img src={discordImage} alt ='' className='mainImg'/>
      </div>
      
    </div>
  );
}

export default App
