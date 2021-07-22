import React from 'react'
import styles from './Paginator.module.css'

const Paginator = (props) => {
    let pagesCount = Math.ceil((props.totalUsersCount - 13250) / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        {pages.map(p => {
            return <button
                className={props.currentPage === p && styles.selectedPage}
                onClick={(e) => { props.onPageChanged(p) }}>{p}</button> //это обработчик событий
        })}
    </div>
}



export default Paginator;