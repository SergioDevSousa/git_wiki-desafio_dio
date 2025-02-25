import React from 'react';
import { ItemContainer } from './styles';

function ItemRepo() {
  return (
    <ItemContainer>
        <h3>teste</h3>
        <p>dio</p>
        <a href="#">Ver Repositório</a><br />
        <a href="#" className="remover">Remover</a>
        <hr />
    </ItemContainer>
  )
}

export default ItemRepo;
