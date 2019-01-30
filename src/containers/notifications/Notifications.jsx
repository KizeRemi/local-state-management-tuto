import React from 'react';
import withNotification from './withNotification';

const Button = ({ newNotification }) => (
  <button
    onClick={() => newNotification({
      header: 'Nouvelle notification',
      content: 'J\'ai cliqué sur le bouton !',
    })}
  >
    Ajouter une notification
  </button>
);

export default withNotification(Button);
