import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAot } from './redux/animeSlice';
import AOT_BG from './assets/AOT_BG.png';
import CustomModal from 'components/CustomModal';
import styles from 'scss/main.module.scss';

const Header = () => {
  const dispatch = useDispatch();
  const aotAnimeData = useSelector((state) => state.aotResult);
  const status = useSelector((state) => state.status);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [details, setDetails] = useState(false);
  const getAnime = () => {
    setIsOpen(!modalIsOpen);
    setDetails(aotAnimeData);
  };

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAot());
    }
  }, [status, dispatch]);

  return (
    <div>
      <CustomModal isOpen={modalIsOpen} onClick={getAnime} details={details} />
      <div className={styles.header}>
        <img
          className={styles.header__img}
          src={AOT_BG}
          alt='Attack on Titan Final Season'
        />
        <div className={styles.header__text}>
          <h1 className={styles.header__title}>Attack On Titan</h1>
          <p className={styles.header__synopsis}>
            Gabi Braun and Falco Grice have been training their entire lives to
            inherit one of the seven titans under Marley's control and aid their
            nation in eradicating the Eldians on Paradis. However, just as all
            seems well for the two cadets, their peace is suddenly shaken by the
            arrival of Eren Yeager and the remaining members of the Survey
            Corps.
          </p>
          <button className={styles.header__button} onClick={getAnime}>
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
