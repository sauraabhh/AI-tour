import './About.css'

function About() {
  return (
  
    <div className="about-container">
        <div id="left-about">
            <div id="cards">
                <div className="cards">
                    <img src="https://t4.ftcdn.net/jpg/04/02/59/25/360_F_402592576_FhbnDVdsceZFvCjxML4A1O6kzKIn7huC.jpg" alt="" />
                </div>
                <div id='card-2' className="cards">
                    <img src="https://a.travel-assets.com/findyours-php/viewfinder/images/res40/89000/89537-India-Gate.jpg" alt="" />
                </div>
            </div>
            <div id="card">
                <img src="https://imgs.search.brave.com/dloeqfxDywHdZKpiY-WdFBK4EyYyHm3AtVKwvQevIEc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTA2/ODEyNjQxL3Bob3Rv/L2luZGlhLWdhdGUu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PTNaeEpnUUFjRTZV/V3E2emY5T05kZnBE/cHdDeU45aUo1dkRM/RVFOYVZGUm89" alt="" />
            </div>
        </div>
        <div style={{paddingLeft : "15px", paddingRight:"15px"}} id="right-about">
            <h1 style={{marginTop : "45px"}}>This place is recommended for you </h1>
            <h1 style={{textAlign:"center", fontSize : "50px" , fontFamily: "Cinzel"}}>DELHI</h1>
            <div id="places">
                <h1 style={{textAlign : "start", fontSize:"22px"}}>INDIA GATE :  </h1>
                <p style={{textAlign : "start",fontSize : "16px"}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet id quidem possimus doloribus hic consequatur sint accusamus officia alias odit unde similique, libero voluptatem ex saepe cupiditate? Similique, repellendus sit. <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio porro voluptates placeat similique id temporibus, explicabo vero exercitationem! Assumenda, inventore vitae impedit dolor reiciendis ea? Architecto sunt optio voluptatum explicabo!</p>
            </div>
            <h3 style={{marginTop: "30px", fontFamily:"Cinzel"}}>Unleash Your Inner Adventurer!! </h3>
        </div>
    </div>


  
  )
}

export default About
