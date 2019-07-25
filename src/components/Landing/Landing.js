import React, {Component} from 'react'

export default class Landing extends Component {
    static defaultProps = {
        onLoginSuccess: () => {
        }
    }

    render() {
        return (
            <div>
                <section>
                    <header>
                        <h3>Record your bicycle's data</h3>
                        <p>fit measurements, tire psi, etc...</p>
                    </header>
                    <p>[<em>placeholder for screenshot of velo notepad interface</em>]</p>
                    <p>Velo Notpad is an easy to use and useful application with the goal of helping cyclists keep detailed notes related to a specific bicycle.</p>
                </section>
                <section>
                    <header>
                        <h3>Track bicycle info over time</h3>
                    </header>
                    <p>[<em>placeholder for screenshot of velo notepad interface</em>]</p>
                    <p>Data and notes tracked over time can help identify measurements tied to optimal performance, injury origination, or selecting a new bicycle frame or components.</p>
                </section>
                <section>
                    <header>
                        <h3>Analyze and gain insight</h3>
                    </header>
                    <p>[<em>placeholder for screenshot of velo notepad data grid</em>]</p>
                    <p>Sort, filter, and compare data between current and retired bicycles to gain insight and make informed decisions</p>
                </section>
            </div>
        )
    }
}