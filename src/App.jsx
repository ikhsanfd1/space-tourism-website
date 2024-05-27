import Home from './pages/Home';
import Navbar from './components/Navbar';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';

function App() {
  return (
    <div
      className="h-screen text-white border-b-8 border-gray-800"
      style={{
        backgroundImage: 'url(/home/background-home-desktop.jpg)',
      }}
    >
      <Navbar />
      <div className="main-content">
        <section id="home">
          <Home />
        </section>
        <section id="destination">
          <Destination />
        </section>
        <section id="crew">
          <Crew />
        </section>
        <section id="technology">
          <Technology />
        </section>
      </div>
    </div>
  );
}

export default App;
