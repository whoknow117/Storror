import React, {useState, useEffect} from 'react';
import classes from './Proposal.module.scss';

type ProposalPropsType = {}


const Proposal: React.FC<ProposalPropsType> = () => {


    return <div className={classes.proposal}>

        <ul className={classes.menu}>
            <li className={classes.menu__item}>Подборки товаров</li>
            <li className={classes.menu__item}>Новинки</li>
            <li className={classes.menu__item}>Суперцена</li>
        </ul>


    </div>
}
export default Proposal;