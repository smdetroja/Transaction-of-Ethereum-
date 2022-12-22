import { useEffect, useState } from "react";

const APIKEY = import.meta.env.VITE_GIPHY_API;

const useFetch = ({ keyword }) => {
    const [gifUrl, setGifUrl] = useState("");

    const fetchGifs = async () => {
        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${keyword.split(" ").join("")}&limit=1`);
            const { data } = await response.json();
            if (data[0]?.images?.downsized_medium.url)
                setGifUrl(data[0]?.images?.downsized_medium.url);
            else
                setGifUrl("https://c.tenor.com/IHdlTRsmcS4AAAAM/404.gif");
        } catch (error) {
            setGifUrl("https://c.tenor.com/IHdlTRsmcS4AAAAM/404.gif");
        }
    };

    useEffect(() => {
        if (keyword) fetchGifs();
    }, [keyword]);

    return gifUrl;
};

export default useFetch;