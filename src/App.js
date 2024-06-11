import React, { useState } from 'react';
import StarRating from './components/StarRating';
import Dialog from './components/Dialog';
import './css/style.css';

const App = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <div className="app">
      <StarRating />
      <button className="open-dialog" onClick={openDialog}>Open Dialog</button>
      {isDialogOpen && <Dialog onClose={closeDialog} />}
    </div>
  );
};

export default App;

