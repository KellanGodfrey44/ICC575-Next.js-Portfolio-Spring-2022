import classNames from 'classnames/bind'
import styles from './row.module.scss'

let cx = classNames.bind(styles);

const Row = ({ children, alignItems }) => {
    let rowClasses =cx({
        row: true, 
        [`align-items-${alignItems}`] : alignItems
    })
    return <div className={rowClasses}>{children}</div>
}
export default Row 