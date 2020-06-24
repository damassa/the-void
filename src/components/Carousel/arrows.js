import React from 'react'
import propTypes from 'prop-types'
import Arrow from '../../assets/icons/arrow.svg'

const styles = {
  wrapper: {
    position: 'absolute',
    width: '100%',
    zIndex: '100',
    bottom: '0',
    textAlign: 'center'
  },
  btn: {
    width: '60px',
    height: '60px',
    cursor: 'pointer',
    userSelect: 'none',
    position: 'absolute',
    bottom: '170px',
    backgroundImage: `url(${Arrow})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    filter: 'invert(59%) sepia(59%) saturate(307%) hue-rotate(1deg) brightness(87%) contrast(93%)'
  },
  left: {
    left: '15px',
    transform: 'rotate(180deg)'
  },
  right: {
    right: '15px'
  }
}

export default function Buttons (props) {
  const prevBtnStyle = Object.assign({}, styles.btn, styles.left)
  const nextBtnStyle = Object.assign({}, styles.btn, styles.right)
  const { index, total, loop, prevHandler, nextHandler } = props
  return (
    <div style={styles.wrapper}>
      { (loop || index !== 0) && (
        <div style={prevBtnStyle} onClick={prevHandler}></div>
      )}
      { (loop || index !== total - 1) && (
        <div style={nextBtnStyle} onClick={nextHandler}></div>
      )}
    </div>
  )
}

Buttons.propTypes = {
  index: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  prevHandler: propTypes.func,
  nextHandler: propTypes.func
}