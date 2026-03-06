import { Suspense, useState } from 'react'
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbar/Navbar'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
  import { ToastContainer } from 'react-toastify';

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

const playersPromise = fetchPlayers()

function App() {

  const [toggle, setToggle] = useState(true);

  const [availableBalance, setAvailableBalance] = useState(200000000);

  const [choosedPleyers, setChoosedPleyers] = useState([]);

  const removePlayer = (p) => {

    const filteteredData = choosedPleyers.filter(ply => ply.id !== p.id);

    setChoosedPleyers(filteteredData)

    const playerPrice = parseInt(p.price.split("USD").join("").split(",").join(""))

    setAvailableBalance(availableBalance + playerPrice)

  }

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>

      <div className="max-w-300 mx-auto flex justify-between items-center">
        <h3 className='font-bold text-2xl'>{
          toggle === true ? "Available Players" : `Selected Players (${choosedPleyers.length} /6)`
        }</h3>
        <div className="font-normal">
          <button onClick={() => setToggle(true)} className={`py-3 px-4 border-2 border-gray-400 rounded-l-2xl border-r-0 ${toggle === true ? "bg-[#E7FE29] font-bold" : ""}`}>
            Available
          </button>
          <button onClick={() => setToggle(false)} className={` py-3 px-4 border-2 border-gray-400 rounded-r-2xl border-l-0 ${toggle === false ? "bg-[#E7FE29] font-bold" : ""}`}> Selected
            <span>({choosedPleyers.length})</span>
          </button>

        </div>
      </div>

      {
        toggle === true ?
          <Suspense fallback={<span className="flex justify-center items-center  w-20 mx-auto loading loading-infinity loading-xl"></span>}>
            <AvailablePlayers choosedPleyers={choosedPleyers} setChoosedPleyers={setChoosedPleyers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playersPromise={playersPromise}></AvailablePlayers></Suspense> : <SelectedPlayers removePlayer={removePlayer} choosedPleyers={choosedPleyers}></SelectedPlayers>
      }


<ToastContainer/>

    </>
  )
}

export default App
