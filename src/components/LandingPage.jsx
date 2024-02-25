import React from 'react';
import SearchBar from './SearchBar';
import Posts from './Posts';
import Pagination from './Pagination';
import { Helmet } from 'react-helmet';


const LandingPage = (props) => {

    let { searchTxt, setSearchTxt, setCurrentPage, currentPage, paginate, totalPosts, currentPosts, postsPerPage } = props
    return (
        <div>
            <SearchBar searchTxt={searchTxt} setSearchTxt={setSearchTxt} setCurrentPage={setCurrentPage} />

            <Posts
                posts={currentPosts} />

            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={totalPosts}
                paginate={paginate}
                currentPage={currentPage}
            />

        </div>
    )
}

export default LandingPage