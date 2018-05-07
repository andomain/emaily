import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
        case null:
            return null;
        case false:
            return (
                <li><a href="/auth/google">Log in with Google</a></li>
            );
        default:
            return (
                <li><a href="/api/logout">Log out</a></li>
            );
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="left brand-logo">Emaily</a>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

Header.propTypes = {
    auth: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
};

Header.defaultProps = {
    auth: null,
};

export default connect(mapStateToProps)(Header);
