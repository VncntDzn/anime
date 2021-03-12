import React from 'react';
import Modal from 'react-modal';
import styles from 'scss/main.module.scss';

const CustomModal = ({ onClick, isOpen, details }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClick}
      contentLabel='Example Modal'
      ariaHideApp={false}
      className={styles.customModal}
    >
      <button onClick={onClick}>CLOSE</button>
      <h1>Rank: {details.rank}</h1>
      <h1>Title: {details.title}</h1>

      <h1>Start Date: {details.start_date}</h1>
      <h1>End Date: {details.end_date || 'Undetermined'}</h1>

      <h1>Score: {details.score}</h1>
      <h1>Episodes: {details.episodes || 0}</h1>

      <p>
        <span style={{ fontWeight: 'bold' }}>Synopsis:</span> {details.synopsis}
      </p>
      <img src={details.image_url} alt={details.title} />
    </Modal>
  );
};

export default CustomModal;
