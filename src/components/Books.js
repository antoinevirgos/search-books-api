import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header"
import Book from "./BookCard";
import FooterPagination from "./FooterPagination";

function Books() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(9);
    const [search, setSearch] = useState("Musso");
  
    useEffect(() => {
        const fetchBooks = async() => {
          setLoading(true);

          const results = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${search}&maxResults=40`);
          setBooks(results.data.items);

          setLoading(false);
        };
    
        fetchBooks();
    }, [search]);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const indexLastBook = currentPage * booksPerPage;
    const indexFirstBook = indexLastBook - booksPerPage;

    let booksCurrentPage = [];
    let maxNumberPages = 1;

    if (books) {
        booksCurrentPage = books.slice(indexFirstBook, indexLastBook);

        const totalBooks = books.length;
        maxNumberPages = Math.ceil(totalBooks / booksPerPage);
    } else {
        return (
            <>
                <h3 className="no-results-title">Aucun livre ne correspond à l'auteur recherché.</h3>
            </>
        )
    }

    function DisplayBooks({ booksCurrentPage }) {
        return (
            <>                
                <section className="books">                
                    <div className="books-cards">
                        {booksCurrentPage.map((book) => (
                            <Book 
                                key={book.id} 
                                title={book.volumeInfo.title} 
                                author={book.volumeInfo.authors} 
                                description={book.volumeInfo.description} 
                                date={book.volumeInfo.publishedDate} 
                                url={book.saleInfo.buyLink}
                                image={book.volumeInfo.imageLinks}>
                            </Book>
                        ))}
                    </div>
                </section>
            </>
        );
    }

    if (!loading) {
        return (
            <>
                <Header
                    searchText={setSearch}
                    text={search}
                >
                </Header>
                <hr />
                <DisplayBooks 
                    booksCurrentPage={booksCurrentPage} 
                    loading={loading}>
                </DisplayBooks>
                <FooterPagination
                    currentPage={currentPage}
                    maxNumberPages={maxNumberPages}
                    paginate={paginate}>
                </FooterPagination>
            </>
        );
    } else {
        return <h3 className="loading-title">Chargement en cours...</h3>;
    }
}

export default Books;