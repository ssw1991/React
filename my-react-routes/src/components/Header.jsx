function Header(){
    const name = "Shilo Wilson";
    const profession = "Quantitative Developer";
    return (
        <header className="bg-blue-100 p-4 text-center">
        <h1 className="text-2xl font-bold text-blue-800">{name}</h1>
        <p>{profession}</p>
      </header>
    );
}

export default Header;