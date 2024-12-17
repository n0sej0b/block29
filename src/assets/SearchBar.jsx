import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function SearchBar({ players, setPuppyId }) {
    const [search, setSearch] = useState("");
    const [foundPuppy, setFoundPuppy] = useState(null);
    const navigate = useNavigate();
    
    function handleSearchChange(e) {
        setSearch(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const puppy = players.find((pup) => 
            pup.name.toLowerCase().includes(search.toLowerCase())
        );
        setFoundPuppy(puppy);
    }

    function handlePuppyClick(id) {
        setPuppyId(id);  
        navigate(`/puppy/${id}`);  
    }
        
    return (
        <>
            <form className="searchBar" onSubmit={handleSubmit}>
                <label>
                    Find Puppy:{" "}
                    <input 
                        type="text" 
                        placeholder="Search players by name"
                        value={search} 
                        onChange={handleSearchChange}
                        aria-label="Search players"
                    />
                </label>
                <button type="submit">Search</button>
            </form>

            
            {foundPuppy && (
                <div 
                    className="searchPups" 
                    onClick={() => handlePuppyClick(foundPuppy.id)}
                >  
                    <li className="pupper">
                        <h4>{foundPuppy.name}</h4>
                        <img 
                            id="foundPuppy" 
                            src={foundPuppy.imageUrl} 
                            alt={foundPuppy.name}
                        />
                        <div className="breed">{foundPuppy.breed}</div>
                    </li>
                </div>
            )}
        </>
    );
}
