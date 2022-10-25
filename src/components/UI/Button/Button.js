import react from 'react';
// import styled from 'styled-components';
import styles from './Button.module.css';



//tact template styled method
// const Button = styled.button`

//   font: inherit;
//   background: #40005d;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   /* background: #8b005d; */
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

// ${'' /* we can also add media queries while using  */}
//   @media (min-width: 768px){
//     width: auto;
//   }


// &:focus {
//   outline: none;
// }

// &:hover,
// &:active {
//   background: #ac0e77;
//   border-color: #ac0e77;
//   box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
// }

// `;



// import './Button.css';

const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
