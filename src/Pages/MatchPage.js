import React from "react"
import MatchDetailCard from "../Components/MatchDetaiCard"
import  {useParams} from 'react-router-dom'

const MatchPage = () =>{
     
    const [matches,setMatches]=React.useState([])
   
    const {teamName, year} = useParams()
     
    const fetchData =  async () =>{

        const reponse = await fetch(`http://localhost:8081/team/${teamName}/matches?year=${year}`)
        const data = await reponse.json()
        console.log(data)
        setMatches(data)

        

    }
    React.useEffect( () =>{
        fetchData()
    },  [] )

    return <div className="MatchPage">
         <h1>  Match page </h1>

         {
             matches.map(match => {
                return <MatchDetailCard key={match.id} teamName={teamName} match ={match} />
             })
         }
    
    </div>
}

export default MatchPage