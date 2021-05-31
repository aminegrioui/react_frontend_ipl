import React from "react"
import {Link} from 'react-router-dom'

const MatchSamllCard = ({match,teamName}) =>{
 
   
    if (!match) {
        return null;
    }
    const otherTeamName = match.team1 === teamName ? match.team2:match.team1;
    const otherRoute=`/teams/${otherTeamName}`
    return <div className="MatchSamllCard">
         <h3>  
         vs <Link to={otherRoute}>
              {otherTeamName} 
             </Link>
             
             
             </h3>
         <p>   {match.matchWinner} won by {match.resultMargin} {match.result}</p>
     
    </div>
}

export default MatchSamllCard