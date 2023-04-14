import { useState } from "react";

function SearchBooks({searchText}) {
    const [text, setText] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        searchText(text);
    }

    return (
        <form className="books-search-form" onSubmit={handleSubmit}>
            <input type="text" className="books-search" placeholder="Musso, Hugo, Verne..." value={text} 
                onChange={(e) => setText(e.target.value)}/>
            <input type="submit" className="books-search-button" value="Rechercher"/>
        </form>
    );
};

export default SearchBooks;