import './appBanner.scss';
import avegers from '../../resources/img/Avengers.png'
import avegersLogo from '../../resources/img/Avengers_logo.png'

const AppBanner = () => {
    return(
        <div className="app__banner">
            <img src={avegers} alt="Avengers"/>
            <div className="app__banner-text">
                New comics every week!<br/>
                Stay tuned!
            </div>
            <img src={avegersLogo} alt="Avengers logo"/>
        </div>
    )
}

export default AppBanner;