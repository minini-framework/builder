import React from 'react';
import '../../node_modules/minikuna/css/component/button.css';

export default class Home extends React.Component
{
    render()
    {
        return(
            <div>
                <center>
                    <div className="jumper-4"></div>
                    <div className="container">
                        <h1>Minikuna</h1>
                        <h5>Frontend framework for Web Developer <br/> with MaterialUI color</h5>
                        <a href="" className="btn btn-lg bg-deep-purple text-white">Get Started</a>
                    </div>
                </center>
            </div>
        );
    }
}