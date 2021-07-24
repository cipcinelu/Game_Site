import React, { useState } from 'react'
import styles from './Paginator.module.css'

const Paginator = (props, {portionSize = 10}) => {
    let pagesCount = Math.ceil((props.totalItemsCount) / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil (pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState (1);
    let letftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div className = {styles.paginator}>
        {portionNumber > 1 &&
        <button className = {styles.prevButton} onClick = {() => {setPortionNumber(portionNumber - 1)}}>Prev</button>}
        <div className = {styles.pageNumber}>
        {pages
        .filter (p => p >=letftPortionPageNumber && p <=rightPortionPageNumber)
        .map(p => {
            return <span
                className={props.currentPage === p && styles.selectedPage}
                key = {p}
                onClick={(e) => { props.onPageChanged(p) }}>{p} </span> //это обработчик событий
        })}
        </div>
        {portionCount > portionNumber &&
            <button className = {styles.nextButton} onClick = {() => {setPortionNumber(portionNumber + 1)}}>Next</button>}
    </div>
}



export default Paginator;