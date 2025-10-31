const Times = ()=>{
    const clubes = ["Flamengo", "São Paulo", "Santos", "Palmeiras", "Corinthians"];
        const mapsClubes = clubes.map((clube,i)=>(
            <li key={i}>{clube}</li>
        ))
    return(
        <div>
            <h2>Lista de times</h2>
            <ul>{mapsClubes}</ul>
        </div>
    )
};
export default Times;