import { useState } from "react";
import "./ar.css";

export default function AR() {
    const [selectedPokemon, setSelectedPokemon] = useState("");
    let image = ``;
    switch (selectedPokemon) {
        case "charmander":
            image = "https://github.com/teedrm/final/blob/master/client/src/components/AR/img/charmander.png?raw=true";
            break;
        case "squirtle":
            image = "https://github.com/teedrm/final/blob/master/client/src/components/AR/img/squirtle.png?raw=true";
            break;
        case "koffing":
            image = "https://github.com/teedrm/final/blob/master/client/src/components/AR/img/koffing.png?raw=true";
            break;
        case "gengar":
            image = "https://github.com/teedrm/final/blob/master/client/src/components/AR/img/gengar.png?raw=true";
            break;
        case "greninjia":
            image = "https://github.com/teedrm/final/blob/master/client/src/components/AR/img/greninjia.png?raw=true";
            break;
        // case "pikachu":
        //     image = "./img/pikachu.png";
        //     break;
        case "piplup":
            image = "https://github.com/teedrm/final/blob/master/client/src/components/AR/img/piplup.png?raw=true";
            break;
        case "snorlax":
            image = "https://github.com/teedrm/final/blob/master/client/src/components/AR/img/snorlax.png?raw=true";
            break;
    }
    return (
        <div className="ar-container">
            <div className="ar-title">
                <div className="ar-message">Select a pokemon to take picture with:</div>
                <select
                    id="ar-select"
                    name="ar-select"
                    onChange={(event) => { setSelectedPokemon(event.target.value) }}
                >
                    <option value="">--Please choose a pokemon--</option>
                    <option value="charmander">Charmander</option>
                    <option value="squirtle">Squirtle</option>
                    <option value="koffing">Koffing</option>
                    <option value="gengar">Gengar</option>
                    <option value="greninjia">Greninjia</option>
                    {/* <option value="pikachu">Pikachu</option> */}
                    <option value="piplup">Piplup</option>
                    <option value="snorlax">Snorlax</option>
                </select>
            </div>
            <div className="ar-img">
                <img src={image} />
                <ul className="ar-list">
                    <li>Use your IOS device to scan the QR code</li>
                    <li>Click download</li>
                    <li>Click the arrow down on the left of address bar (download folder)</li>
                    <li>Click file to open</li>
                </ul>
            </div>
        </div>
    );
}



