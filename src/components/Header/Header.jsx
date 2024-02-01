import styles from './Header.module.css'; 

import moonIcon from '../../assets/icon-moon.svg'
function Header() {
  return (
    <header className={styles.container}>
      <h1>devfinder</h1>
      <button className={styles.btn}>Dark <img src={moonIcon} /></button>
    </header>
  )
}

export default Header