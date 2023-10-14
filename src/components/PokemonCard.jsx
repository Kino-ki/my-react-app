import React from 'react';
import styles from './PokemonCard.module.css';

const PokemonCard = (props) => {
  console.log(props);

  return (
    <figure className={styles.container}>
      {props.pokemon.imgSrc !== undefined ? (
        <img src={props.pokemon.imgSrc} alt={props.pokemon.name.toUpperCase()} />
      ):(
        <p>???</p>
      )}
        <figcaption className={styles.text}>{props.pokemon.name.toUpperCase()}</figcaption>
    </figure>
  );
}
export default PokemonCard;
