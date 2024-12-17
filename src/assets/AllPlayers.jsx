import { fetchPlayers, fetchSinglePlayer } from "../API/API.js";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar.jsx";

import SinglePlayer from "./SinglePlayer.jsx";
import { useNavigate } from "react-router-dom";
import AddPlayer from "./AddPlayer.jsx";



export default function AllPlayers({puppyID, setPuppyId, }) {
    const navigate = useNavigate();
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const allPlayers = await fetchPlayers();
                setPlayers(allPlayers);
            } catch (error) {
                console.error("Error fetching players:", error);
               
            }
        }
        
        fetchData();
    }, []);


return (
    <div>
      <h2 style={{
          fontSize: "28px",
          backgroundColor: "crimson",
          textAlign: "center",
        }}>Puppy Bowl Presents</h2>
      <SearchBar players={players} setPuppyId={setPuppyId} />
      <AddPlayer />
      <div className="pupperList">
        {players ? (
          players.map((player) => (
            <li key={player.id} className="pupper">
              <div key={player.id} onClick={(e) => {
            setPuppyId(player.id)
            navigate("/player")
          }}>  
                <h4>{player.name}</h4>
                <img 
                  id="dogimg"
                  src={player.imageUrl} 
                  alt={player.name}
                  
                />
                <div className="breed">{player.breed}</div>
              </div>
            </li>
          ))
        ) : (
          <p>No players available</p>
        )}
      </div>
    </div>
  );
  }