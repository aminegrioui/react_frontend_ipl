
import React from 'react'
import './TeamTitel.scss'
import {Link} from 'react-router-dom'

const TeamTitel = ({teamName}) =>{

  
    const otherRoute=`/teams/${teamName}`
   
    return   <div className="TeamTitel">

                     <Link to={otherRoute}>
                          <h1>{teamName}</h1>
                    </Link>
                   
            </div>

}
export default TeamTitel