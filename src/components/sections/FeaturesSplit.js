import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

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
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Competitive Coding
                  </div>
                <h3 className="mt-0 mb-12">
                 Coding Contests
                  </h3>
                  <br />
                <p className="m-0">
                  Since its inception, Point Blank has organised <b>over 40 iterations</b> of
its weekly coding contest, called the <b>PB Hustle</b> . We ask participants to solve a series
of 5-7 questions of varying difficulty levels in a programming language of their choice.
The contests are open to all and the contests get progressively harder over iterations.
The end goal of this competition is to have college teams qualify for the ACM ICPC, and
to better the programming culture in the college.
                  </p>
                  <br/>
                  <p>
                  To this effect we have already seen a lot of success, we currently have some of the best
programmers DSCE has ever seen (on the basis of rating and competition
performance). Our participation numbers in competitions such as Codechef long
challenge has gone up from 3 to 70+ participants. The details are elaborated upon in
later sections.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-01.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
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
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
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