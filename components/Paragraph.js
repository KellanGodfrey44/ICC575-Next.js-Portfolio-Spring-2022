import classNames from 'classnames/bind'

import styles from './paragraph.module.scss'

let cx = classNames.bind(styles);

export default function Paragraph({ children, intro }) {
    let paragraphClasses = cx({
        paragraph : true,
        intro : intro 
    });

    return <p className={paragraphClasses}>{children}</p>
}
