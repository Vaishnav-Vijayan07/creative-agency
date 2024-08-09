import React from 'react'
import { Accordion } from 'react-bootstrap'
import styles from '@/styles/FAQs.module.scss'

const FAQs = () => {
    return (
        <section className={styles.faqs_cotainer}>
            <h3>Frequently Asked Questions</h3>

            <div className={styles.faqs_accordion}>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className={styles.accordion_heading}>What services does Creaters Cafe offer?</Accordion.Header>
                        <Accordion.Body className={styles.accordion_paragraph}>
                            Creaters Cafe offers a comprehensive range of services including content writing (articles, blogs, website content), digital marketing (SEO, social media, content marketing), advertising and production (video production, digital ads, campaigns), consulting services (creative direction, campaign development), design and animation (graphic design, illustrations, animations), and branding (research, strategy, identity, messaging).
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header className={styles.accordion_heading}>How does Creaters Cafe approach projects?</Accordion.Header>
                        <Accordion.Body className={styles.accordion_paragraph}>
                            At Creaters Cafe, we begin by understanding your unique vision and goals. We tailor our creative solutions to align with your specific needs, ensuring every project reflects your brand’s identity and resonates deeply with your audience. Our process combines strategic planning with innovative execution to deliver impactful results.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header className={styles.accordion_heading}>Can Creaters Cafe handle projects of all sizes?</Accordion.Header>
                        <Accordion.Body className={styles.accordion_paragraph}>
                            Yes, Creaters Cafe caters to businesses of all sizes, from startups to established enterprises. We believe every idea has potential when executed with creativity and strategy. Whether you’re looking for a small-scale campaign or a comprehensive branding overhaul, we are equipped to deliver tailored solutions that meet your objectives.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                        <Accordion.Header className={styles.accordion_heading}>What industries does Creaters Cafe specialize in?</Accordion.Header>
                        <Accordion.Body className={styles.accordion_paragraph}>
                            Creaters Cafe has experience across various industries including technology, healthcare, education, finance, hospitality, and more. Our versatile team has the expertise to adapt our creative strategies to fit the unique demands and trends of different sectors, ensuring relevance and effectiveness in our work.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                        <Accordion.Header className={styles.accordion_heading}>How does Creaters Cafe ensure quality and client satisfaction?</Accordion.Header>
                        <Accordion.Body className={styles.accordion_paragraph}>
                            Quality and client satisfaction are at the core of everything we do at Creaters Cafe. We maintain open communication with our clients throughout the project lifecycle, ensuring transparency and alignment with their expectations. Our team is committed to delivering high-quality work that not only meets but exceeds client objectives, fostering long-term partnerships built on trust and success.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5">
                        <Accordion.Header className={styles.accordion_heading}>What is the typical turnaround time for projects at Creaters Cafe?</Accordion.Header>
                        <Accordion.Body className={styles.accordion_paragraph}>
                            The turnaround time for projects at Creaters Cafe varies based on the scope and complexity of the work. We strive to deliver timely results without compromising on quality. During the initial consultation, we discuss timelines and milestones to ensure expectations are clear and realistic for both parties.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="6">
                        <Accordion.Header className={styles.accordion_heading}>How can I get started with Creaters Cafe?</Accordion.Header>
                        <Accordion.Body className={styles.accordion_paragraph}>
                            Getting started with Creaters Cafe is simple. You can reach out to us through our website contact form or by directly emailing/calling our team. We'll schedule an initial consultation to discuss your project requirements, goals, and timelines. From there, we'll outline a customized plan tailored to your needs and begin transforming your ideas into reality.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                {/* <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className={styles.accordion_heading}>What services does Minari Creatives offer?</Accordion.Header>
                        <Accordion.Body className={styles.accordion_paragraph}>
                            Minari Creatives offers a comprehensive range of services including content writing (articles, blogs, website content), digital marketing (SEO, social media, content marketing), advertising and production (video production, digital ads, campaigns), consulting services (creative direction, campaign development), design and animation (graphic design, illustrations, animations), and branding (research, strategy, identity, messaging).
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header className={styles.accordion_heading}>How does Minari Creatives approach projects?</Accordion.Header>
                        <Accordion.Body className={styles.accordion_paragraph}>
                            At Minari Creatives, we begin by understanding your unique vision and goals. We tailor our creative solutions to align with your specific needs, ensuring every project reflects your brand’s identity and resonates deeply with your audience. Our process combines strategic planning with innovative execution to deliver impactful results.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header className={styles.accordion_heading}>Can Minari Creatives handle projects of all sizes?</Accordion.Header>
                        <Accordion.Body className={styles.accordion_paragraph}>
                            Yes, Minari Creatives caters to businesses of all sizes, from startups to established enterprises. We believe every idea has potential when executed with creativity and strategy. Whether you’re looking for a small-scale campaign or a comprehensive branding overhaul, we are equipped to deliver tailored solutions that meet your objectives.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                        <Accordion.Header className={styles.accordion_heading}>What industries does Minari Creatives specialize in?</Accordion.Header>
                        <Accordion.Body className={styles.accordion_paragraph}>
                            Minari Creatives has experience across various industries including technology, healthcare, education, finance, hospitality, and more. Our versatile team has the expertise to adapt our creative strategies to fit the unique demands and trends of different sectors, ensuring relevance and effectiveness in our work.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                        <Accordion.Header className={styles.accordion_heading}>How does Minari Creatives ensure quality and client satisfaction?</Accordion.Header>
                        <Accordion.Body className={styles.accordion_paragraph}>
                            Quality and client satisfaction are at the core of everything we do at Minari Creatives. We maintain open communication with our clients throughout the project lifecycle, ensuring transparency and alignment with their expectations. Our team is committed to delivering high-quality work that not only meets but exceeds client objectives, fostering long-term partnerships built on trust and success.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5">
                        <Accordion.Header className={styles.accordion_heading}>What is the typical turnaround time for projects at Minari Creatives?</Accordion.Header>
                        <Accordion.Body className={styles.accordion_paragraph}>
                            The turnaround time for projects at Minari Creatives varies based on the scope and complexity of the work. We strive to deliver timely results without compromising on quality. During the initial consultation, we discuss timelines and milestones to ensure expectations are clear and realistic for both parties.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="6">
                        <Accordion.Header className={styles.accordion_heading}> How can I get started with Minari Creatives?</Accordion.Header>
                        <Accordion.Body className={styles.accordion_paragraph}>
                            Getting started with Minari Creatives is simple. You can reach out to us through our website contact form or by directly emailing/calling our team. We'll schedule an initial consultation to discuss your project requirements, goals, and timelines. From there, we'll outline a customized plan tailored to your needs and begin transforming your ideas into reality.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion> */}
            </div>
        </section>
    )
}

export default FAQs