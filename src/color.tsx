import React, {useState} from "react";



interface Props{};
interface RandomGenerator{
    colour: string;
};

const RandomColor: React.FC<Props>= () => {
    const [colour, setColour] = useState<RandomGenerator['colour']>('');
    const handleClick = () => {
        const ramdonColour = Math.floor(Math.random() * 16777215).toString(16);
        setColour(`#${ramdonColour}`)
    }
    return(
        <div>
            <button onClick={handleClick}>Generate Random Colour</button>
            {colour && (
            <div className="colourDivRandom" 
                style={ {backgroundColor: colour, 
                width: '100px',
                height: '100px',
                margin: '10px'}}/>)}
        </div>
    );
};


export default RandomColor;