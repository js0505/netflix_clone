import React, {useState, useEffect} from 'react';
import { searchAPI } from '../SearchAPI';
// import { searchAPI } from '../API';

const Search = () => {

    // const [searchMovies, setSearchMovies] = useState([]);
    // const [searchPeople, setSearchPeople] = useState([]);
    // const [searchTV, setSearchTV] = useState([]);

    // const getData = async () => {

    //     const [movieRes, movieResErr] = await searchAPI.searchMovies();
    //     setSearchMovies(movieRes);

    //     const [peopleRes, peopleResErr] = await searchAPI.searchPeople();
    //     setSearchPeople(peopleRes);

    //     const [tvRes, tvResErr] = await searchAPI.searchTV();
    //     setSearchTV(tvRes);

    //     console.log(
    //         'movieResErr : ' + movieResErr,
    //         'peopleResErr : ' + peopleResErr,
    //         'tvResErr : ' + tvResErr
    //     )
    // }

    // useEffect(() => {
    //     getData()
    // }, [])


    const [search, setSearch] = useState([]);

    const getData = async () => {
        const [searchTest, testErr] = await searchAPI.searchMovies();
        setSearch(searchTest);
        console.log(testErr)
    }

    useEffect(() =>{
        getData()
    },[])


    return (
        <div>
            {search.map(item => (
                <div>{item.title}</div>
            ))}
        </div>
    );
};

export default Search;