import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer className="bg-primary pt-3 ">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p className="text-white font-12">© 2019 My T-shirt.com</p>
                    </div>
                </div>
            </footer>

        )
    }

}
export default Footer