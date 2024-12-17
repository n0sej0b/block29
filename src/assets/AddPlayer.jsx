import React, { useState } from "react";


export default function AddPlayer() {
    const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2408-FTB-MT-WEB-PT";
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [message, setMessage] = useState(""); 
    

    async function handleSubmit(e) {
        e.preventDefault();    
         if (!name || !breed || !imageUrl) {
            setMessage("All fields are required!");
            return;
        } try {
            const response = await fetch(`${API_URL}/players`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    breed,
                    imageUrl,
                }),
            });

             if (response.ok) {
                const result = await response.json();
                console.log(result);
                setMessage("Player added successfully!"); 

                setName(""); 
                setBreed("");
                setImageUrl("");
                history.go(0);
            } else {
                setMessage("Failed to add player.");
            }
        } catch (error) {
            console.error("Error adding player:", error);
            setMessage("An error occurred.");
        }
    }



    return (
        <> 
            
            <form className="addPlayer" onSubmit={handleSubmit}><br />
               
                <div>
                    <div>
                        <h3>New Player</h3></div>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Breed:
                        <input
                            type="text"
                            value={breed}
                            onChange={(e) => setBreed(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Image URL:
                        <input
                            type="text"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Add Player</button>
            </form>
            {message && <p>{message}</p>} 
        </>
    );
}