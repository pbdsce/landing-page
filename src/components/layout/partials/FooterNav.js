import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

const FooterNav = ({ className, ...props }) => {
    const classes = classNames('footer-nav', className)

    return (
        <nav {...props} className={classes}>
            <ul className='list-reset'>
                <li>
                    <a href='https://forum.dsce.in/' target='_blank'>
                        Forum
                    </a>
                </li>
                <li>
                    <a
                        href='mailto:admin@pointblank.club'
                        target='_blank'
                    >
                        Contact Us
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default FooterNav
