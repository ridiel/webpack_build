import {useState} from 'react';
import classes from './App.module.scss';
import {Link, Outlet} from "react-router-dom";

import logo from '@/assets/logo.png';
import SearchIcon from '@/assets/search.svg';

function TODO(a: number) {
    console.log('TODOFUNCTION');
}

export const App = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount((prev) => prev + 1);

    /*TODO(34234);

    if (__PLATFORM__ === 'desktop') {
        return <div>IS DESKTOP PLATFORM</div>
    }

    if (__PLATFORM__ === 'mobile') {
        return <div>IS MOBILE PLATFORM</div>
    }*/

    return (
        <div data-testid={"App.DataTestId"}>
            <h1 data-testid={"Platform"}>PLATFORM={__PLATFORM__}</h1>
            <div>
                <img src={logo} alt=""/>
            </div>
            <div>
                <SearchIcon width={50} height={50} className={classes.icon} />
            </div>

            <Link to={'/about'}>About</Link><br/>
            <Link to={'/shop'}>Shop</Link>

            <h1 className={classes.value}>Count: {count}</h1>
            <button className={classes.button} onClick={increment}><span>ADD</span></button>
            <Outlet/>
        </div>
    );
};