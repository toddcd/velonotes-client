import React, {Component} from 'react'
import './Landing.css'

export default class Landing extends Component {
    static defaultProps = {
        onLoginSuccess: () => {
        }
    }

    render() {
        return (
            <div className='landing-container'>
                <section>
                    <div className='landing-image'>
                        <img className='landing-image' src={require("../../images/velonoteslogo_v2.png")}/>
                    </div>
                    <header className='landing-content'>
                        <h3>Keep track of bicycle fit data and notes</h3>
                    </header>
                </section>
                <section className='landing-section'>
                    <div className='landing-image'>
                        <img  src={require("../../images/landingtop.png")}/>
                    </div>
                    <div className='landing-content'>
                    <p>Fit and position data can help identify measurements tied to optimal performance,
                        injury origination, or selecting a new bicycle frame or component.</p>
                    </div>
                    <div className='landing-image'>
                        <img className='landing-image' src={require("../../images/bars_v2.png")}/>
                    </div>
                </section>
                <section className='landing-section'>
                    <div className='landing-content'>
                        <p>Notes can help keep a record of what and when maintenence was done or
                            why setup changes were made.</p>
                    </div>
                    <div className='landing-image'>
                        <img className='landing-image' src={require("../../images/landingbottom.png")}/>
                    </div>
                    <div className='landing-image'>
                        <img className='landing-image' src={require("../../images/bars_v2.png")}/>
                    </div>
                </section>
            </div>
        )
    }
}