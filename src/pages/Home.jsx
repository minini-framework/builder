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
                        <div className="jumper-2"></div>
                        <h4 style={{fontWeight: "normal"}}>Frontend framework for Web Developer <br/> with MaterialUI color</h4>
                        <div className="jumper-2"></div>
                        <a href="" className="btn btn-lg bg-deep-orange text-white">Get Started</a>
                    </div>
                </center>
            </div>
        );
    }
}