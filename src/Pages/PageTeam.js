import React from "react"
import MatchDetailCard from "../Components/MatchDetaiCard"
import MatchSamllCard from "../Components/MatchSmallCard"
import  {useParams} from 'react-router-dom'

const PageTeam = () =>{

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

    return <div>
        <h1> {team.teamName} </h1>
        <MatchDetailCard key={team.id}  teamName={team.teamName} match = {team.matches[0]}/>
        {team.matches.slice(1).map(match => {
        
           return <MatchSamllCard key={match.id} teamName={team.teamName} match ={match} />
        })
        }
      
    
    </div>
}

export default PageTeam