import React from "react";
import './Home.css';
import {Link} from 'react-router-dom';
import illustrations from '../assets/Images/Illustration.svg';
import client1 from '../assets/Images/client1.svg';
import client2 from '../assets/Images/client2.svg';
import client3 from '../assets/Images/client3.svg';
import client4 from '../assets/Images/client4.svg';
import client5 from '../assets/Images/client5.svg';
import client6 from '../assets/Images/client6.svg';
import client7 from '../assets/Images/client7.svg';
import Membership from '../assets/Images/Membership.svg';
import Nationals from '../assets/Images/National.svg';
import Clubs from '../assets/Images/Clubs.svg';
import Rafiki from '../assets/Images/rafiki.svg';
import members from '../assets/Images/2.svg';
import event from '../assets/Images/8.svg';
import clubs from '../assets/Images/4.svg';
import payments from '../assets/Images/1.svg';
import pana from '../assets/Images/pana.svg';
import customers from '../assets/Images/customers.svg';
import Right2 from '../assets/Images/Right2.svg';
import one from '../assets/Images/image 18.svg';
import two from '../assets/Images/image 19.svg';
import three from '../assets/Images/image 20.svg';
// import Readmore from '../assets/Images/Right.png';


function Home()
{
    return(
        <section className='home'>

              <div className='hero'>

                <div className='hero1'>
                    <h3>
                        Lessons and Insights
                    </h3>
                    <h2> from 8 Years</h2>
                    <p>Where to grow your business as a photographer: site or social media?</p>
                    <button>Register</button>

                </div>

                <div className='hero2'>
             <img src={illustrations} alt="illustration" />

                </div>



            </div>

            <div className='clients'>

                <h4>Our Clients</h4>
                <p>We have been working with some fortune 500+ clients</p>
                <div className='clientlist'>
                    <ul>
                        <li><img src={client1} alt="client1" /></li>
                        <li><img src={client2} alt="client2" /></li>
                        <li><img src={client3} alt="client3" /></li>
                        <li><img src={client4} alt="client4" /></li>
                        <li><img src={client5} alt="client5" /></li>
                        <li><img src={client6} alt="client6" /></li>
                        <li><img src={client7} alt="client7" /></li>
                    </ul>
                </div>

            </div>

            <div className='manage'>
                <h3>Manage your entire community</h3>
                <h3>in a single system</h3>
                <p>Who is nextcent suitable for?</p>

            </div>


            <div className='managefeature'>

                <div className="member">
                    <img src={Membership} alt="membership" />
                    <h3>Membership Organizations</h3>
                    <p>Our membership management software provides full automation of membership renewals and payments</p>

                </div>

                <div className="member">
                    <img src={Nationals} alt="national" />
                    <h3>National Associations</h3>
                    <p>Our membership management software provides full automation of membership renewals and payments</p>


                </div>

                <div className="member">
                    <img src={Clubs} alt="clubs" />
                    <h3>Clubs and Groups</h3>
                    <p>Our membership management software provides full automation of membership renewals and payments</p>
                </div>

            </div> 
            

            <div className="unseen">

                <div>
                    <img src={Rafiki} alt="unseenimage" />
                </div>

                <div className="unseen1">
                    <h3>The unseen of spending three years at Pixelgrade</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae a minus debitis exercitationem fugit impedit maxime saepe harum accusantium. Minus consequatur reiciendis ea molestiae corrupti dignissimos aperiam quas! Pariatur, vitae.
                    Temporibus voluptate accusantium quidem minima, animi, qui natus, debitis tenetur laborum exercitationem doloribus ducimus ullam possimus distinctio dolor eveniet. Impedit sapiente officia consequuntur laborum incidunt neque atque consequatur amet maiores.</p>
                <br></br>
                <br></br>
                <button>Learn More</button>
                </div>

            </div>


            <div className="home1">

                <div className="help">
                    <h3>Helping a local </h3>
                    <h2>business reinvent itself</h2>
                    <p>We reached here with our hard work and dedication</p>
                </div>

                <div className="helpfeature">
                    <div>
                        <ul>
                            <li><img src={members} alt="members" />
                            <div> <h3>2,245,341</h3>
                            <p>Members</p></div>
                           </li>

                            <li><img src={event} alt="event bookings" />
                            <div> <h3>828,867</h3>
                            <p>Event Bookings</p></div>
                           </li>
                           
                        </ul>

                    </div>

                    <div>
                          <ul>
                            <li><img src={clubs} alt="clubs" />
                            <div> <h3>46,328</h3>
                            <p>Clubs</p></div>
                           </li>

                            <li><img src={payments} alt="payments" />
                            <div> <h3>1,926,436</h3>
                            <p>Payments</p></div>
                           </li>
                           
                        </ul>

                    </div>
                </div>

            </div>


              <div className="unseen">

                <div>
                    <img src={pana} alt="unseenimage" />
                </div>

                <div>
                    <h3>How to design your site footer like we did</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae a minus debitis exercitationem fugit impedit maxime saepe harum accusantium. Minus consequatur reiciendis ea molestiae corrupti dignissimos aperiam quas! Pariatur, vitae.
                    Temporibus voluptate accusantium quidem minima, animi, qui natus, debitis tenetur laborum exercitationem doloribus ducimus ullam possimus distinctio dolor eveniet. Impedit sapiente officia consequuntur laborum incidunt neque atque consequatur amet maiores.</p>
                <br></br>
                <br></br>
                <button>Learn More</button>
                </div>

            </div>


            <div className="customers">
                <div>
               <img src={customers} alt="customers" />

                </div>

                <div>
                    <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                    <h3>Tim Smith</h3>
                    <p>British Dragon Boat Racing Association</p>
                      <ul>
                        <li><img src={client1} alt="client1" /></li>
                        <li><img src={client2} alt="client2" /></li>
                        <li><img src={client3} alt="client3" /></li>
                        <li><img src={client4} alt="client4" /></li>
                        <li><img src={client5} alt="client5" /></li>
                        <li><img src={client6} alt="client6" /></li>
                        <li>Meet all customers <img src={Right2} alt="right2" /></li>
                       
                    </ul>

                </div>
            </div>


            <div className="marketing">
                <div className="market1">
                                    <h3>Caring is the new marketing</h3>
                <p>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
                </div>

                <div className="feature">
                    <div className="feature1">
                        <img className="fea" src={one} alt="fea1" />
                        <div className="card">
                            <p>Creating Streamlined Safeguarding Processes with OneRen</p>
                            <div >
                         <Link to='/readmore'>Readmore  </Link>
                         <img className="readmore" src={Right2} alt="readmore" />
                            </div>
                            

                        </div>
                    </div>

                     <div className="feature1">
                        <img className="fea" src={two} alt="fea2" />
                          <div className="card">
                            <p>What are your safeguarding responsibilities and how can you manage them?</p>
                            <div >
                         <Link to='/readmore'>Readmore  </Link>
                         <img className="readmore" src={Right2} alt="readmore" />
                            </div>
                        </div>
                    </div>



                     <div>
                        <img className="fea" src={three} alt="fea3" />
                          <div className="card">
                            <p>Revamping the Membership Model with Triathlon Australia</p>
                            <div >
                         <Link to='/readmore'>Readmore  </Link>
                         <img className="readmore" src={Right2} alt="readmore" />
                            </div>
                        </div>
                    </div>

                </div>

                

            </div>

        </section>
    )
}

export default Home;
