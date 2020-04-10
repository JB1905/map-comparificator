import React from 'react';

import './ErrorScreen.scss';

interface Props {
  title: string;
  message: string;
}

const ErrorScreen: React.FC<Props> = ({ title, message }) => {
  return (
    <div className="error-screen">
      <h3 className="bp3-heading">{title}</h3>
      <h5 className="bp3-heading">{message}</h5>
    </div>
  );
};

export default ErrorScreen;
