import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import { head } from 'lodash';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Activities',
    paragraph: 'We organise lots of student centric activities'
  };

  const codingImages = [
    "/lc.png",
    "/cf.jpeg",
    "/cc.png",
    "/ac.png"
  ]

  const securityImages=[
    "../../assets/images/features-split-image-02.png",
    "../../assets/images/features-split-image-02.png"
  ]

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-secondary fw-600 tt-u mb-8">
                  Competitive Coding
                  </div>
                <h3 className="mt-0 mb-12">
                 Coding Contests
                  </h3>
                  <br />
                <p className="m-0">
                Point Blank has hosted 40+ editions of its PB Hustle coding contest, where participants tackle 5-7 progressively challenging questions in their chosen language. The aim is to improve college programming culture and qualify teams for ACM ICPC. Notably, DSCE's top programmers have emerged from this, with Codechef long challenge participation growing from 3 to 70+ participants.
                  </p>
              </div>
              <div
                style={{
                  display:"grid",
                  gridTemplateColumns:"auto auto",
                  gridTemplateAreas:"auto auto",
                  gap:"1rem",
                  marginLeft:"auto"
                }}
              >
                {codingImages.map((x,i)=>{
                  console.log(x);
                  return(
                    <img
                      src = {x}
                      key = {i}
                      style = {{
                        objectFit:"fill",
                        borderRadius:"5px",
                        width:"200px",
                        height:"180px"
                      }}
                    />
                  )
                })}
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-secondary fw-600 tt-u mb-8">
                  Development
                  </div>
                <h3 className="mt-0 mb-12">
                  Workshops
                  </h3>
                <p className="m-0">
                  Point Blank has organised <b>100+ small and large
workshops</b> in topics ranging from open source, to devops, machine learning,
placement scenarios, data structures and algorithms, mobile and web development
among other things. Most of these workshops are conducted in an informal, unscripted
way, though we do document some of our most important workshops. An example is
our primer to F/OSS development
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-02.png')}
                  alt="Features split 02"
                  style = {{
                    borderRadius:"7px"
                  }}
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-secondary fw-600 tt-u mb-8">
                  Hackathons
                  </div>
                <h3 className="mt-0 mb-12">
                  Competitive Hackathons
                  </h3>
                <p className="m-0">
                  <b>Smart India Hackathon:</b> We organise the internal round of the Smart India Hackathon
every year. In its 2020 edition, this saw participation from 300+ individuals from DSCE.
Two of our teams qualified to the finals, with 1 winning the software edition..
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-03.png')}
                  alt="Features split 03"
                  width={528}
                  style = {{
                    borderRadius:"7px"
                  }}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-secondary fw-600 tt-u mb-8">
                Cyber Security
                  </div>
                <h3 className="mt-0 mb-12">
                CTFs/Sessions
                  </h3>
                  <br />
                <p className="m-0">
                We organise  Workshops and Sessions about various topics in Cyber Security and also Hands On sessions for practise on various platforms.
                  In 2023 We organized the 1st Iteration of in-house Capture The Flag event titled <b>PBCTF</b> which saw participation of more than 70 hackers.
                  </p>
              </div>
              <div
                style={{
                  display:"grid",
                  gridTemplateColumns:"auto auto",
                  gridTemplateAreas:"auto auto",
                  gap:"1rem",
                  marginLeft:"auto"
                }}
              >
                    <Image
                  src={require('./../../assets/images/htb.svg')}
                  alt="Features split 03"
                  width={528}
                  style = {{
                    borderRadius:"7px"
                  }}
                  height={396} />
                  <Image
                  src={require('./../../assets/images/thm.svg')}
                  alt="Features split 03"
                  width={528}
                  style = {{
                    borderRadius:"7px"
                  }}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;