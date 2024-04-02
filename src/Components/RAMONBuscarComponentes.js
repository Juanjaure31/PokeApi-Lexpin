import React, { useState, useEffect } from 'react';
import Btn from './Button';


const BuscarComponentes = () => {
    // Seteamos los hooks de useState 
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(1);
    // const [page, setPage] = useState(1);

    // Funcion para traer los datos de la API
    //const URL = `https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=20`;
    // Aumentar el numero de paginas 
    //const URLImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${total}.png`

    const showData = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
        setUsers(data);
    };

    // Funcion de Busqueda
    const buscador = (e) => {
        setSearch(e.target.value);
    }

    // Metodo de filtrado
    let res = !search ? users.results : users.results.filter( (dato) => dato.name.toLowerCase().includes(search.toLowerCase()));

    useEffect(() => {
        showData();
    }, [page]);
    // Renderizamos la vista

    if(!users || !users.results){
        return (
        <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-500">
            <h1 className="text-4xl">Loading...</h1>
        </div>
        )}

    return (
        <section className="flex flex-col items-center justify-center w-full bg-gray-500">
            <h1 className="text-4xl">PokeApi</h1>
            <div className='py-10'>
                <input value={search} onChange={buscador} type="text" placeholder='Search...' className='w-[300px] h-[30px] rounded p-3 border-2 border-gray-300' />
            </div>
            <div className="flex justify-center w-[100%] p-4 gap-[20%]">
                {page > 1 && <Btn classes="bg-red-500 m-2 p-2 rounded-xl font-bold" text="Anterior" event={() => setPage(page - 20)} />}
                <Btn classes="bg-blue-500 m-2 p-2 rounded-xl font-bold" text="Siguiente" event={() => setPage(page + 20)} />
            </div>
            <div className='grid grid-cols-3 py-10 w-[100%]'>
                {res.map((data)=>(
                        <div key={data.name} className='flex flex-col justify-center items-center w-[300px] h-[300px] bg-gray-300 mx-auto my-3 p-2 rounded shadow-xl cursor-pointer hover:bg-gray-200 '>
                            <img className='w-[200px] m-auto' src={URLImg}  alt={data.name} />
                            <h1 className='text-2xl'>{data.name}</h1>
                        </div>
                ))}
            </div>
            <div className="flex justify-center w-[30%] p-4 gap-[20%]">
                {page > 1 && <Btn classes="bg-red-500 m-2 p-2 rounded-xl font-bold" text="Anterior" event={() => setPage(page - 20)} />}
                <Btn classes="bg-blue-500 m-2 p-2 rounded-xl font-bold" text="Siguiente" event={() => setPage(page + 20)} />
            </div>
        </section>
    );
};

export default BuscarComponentes;