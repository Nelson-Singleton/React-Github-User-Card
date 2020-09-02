import React from 'react'


function Followers(props){
    return(
            <div class = "followerContainer">
            
                
                    {
                    props.followers.map(item =>
                        <div class ="followerCard">
                        <h3>{item.login}</h3>
                        </div>     
                    )                        
                    }
                
            </div>
    )
}

export default Followers