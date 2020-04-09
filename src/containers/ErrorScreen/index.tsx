import React from 'react';

interface Props {
  title: string;
  message: string;
}

const ErrorScreen: React.FC<Props> = ({ title, message }) => {
  return (
    <div className="error-screen">
      <h2 className="bp3-heading">{title}</h2>
      <h3 className="bp3-heading">{message}</h3>
    </div>
  );
};

export default ErrorScreen;
