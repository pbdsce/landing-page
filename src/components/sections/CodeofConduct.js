import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const CodeofConduct = ({
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
  ...props
}) => {



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
    title: 'Code of Conduct',
  };

  return (
    <section
      {...props}
      // className={outerClasses}
    >
      <div className="container">
          <SectionHeader style={{marginTop:"-30px"}} data={sectionHeader} className="center-content" />
          <div style={{marginTop:"-50px"}}className={splitClasses}>
        <div className={innerClasses}>

      <h3 style={{marginTop:"-50px"}} > Applicability </h3>
      {/* <hr /> */}

<p  >This policy shall be applicable on all spaces related to PointBlank, including the following, as well as their online counterparts (if any):  </p>


      <ul>
        <li>hackathons</li>
        <li>talks, presentations, or demos</li>
         <li>workshops</li>
          <li>parties and social events</li>
           <li>social media channels, etc.</li>
      </ul>
      <p>This Code of Conduct also applies equally to all sponsors and partners of hackathons, and to all projects that are made at the hackathon.</p>
      <br /><br />


      <h3 style={{marginTop:"-50px"}} > No plagiarism or re-using of past work </h3>

                  <p  >We encourage you to submit projects only prepared in the duration of the hackathon.
However, if you decide to submit projects consisting of re-used code, or re-submit a project that you have already submitted previously to any other hackathon, you are to disclose such previous use and its extent with the submission.</p>

<p>If upon inspection, it is found that the project has re-used code that was not disclosed with the submission, the organizer may ask the participant to point out similarities and differences between the old and new work, and/or disqualify the submission from winning awards automatically.</p>
     
<h3  > No discrimination </h3>
<p>Hackathons hosted on PointBlank are dedicated to providing a safe and comfortable environment and harassment-free experience for everyone. No discrimination, on the basis of the following, shall be tolerated:</p>
<ul>
   <li>gender</li> 
    <li>gender identity and expression</li>
    <li>age</li>
    <li>sexual orientation</li>
    <li>disability</li>
    <li>physical appearance</li>
    <li>body size</li>
   <li>race</li> 
   <li>ethnicity</li>
    <li>nationality</li>
    <li>religion</li>
    <li>political views</li>
    <li>previous hackathon attendance or lack of</li>
    <li>computing experience or lack of</li>
   <li>chosen programming language or tech stack</li> 
</ul>
    
    <h3>No harassment</h3>
    <p>We do not tolerate harassment of hackathon participants in any form, including offensive discriminatory verbal comments, public display of sexual material, in public spaces, deliberate intimidation, stalking, wilful disruption, inappropriate physical contact, unwelcome sexual advances, and the taking of photographs and audio/video recordings without the subjects consent.</p>
     
     
     <h3>No recording without consent</h3>
     <p>While photography and videography is encouraged, other participants must be given a reasonable chance to opt out from being photographed. If they object to the taking of their photograph, comply with their request.</p>
     <p>If they express their disapproval after the photo or video has been captured, please delete it from your records, and in case it has been shared online, take reasonable steps to retract it from social media as well.</p>
      <p>is inappropriate to take photographs in contexts where people have a reasonable expectation of privacy (in bathrooms or where participants are sleeping).</p>
      <h3>Creation of a safe space</h3>
      <p>No sponsors, partners, or participants shall use sexualised images, activities, or other material at the hackathons for any non-permitted purpose. The use of sexualised clothing/uniforms/costumes, and anything that creates a sexualised environment is prohibited.</p>
      <h3>Always report</h3>
      <p>If you notice any violation of this Code of Conduct or find otherwise suspicious behavior or have any concerns, please contact a member of the hackathon organizing committee immediately.</p>

        <p>We will be happy to help participants contact local security or local law enforcement, or otherwise assist those experiencing harassment to feel safe for the duration of the hackathon. We value your attendance.</p>
   
      <h3>Consequences of violations</h3>
   
   <p>In case any participant violates this Code of Conduct, the organizer may, at their own discretion:</p>
   
   <ul>
    <li>
      expel them from the hackathon with no refund (if applicable),
    </li>
    <li>block their access to PointBlank resources including the website,</li>
    <li>report their behaviour to local law enforcement.</li>

   </ul>
   <h3>Contact</h3>
   <p>If you have witnessed or experienced any transgressions of this Code of Conduct at a hackathon hosted on PointBlank, please report it to your hackathon organizer, or get in touch with PointBlank.</p>
   
   <br />
   <hr/>
</div>

          
        </div>
    </div>
    </section>
  );
}

CodeofConduct.propTypes = propTypes;
CodeofConduct.defaultProps = defaultProps;

export default CodeofConduct;