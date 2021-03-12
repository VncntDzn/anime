import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUpComingAnime } from '../redux/animeSlice';
import ReactPaginate from 'react-paginate';
import styles from 'scss/main.module.scss';

import CustomModal from 'components/CustomModal';

const UpcomingLists = () => {
  const dispatch = useDispatch();
  const upcomingAnimeData = useSelector((state) => state.upcomingAnimeResults);
  const status = useSelector((state) => state.status);
  const [currentPage, setCurrentPage] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [details, setDetails] = useState(false);
  const getAnime = (res) => {
    setIsOpen(!modalIsOpen);
    setDetails(res);
  };
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUpComingAnime());
    }
  }, [status, dispatch]);

  let upComingAnimeContent;

  // get the current page
  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };
  const PER_PAGE = 10;
  const offset = currentPage * PER_PAGE;
  let pageCount = 0;

  if (status === 'loading') {
    upComingAnimeContent = <div className='loader'>Loading...</div>;
  } else if (status === 'succeeded') {
    // sets the number of the page count
    pageCount = Math.ceil(upcomingAnimeData.length / PER_PAGE);
    // slice args (start, end)
    upComingAnimeContent = upcomingAnimeData
      .slice(offset, offset + PER_PAGE)
      .map((res, i) => {
        return (
          <div key={res.mal_id}>
            <div className={styles.container__lists}>
              <img
                className={styles.container__img}
                src={res.image_url}
                alt={res.title}
              />

              <button
                className={styles.container__button}
                onClick={() => getAnime(res)}
              >
                Details
              </button>
            </div>
          </div>
        );
      });
  }

  return (
    <div>
      <CustomModal isOpen={modalIsOpen} onClick={getAnime} details={details} />
      <div className={styles.container}>
        <h1>Upcoming Anime</h1>
        <ReactPaginate
          previousLabel={'←'}
          nextLabel={'→'}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={styles.container__pagination}
          pageClassName={styles.container__paginationLink}
          previousLinkClassName={styles.container__paginationArrow}
          nextLinkClassName={styles.container__paginationArrow}
          disabledClassName={styles.container__paginationLink__disabled}
          activeClassName={styles.container__paginationLink__active}
        />
      </div>
      <div className={styles.container__content}>{upComingAnimeContent}</div>
    </div>
  );
};
export default UpcomingLists;
