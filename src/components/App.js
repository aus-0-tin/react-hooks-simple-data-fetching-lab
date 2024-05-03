// create your App component here
import React, {useState, useEffect} from "react";

export default function App (){

    const [randomImage, setRandomImage] = useState([]); // we can also set this to null
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        fetch ("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(data => {
                setRandomImage(data.message);
                setIsLoading(false);
            })
            .catch(error => console.error("Error fetching data:", error));
  }, []);

    return (
        <>
           {isLoading ? (<p>Loading...</p>) : (<img src={randomImage} alt="A Random Dog" />)}
        </>
    );
}