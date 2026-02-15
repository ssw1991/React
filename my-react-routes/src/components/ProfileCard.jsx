function ProfileCard({ name, bio, hobbies, onHobbyClick }) {
    return (
        <div className="border border-gray-300 p-5 m-5 max-w-xs text-center shadow-md mx-auto">
            <h2 className="profile-name">{name}</h2>
            <p className="profile-bio">{bio}</p>
            <h3>Hobbies:</h3>
            <ul>
                {hobbies.map((hobby, index) => (
                    <li key={index} onClick={() => onHobbyClick(hobby)}>
                        {hobby} 
                    </li>
                ))}
            </ul>   
        </div>
    );    
}

export default ProfileCard;