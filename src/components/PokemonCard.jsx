import React from 'react';
import PropTypes from 'prop-types';
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
PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  }) 
}
export default PokemonCard;
