import React from 'react';
import './Botao.css'

interface IBotao {
  title: string;
  event: () => void;
}

export const Botao: React.FC<IBotao> = ({ title, event }) => {
  return (
    <div>
      <button id='botao' onClick={event}>{title}</button>
    </div>
  );
};
