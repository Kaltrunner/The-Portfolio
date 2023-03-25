import { ScrollToTop } from 'react-router-scroll-to-top';

function Header() {
    return (
        <div className="header-body-div" >
            <h1 className="header-text" ><span id="header-span" >Erik Russell</span> —<br/> 
            front end engineer in Brooklyn, NY</h1>
            <ScrollToTop />
        </div>
    )
}

export default Header