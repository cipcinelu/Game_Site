import { Button, ButtonGroup } from '@material-ui/core';
import React, { useState } from 'react'
import styles from './Paginator.module.css'



const Paginator = (props, { portionSize = 10 }) => {
    let pagesCount = Math.ceil((props.totalItemsCount) / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let letftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div className={styles.paginator}>
        <Button variant="contained" 
            onClick={() => { setPortionNumber(portionNumber - 1) }}
            disabled = {portionNumber <= 1}>
                Prev
        </Button>
        <ButtonGroup variant="text" 
                aria-label="text primary button group" >
            {pages
                .filter(p => p >= letftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <Button
                        key={p}
                        onClick={(e) => { props.onPageChanged(p) }}>{p} </Button> //это обработчик событий
                })}
        </ButtonGroup>
        <Button variant="contained" 
                onClick={() => { setPortionNumber(portionNumber + 1) }}
                disabled = {portionCount <= portionNumber}>
            Next
        </Button>
    </div>
}
export default Paginator;