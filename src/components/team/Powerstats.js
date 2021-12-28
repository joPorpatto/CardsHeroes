import { useSelector } from 'react-redux'

export const Powerstats = () => {




        const {powerstats} = useSelector(state => state.hero)
        const valuesPow = Object.values(powerstats )
        const namesPow = Object.keys(powerstats )       

        const powerStats = []
        var powers ={
                name:"",
                value:" ",
        }

        for (let i = 0; i < namesPow.length; i++) {
                powers={
                        name: namesPow[i],
                        value: valuesPow[i]
                };
                powerStats.push(powers)
                
        }

         const powerStatsSort = (powerStats.sort(function(a, b)  { return b.value - a.value } ));

        return (
                <div  className="container border pb-4">

                        <div className="card text-center mt-4 ms-2 me-2 bg-dark text-white">
                                <div className="card-header">
                                        <h3>Averages Powers</h3>
                                </div>
                                <div className="card-body  ">
                                        {
                                                powerStatsSort.map((name,i)=>(                                                       
                                                        
                                                        <li className="list-group" key={i}  >
                                                                {name.name}: {name.value}

                                                        </li>
                                                ))
                                        }
                                </div>
                                
                        </div>
                </div>
        )
}
