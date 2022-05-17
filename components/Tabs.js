import classNames from 'classnames/bind'

import styles from './tabs.module.scss'

let cx = classNames.bind(styles)

export default function Tabs({ items, activeItem, clickHandler }) {
    //console.log({activeItem});
    return <ul className={styles.tabs}>
        {items.map((item, index)  => {
            // "tabItem active"
            let tabItemClasses = cx({
                tabItem : true,
                active : activeItem === item  
            })
            return <li 
            key={index}
            className={tabItemClasses}
            onClick={() => {
                clickHandler(item)
            }}
        >{item}</li>
        })}
    </ul>
}
