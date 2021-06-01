import React from "react"

import TeamTitel from "../Components/TeamTitel"

import "./HomePage.scss"



const HomePage = () =>{

    let lastYear=2020

    const [teams,setTeams]=React.useState([])
  

    const fetchData =  async () =>{

        const reponse = await fetch(`http://localhost:8081/teams`)
        const data = await reponse.json()
        setTeams(data)
    }

    React.useEffect( () =>{
        fetchData()
    },  [] )

   

    return <div className="HomePage">

        <div className="header-section">
              <h1 className="app-name">  Java Brains IPL Databoard </h1>
        </div>
        <div className="team-grid">
            {teams.map((team) =>{
                return <TeamTitel teamName={team.teamName} />
            })}
        </div>
    
    </div>
}

export default HomePage