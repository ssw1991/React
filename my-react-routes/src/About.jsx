import { Outlet, Link} from "react-router-dom";
function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page of our React application.</p>
      <nav className="mt-6">
      <ul className="flex space-x-4 justify-center">
        <li>
          <Link to="team"><span className="text-blue-500 hover:underline">Our Team</span></Link>
        </li>
        <li>
          <Link to="/"><span className="text-blue-500 hover:underline">Back to Home</span></Link>
        </li>
    
      </ul>
    </nav>
      <div className="mt-8 w-full max-w-4xl>">
        <Outlet />
      </div>
    </div>
  )
}
export default About;