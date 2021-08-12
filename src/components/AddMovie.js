import React from 'react'
import Modal from 'react-modal';
import { useState } from 'react';
import StarRating from './StarRating';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');
const AddMovie = ({handleAdd}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [rating, setRating] = useState(1);
    const [image, setImage] = useState("");
    function openModal() {
        setIsOpen(true);
      }
      function closeModal() {
        setIsOpen(false);
      }
      const handleRating = (r) => setRating(r)
      const handleSubmit = (e) => {e.preventDefault();
        const newMovie ={
                id: Math.random(),
                image: image,
                rating: rating,
                name: name,
                date: date,
        }
        handleAdd(newMovie);
        closeModal();
    }
    return (
        <div>
             <button className="btn add-movie-btn" onClick={openModal}>Add Movie</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
                       <form onSubmit={handleSubmit}>
                 <label>name</label>
                 <input required type="text" value={name} onChange={(e) => setName (e.target.value)} />
                 <label>Date</label>
                 <input type="date" value={date} onChange={(e) => setDate (e.target.value)}  />
                 <label>Rating</label>
                 <StarRating rating={rating} handleRating={handleRating}/>
                 <label>Poster</label>
                 <input required type="URL" value={image} onChange={(e) => setImage (e.target.value)}  />
                 <div>
                     <button className="btn btn-primary" type="submit">Confirm</button>
                     <button className="btn btn-primary" onClick={closeModal}>Cancel</button>
                 </div>
             </form>
      </Modal>
        </div>
    )
}

export default AddMovie
