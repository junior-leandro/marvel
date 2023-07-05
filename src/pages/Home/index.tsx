import Characters from '../Characters';


const HomePage: React.FC = () => {
    return (
        <div className='content'>
        <h1>Vite + React | Building Discovery Marvel</h1>
          <br />
        <button type="button" id="discovery" onClick={Characters}>CLICK HERE FOR DISCOVERY</button>
      </div>
        );
};


export default HomePage;