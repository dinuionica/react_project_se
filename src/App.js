import "./App.css";
import img from "./me.jpg";
import bg from "./bg.png"

function App() {
  return (
    <div className="w-full h-full p-2" 
      style={{ backgroundImage: `url(${bg})`
    }}>
      <div className="flex flex-row w-full pt-2">
        <div className="w-1/2 pt-32">
          <img src={img} className="rounded-full mx-auto mt-40 animate-bounce"/>
        </div>
        <div className="flex flex-col w-1/2 text-xl my-auto mx-20">
        <div>
          <h1 className="text-center text-white font-bold text-7xl mb-4 animate-pulse">Dinu Ion-Irinel</h1>
        </div>
        <h1 className="text-xl text-gray-200 p-2 font-bold text-center">
          I am an entrepreneur who went from writing software to building tech
          startups. Founder of Marketplace Pulse, an e-commerce intelligence
          firm helping businesses understand and grow in the e-commerce market.
          I'm also working on a few other startups and always looking for new
          ideas to advise or invest in. My perspectives have been featured in
          many of the world's leading publications, including The Wall Street
          Journal, The New York Times, The Washington Post, Bloomberg, CNBC,
          Yahoo Finance, and The Information. I also occasionally give talks on
          business and technology at conferences. You can find me on LinkedIn,
          Twitter, and Instagram.
        </h1>
        <h1 className="text-white text-center text-xl">
           Or write me an email to dinuionirinel10@gmail.com
        </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
