import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { SectionProps } from '../../utils/SectionProps'
import Input from '../elements/Input'

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool,
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false,
}

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {
  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  )

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  )

  return (
    <section {...props} className={outerClasses}>
      <div className='container'>
        <div className={innerClasses}>
          <div className='cta-slogan'>
            <h3 className='m-0'>Unleash Possibilities : Point Blank is Recruiting !!!</h3>
          </div>
          <div className='cta-action'>
            {/*<Input id="newsletter" type="email" label="Subscribe" labelHidden hasIcon="right" placeholder="Email Id">
              <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#376DF9" />
              </svg>
            </Input>*/}

            <a href={'/form'}>
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '7px',
                  fontSize: '16px',
                  fontFamily: 'Inter',
                  padding: '0.5em',
                  borderRadius: '0.5em',
                  fontWeight: 'bold',
                  backgroundColor: 'rgba(255,255,255,0.85)',
                }}
              >
                {'Register Now '}
                <span>
                  <svg
                    width='16'
                    height='12'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z'
                      fill='#5355d4'
                    />
                  </svg>
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

Cta.propTypes = propTypes
Cta.defaultProps = defaultProps

export default Cta
