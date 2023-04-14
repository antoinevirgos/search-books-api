import SearchBarBooks from "./SearchBarBooks";

function Header({searchText, text}) {  
    return (
        <header>
            <h1 className="title">Google Books API</h1>

            <SearchBarBooks
                searchText={searchText}
                text={text}
            >
            </SearchBarBooks>
        </header>
    );
}

export default Header;