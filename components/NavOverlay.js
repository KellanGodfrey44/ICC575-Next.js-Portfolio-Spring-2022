import ButtonUI from './ButtonUI';
import styles from './navoverlay.module.scss'

const NavOverlay = ({ closeHandler }) => {
    return <div className={styles.navoverlay}>
        <ButtonUI
            icon="close"
            color="white"
            clickHandler={closeHandler}
        />
        Nav overlay goes here.
    </div>
}
export default NavOverlay;
