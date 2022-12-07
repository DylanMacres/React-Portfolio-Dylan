
import { useNavigate } from "react-router-dom";
import notetaker from "../assests/notegif.png";
import bandopedia from "../assests/bandopedia.png";
import profilegen from "../assests/profilegen.png";
import githublogo from "../assests/githublogo1.png";
import "bootstrap/dist/css/bootstrap.min.css";
const Projects = () => {
  const navigate = useNavigate();
  navigate("/projects");

  return (
    <>
       <div className='container'>
        <div className='row'>
            <div className='col-md-12 col-lg-6'>
            <div>
              <div>
                <a href="https://github.com/DylanMacres/ExpressNoteTaker/">
                  <h3>Express Note Taker</h3>
                  <p>Using Node and Express I was able to create an note taker app that saves notes!</p>
                </a>
                <a href="https://github.com/DylanMacres/ExpressNoteTaker">
                  <img alt="" width="130" height="50" src={githublogo} />
                </a>
              </div>
              <a href="https://github.com/DylanMacres/ExpressNoteTaker">
                <img alt="" width="400" height="200" src={notetaker} />
              </a>
            </div>
            <div>
              <a href="https://joseeenrique.github.io/Music-App/main-page.html">
                <h3>Bandopedia</h3>
                <p>Using APIs and frontend JavaScript, me and my group created an app to track artist's albums and tours!</p>
              </a>
              <a href="https://joseeenrique.github.io/Music-App/main-page.html">
                <img alt="" width="130" height="50" src={githublogo} />
              </a>
            </div>
            <a href="https://joseeenrique.github.io/Music-App/main-page.html ">
              <img alt="" width="400" height="200" src={bandopedia} />
            </a>
          </div>
          <div>
            <a href="https://github.com/DylanMacres/TeamProfileGen">
              <h3>Team Profile Generator!</h3>
              <p>A backend profile generator to track employees and data about them!</p>
            </a>
            <a href="https://github.com/DylanMacres/TeamProfileGen">
              <img alt="" width="130" height="50" src={githublogo} />
            </a>
          </div>
          <a href="https://github.com/DylanMacres/TeamProfileGen ">
            <img alt="" width="400" height="200" src={profilegen} />
          </a>
        </div>

        <button  type="button" class="btn btn-primary"onClick={() => navigate("/")}>Click Me to go Back Home!</button>
      </div>
    </>
  );
};

export default Projects;
