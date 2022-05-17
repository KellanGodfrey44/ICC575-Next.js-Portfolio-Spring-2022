import classNames from 'classnames/bind'
import styles from './button.module.scss'
let cx = classNames.bind(styles);

import Link from 'next/link'

export default function Button({ label, variant, path }){

    // className="btn primary"
    let buttonClasses = cx({
        btn : true,
        primary : variant === "primary", 
        secondary : variant === "secondary"
    });

    return <button className={buttonClasses}>
        <Link href={path}>
            <a>
                {label}
            </a>
        </Link>
        
        
        </button>
}
