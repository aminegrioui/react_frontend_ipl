import React from 'react'
import {Link} from 'react-router-dom'

import './YearSelectore.scss'

const YearSelector = ({teamName}) =>{

    let arrayYear=[]



    for (let i=2008; i<=2020;i++){
        arrayYear.push(i)
    }

    return <div >
        <ol className="YearSelector">
        {
            arrayYear.map((year) =>{
               return <li className="YearSelector-h3" key={year}>
                              <Link to={`/teams/${teamName}/matches/${year}`}>
                                      {year}
                              </Link>  
                   
                   </li>
            })
        }
        </ol>
       
    </div>

}
export default YearSelector