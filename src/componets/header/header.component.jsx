import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'


import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../card-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectorCardHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser, hidden })=>(
    <div className='header'>
        <Link to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/'>
                CONTACT
            </Link>

            {
                currentUser ?
               ( <div className='option' onClick={() => auth.signOut()}>
                   SIGN OUT</div>
                )
                :
                (<Link className='option' to='/signin'>
                    SIGN IN
                 </Link>)
            }

            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown />
        }
    </div>
)

// pt a primi acea valuare a currentUser
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectorCardHidden

})

export default connect(mapStateToProps)(Header) ;