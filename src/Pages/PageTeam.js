import React from "react"
import  {useParams,Link} from 'react-router-dom'

import MatchDetailCard from "../Components/MatchDetaiCard"
import MatchSamllCard from "../Components/MatchSmallCard"
import './PageTeam.scss'


import { PieChart } from 'react-minimal-pie-chart';


const PageTeam = () =>{

    let lastYear=2020

    const [team,setTeam]=React.useState({matches : []})
    const {teamName} = useParams()

    const fetchData =  async () =>{

        const reponse = await fetch(`http://localhost:8081/team/${teamName}`)
        const data = await reponse.json()
        console.log(data)
        setTeam(data)
    }

    React.useEffect( () =>{
        fetchData()
    },  [teamName] )

    if(!team  || !team.teamName){
        return <h1>Team not found </h1>
    }

    return <div className="PageTeam">

        <div className="teamName-section">
         <h1 className="teamName"> {team.teamName} </h1>
        </div>

        <div className="win-loses-section">
            <h2>Wins / Loses</h2>

            <PieChart
                data={[
                    { title: 'Loses', value: team.totalMatches - team.totalWins, color: '#a34d5d' },
                    { title: 'Wines', value: team.totalWins, color: '#4da375' }
                    
                
                ]}
                />
        </div>

        <div className="match-detail-section">
        <MatchDetailCard   key={team.id}  teamName={team.teamName} match = {team.matches[0]}/>
        </div>
        
        
        {team.matches.slice(1).map(match => {
        
        return <MatchSamllCard key={match.id} teamName={team.teamName} match ={match} />
        })
        }
        
        <div className="more-link">
        <Link to={`/teams/${teamName}/matches/${lastYear}`}>
                          More >
              </Link>  
            
        </div>
       
      
    
    </div>
}

export default PageTeam