import React from 'react';

const FooterPagination = ({ currentPage, maxNumberPages, paginate }) => {
    let nextPage = currentPage;
    if (currentPage !== maxNumberPages) {
        nextPage = currentPage + 1; 
    }

    let previousPage = currentPage;
    if (currentPage !== 1) {
        previousPage = currentPage - 1; 
    }

    return (
        <footer>
            <input
                type="submit"
                id="previous-page"
                value="<"
                onClick={() => paginate(previousPage)}
                disabled = {currentPage === 1 ? true : ""}
            />
            <p>{currentPage} / {maxNumberPages}</p>
            <input
                type="submit"
                id="next-page"
                value=">"
                onClick={() => paginate(nextPage)}
                disabled = {currentPage === maxNumberPages ? true : ""}
            />
        </footer>
    );
}

export default FooterPagination;