import React from "react";

function Projects(){


   
    return(
        <div id="Project">
            
            <h1 id="Projectheading">Projects</h1>
            <div className="projectGrid">
            <div className="projectItem projectItem1" onClick={event =>  window.location.href='https://github.com/Arindam1233/Secretsss.git'}>
            <div class="overlay">
          <div class="text">Secrets app uses google and linkedin authentication to login and store secrets.</div>
         </div>
            </div>
            <div className="projectItem projectItem2" onClick={event =>  window.location.href='https://github.com/Arindam1233/My-first-React-app'}>
            <div class="overlay">
          <div class="text" >Keeper app keeps tracks of your notes and gives you access to delete them also.</div>
         </div>
                
            </div>
            <div className="projectItem projectItem3" onClick={event =>  window.location.href='https://github.com/Arindam1233/To-do-webapp'}>
            <div class="overlay">
          <div class="text">To do app keeps check on your recent tasks and removes them when checked</div>
         </div>
            </div>
    

            </div>
          
            
        </div>
    )
}
export default Projects;