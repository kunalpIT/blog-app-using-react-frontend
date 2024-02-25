import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handlePageClick = (pageNumber, event) => {
        event.preventDefault();
        paginate(pageNumber);
    };

    return (
        <nav>
            <ul className='pagination justify-content-center'>
                {/* Display Previous button */}
                {currentPage > 1 && (
                    <li className='page-item'>
                        <a onClick={(event) => handlePageClick(currentPage - 1, event)} href='!#' className='page-link'>
                            Previous
                        </a>
                    </li>
                )}
                {/* Display Next button */}
                {currentPage < Math.ceil(totalPosts / postsPerPage) && (
                    <li className='page-item'>
                        <a onClick={(event) => handlePageClick(currentPage + 1, event)} href='!#' className='page-link'>
                            Next
                        </a>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Pagination;
