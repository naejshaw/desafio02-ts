import React, { MouseEventHandler } from 'react';
import './Botao.css'

interface IBotao {
  title: string;
  onClick: MouseEventHandler;
}

export const Botao: React.FC<IBotao> = ({ title, onClick }) => {
  return (
    <div>
      <button id='botao' onClick={onClick}>{title}</button>
    </div>
  );
};
