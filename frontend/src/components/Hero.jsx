import React, { useEffect, useState } from 'react';
import { backend_url } from '../config';
import { useRecoilState, useRecoilValue } from 'recoil';
import axios from 'axios';
import { cardstore, searchtext } from '../store';


function Hero() {
    const [allcards, setCards] = useRecoilState(cardstore);
    const [loading, setLoading] = useState(false);
    const [filteredCards,setFiltercards]=useState([]);
    const searchText=useRecoilValue(searchtext);
    
    useEffect(() => {
        const fetchCards = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${backend_url}/cards`);
                console.log(response.data);
                setCards(response.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchCards();
    }, [setCards]);

    useEffect(()=>{
        const newFilteredCards = allcards.filter(card =>
            card.title.toLowerCase().includes(searchText.toLowerCase()) ||
            card.description.toLowerCase().includes(searchText.toLowerCase())
        );
        setFiltercards(newFilteredCards);
    },[searchText])

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='flex justify-center'>
            <div className='grid grid-cols-2 gap-16 py-20'>
                {filteredCards.length > 0 ? (
                    filteredCards.map((item) => (
                        <div key={item.id} className='w-96 bg-gray-100 min-h-32 border p-5 rounded-lg'>
                            <h1 className='font-bold border-b'>{item.title}</h1>
                            <p>{item.description}</p>
                        </div>
                    ))
                ) : (
                    <div>No cards available</div>
                )}
                {/* Example static cards */}
                <div className='w-96 bg-gray-100 min-h-32 border p-5 rounded-lg'>
                    <h1 className='font-bold border-b'>Branches</h1>
                    <p>description of branches description...</p>
                </div>
                {/* Add more static cards as needed */}
            </div>
        </div>
    );
}

export default Hero;
