function Header(){
    const name = "Shilo Wilson";
    const profession = "Quantitative Developer";
    return (
        <header className="bg-blue-100 text-left flex flex-col items-start justify-center pl-6">
        <h1 className="text-2xl font-bold text-blue-800">{name}</h1>
        <p>{profession}</p>
      </header>
    );
}

export default Header;