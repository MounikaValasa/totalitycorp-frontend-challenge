import './home.css';
import Img from '../img/img.png';

function Home() {
  return (
    <div>
        <div className="content">
            <div className="textBox">
                <h2> <span>The best Coffee and Espresso</span></h2>
                <p>
                Starbucks opened its first store, offering fresh-roasted coffee beans, tea and spices from around the world for our customers to take home.
                 Our name was inspired by the classic tale, “Moby-Dick,” evoking the seafaring tradition of the early coffee traders.
                </p>
                <a href="#/">Learn More</a>
            </div>
            <div className="imgBox">
                <img src={Img} alt="imgbox"/>
            </div>
        </div>
        <ul className="sci">
          <li><a href="#/"><i className="fa fa-facebook" aria-hidden="true"></i> </a></li>
          <li><a href="#/"><i className="fa fa-twitter" aria-hidden="true"></i> </a></li>
          <li><a href="#/"><i className="fa fa-instagram" aria-hidden="true"></i> </a></li>
        </ul>
    </div>
  );
}

export default Home;
