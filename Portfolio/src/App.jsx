
import './App.css'
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import ProjectLists from './components/ProjectList.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ProfileCard from './components/ProfileCard.jsx';

function App() {
  
  const handleHobbyClick = (hobby) => {
    alert(`You clicked on hobby: ${hobby}`);
  };
  const hobbies = ["coding", "reading", "gaming"];
  return (
    <div>
      <Header />
      <About />
      <ProjectLists />
      <ProfileCard 
        name="John Doe" 
        bio="A passionate developer." 
        hobbies={hobbies}
        onHobbyClick={handleHobbyClick} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
