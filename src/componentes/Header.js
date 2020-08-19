import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const Header = ({titulo})=>{
    return(
        <Fragment>
            <nav>
                <div className="nav-wrapper light-blue darken-2">
                   <a href="#!" className="brand-logo">{titulo}</a>
                </div>
            </nav>     
        </Fragment>
    );
};
Header.propTypes = {
    titulo: PropTypes.string.isRequired
}
export default Header;