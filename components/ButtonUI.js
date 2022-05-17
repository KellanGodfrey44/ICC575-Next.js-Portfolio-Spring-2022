import classNames from 'classnames/bind'

import Image from 'next/image'
import styles from './buttonui.module.scss'

let cx = classNames.bind(styles);

const ButtonUI = ({ icon, color = "black", clickHandler }) => {

    let btnuiClasses = cx({
        btnui : true,
        [`${icon}`] : icon,
        inverted : color === "white"
    })


    return <button
     className={btnuiClasses }
     onClick={clickHandler} 
     >
        <Image
            src={`/images/icons/${icon}-${color}.svg`}
            alt={`${icon} icon`}
            width={32}
            height={32} 
        />

    </button>
}
export default ButtonUI
