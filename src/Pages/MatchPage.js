import React from "react"
import  {useParams} from 'react-router-dom'

import MatchDetailCard from "../Components/MatchDetaiCard"
import YearSelector from "../Components/YearSelectore"

import "./MatchPage.scss"

const MatchPage = () =>{
     
    const [matches,setMatches]=React.useState([])
   
    const {teamName, year} = useParams()
     
    const fetchData =  async () =>{

        const reponse = await fetch(`http://localhost:8081/team/${teamName}/matches?year=${year}`)
        const data = await reponse.json()
    
        setMatches(data)

    }
    React.useEffect( () =>{
        fetchData()
    },  [teamName, year] )

    return <div className="MatchPage">
        <div className="year-selector-section">
            <h3>Select Year </h3>
            <YearSelector teamName={teamName} />
           
        </div>
       
      <div>
      <h1 className="page-hiding">  {teamName} matches  in {year} </h1>
      {
             matches.map(match => {

                return <MatchDetailCard key={match.id} teamName={teamName} match ={match} />
             })
         }
      </div>
        
    
    </div>
}

export default MatchPage