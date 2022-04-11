import './Nav.css';

const Nav=()=>{
    return (
        <div className='Nav'>
            <ul>
                <a href='https://www.binance.com/ru'><li>Home</li></a>
                <a href='https://www.binance.com/ru/markets'><li>Start trading</li></a>
                <a href='#'><li>Login</li></a>
                <a href='https://accounts.binance.com/ru/register'><li>Sign up</li></a>
            </ul>
        </div>
    );
}

export default Nav;