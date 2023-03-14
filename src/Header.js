import { ScrollToTop } from 'react-router-scroll-to-top';

function Header() {
    return (
        <div className="header-body-div" >
            <h1 className="header-text" >Erik Russell /<br/> 
            software engineer based in Brooklyn, NY.</h1>
            <ScrollToTop />
        </div>
    )
}

export default Header