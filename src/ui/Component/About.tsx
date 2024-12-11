import './About.css'
import img from '../images/taaj.png'

function About() {
  return (
  
  <div className="about-container">
        <div className="about-image">
            <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2023/03/Qutub-Minar.jpg" alt="Beautiful Destination"/>
        </div>
        <div className="about-content">
            <h1>Welcome to Delhi</h1>
            <p>
                {/* At ExploreWorld, we specialize in curating unforgettable travel experiences. 
                Whether it's wandering through the historic streets of Rome, basking in the serenity of Bali's beaches, 
                or hiking through the majestic Alps, we bring you closer to your dream destinations. */}
                The Qutub Minar, located in Mehrauli, Delhi, is one of the most iconic monuments in India and a UNESCO World Heritage Site. Standing at a height of 73 meters (240 feet), it is a stunning example of Indo-Islamic architecture. Built in the 12th century by Qutb-ud-din Aibak, the founder of the Delhi Sultanate, the minar was constructed to celebrate his victory over the Rajputs. The tower is made of red sandstone and marble, intricately adorned with carvings of Quranic verses and floral patterns, showcasing the artistic brilliance of that era.
            </p>
            <p>
                {/* Our mission is to make travel seamless and accessible, turning your travel dreams into reality. 
                With a dedicated team and a passion for discovery, we ensure that every journey with us is an adventure of a lifetime. */}
                {/* Over the centuries, the Qutub Minar has withstood earthquakes and damage, undergoing restoration by various rulers, including Firoz Shah Tughlaq and the British. Today, it stands as a testament to Delhi's rich history, blending cultural influences and architectural styles. A visit to the Qutub Minar offers not just a glimpse into medieval India but also a sense of awe at the ingenuity and craftsmanship of its creators. It remains a must-see destination for history and architecture enthusiasts. */}
            </p>
            {/* <a href="#">Learn More About Us</a> */}
        </div>
    </div>


  
  )
}

export default About
