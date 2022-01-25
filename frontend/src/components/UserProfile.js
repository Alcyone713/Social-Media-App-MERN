import React from 'react';
import './UserProfile.css'
import Mediafeed from './MediaFeed';
import { Link } from 'react-router-dom';

export default function UserProfile() {
  return <div>
      <div>
       <div className="container2">
        <div>
            
            <div className="profile2">
                <img id="photo2"
                    src="https://images.unsplash.com/photo-1642641387757-85575bf50fd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
                    alt=""/>
                <h4 id="name2">Manasvi singh</h4>
                <h6 id="desc2">Web developer</h6>
                <button id="edit2">Edit</button>
            </div>
            <div>
               <table style={{marginTop: "20px",marginLeft:"30px", width: "220px"}}>
                   <tr>
                       <th>98</th>
                       <th>3.5k</th>
                       <th>900</th>
                    </tr>
                    <tr>
                        <td>posts</td>
                        <td>Followers</td>
                        <td>Following</td>
                     </tr>

               </table>
            </div>
            <div className="description2">
                <h6 id="Nam2">Manasvi singh</h6>
                <p id="paragraph2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eveniet voluptate nesciunt repellendus omnis molestiae modi deleniti? Necessitatibus, perspiciatis doloremque excepturi, quia adipisci harum non voluptas odio ipsa possimus deserunt!</p>
            </div>
            <div className="story2">
                <h5>Your Stories</h5>
                <img className="stories2" src="https://images.unsplash.com/photo-1640976402552-771b471fc00e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" alt=""/>
                <img className="stories2" src="https://images.unsplash.com/photo-1641412135062-9e34b53dd580?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" alt=""/>
                <img className="stories2" src="https://images.unsplash.com/photo-1627484986972-e544190b8abb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" alt=""/>
                <img className="stories2" src="https://images.unsplash.com/photo-1642554924410-bfd9bc12ea78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80" alt=""/>
                <img className="stories2" src="https://images.unsplash.com/photo-1642548666500-7990b88e691f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt=""/>
                <img className="stories2" src="https://images.unsplash.com/photo-1642629026109-3109c5c9f969?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60" alt=""/>
            </div>
            <div className="createPost2">
                
                <Link to='/createpost' style={{color: "white"}}>
                <button id="btn2" style={{cursor:"pointer"}}>Create Post
                </button>
                </Link>
            </div>
        </div>
   </div>
   </div>
  </div>;
}
