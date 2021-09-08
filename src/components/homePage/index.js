import CurrentLocation from '../locationInput/currentLocation';
import Logo from '../../img/logo.svg';
import './homePage.css'

const HomePage = () => {
    return (
        <div>
            <div className="bg-gray">
                <div className="container mx-auto jumbotron">
                    <header className="mb-10">
                        <div className="flex--space-between p-10 mb-5">
                            <img src={Logo} className="w-24" alt="Logo"/>
                            <div className="flex col--gap-2 text-white">
                                <i className="fa fa-phone"></i>
                                <p>244-8088-999</p>
                            </div> 
                        </div>
                        <nav className="nav p-10">
                            <a href="#" className="nav-list--active">Home</a>
                            <a href='#' className="nav-list">Services</a>
                            <a href="#" className="nav-list">How it works</a>                        
                        </nav>
                    </header>
                    <div className="p-10">
                        <h1 className="text-white">Roof inspections made remote and easy</h1>
                        <h5 className="text-white">Get your roof inspected remotely and connect with oue trusted roofers</h5>
                    </div>
                    <CurrentLocation className="mb-10"/>   
                </div>
            </div>
            <div className="container mx-auto text-white">
                <div className="card bg-blue-600 rounded-sm card--pushed-up">
                    <div className="card-item">
                        <i class="fas fa-pencil-ruler"></i>
                        Free Inspection
                    </div>
                    <div className="card-item">
                        <i className="far fa-copy "></i>
                        File a Claim
                    </div>
                    <div className="card-item"> 
                        <i className="fas fa-tools"></i>
                        Replace or <br/>
                        Repair a Roof
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default HomePage;