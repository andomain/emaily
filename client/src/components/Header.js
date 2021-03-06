import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import Payments from './Payments';

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
            return [
                <li key="payment"><Payments /></li>,
                <li key="count" style={{ margin: '0 10px' }}>
                    Credits: { this.props.auth.credits }
                </li>,
                <li key="logout"><a href="/api/logout">Log out</a></li>,
            ];
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link
                        to={this.props.auth ? '/surveys' : '/'}
                        className="left brand-logo"
                    >
                        Emaily
                    </Link>
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
