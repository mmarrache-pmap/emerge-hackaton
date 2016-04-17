import React from 'react';
import Main from '../layouts/main';
import Hero from '../components/Hero';

class AboutPage extends React.Component {
  render() {
    return (
      <Main>
        <Hero type="image" src={`/static/images/organizations/hope.jpg`} overlay
              title="About Us" />
        <div class="content-about">
          <h1> Conquering Homelessness is a Shared Responsibility </h1> <p> Miami’ s ascension as a world - class business hub is not only measured by the health of our real estate, financial and entrepreneurial sectors, but also by how we as a community coalesce to address critical issues that impact all of our residents.One of these critical issues our community faces is homelessness, and how we address the lack of housing options available to those that are living on the street and in shelters. </p>

          <p> In an effort to foster the community collaboration required to tackle this major issue, the Greater Miami Chamber of Commerce’ s New World Center Committee brought together business and community leaders
          for the organization’s Homeless Forum to discuss solutions to this complex issue that affect the lives of children, families and individuals, as well as the communities within which they live. </p>

          <p> In spite of the challenges surrounding these issues, business and community leaders took the opportunity to exchange and discuss innovative ideas and solutions.There were three major takeaways:
          </p><p>
          In order to afford a place to live, people need to have income that will cover 30 percent of the cost of a home.Many homeless people have skills that would allow them to be gainfully employed, but often stigmas prevent them from being hired.Local businesses should explore employing nontraditional applicants. </p><p>
          Additionally, businesses should explore innovative ways to grow, creating more employment opportunities.Last, education is key to acquiring employment opportunities. Our educational institutions should
          continue to expand on training and education programs that ensure employability skills.We applaud the Downtown Development Authority and Hospitality Institute of Miami Dade College as two leaders in this area. </p> <ul>
          <li>
          Business communities need to be actively engaged in developing housing solutions
          for the continuum of needs from those experiencing homelessness to working professionals.As Miami - Dade continues to face a housing crisis, more individuals and families are driven into homelessness. </li> <li>
          The GMCC and its various committees (New World Center, Military Affairs, Real Estate, Healthcare, Education and Transportation) review this issue continually, enabling the GMCC to serve as a nexus
          for various groups throughout the community. Each sector plays an important, and interconnected, role in solving this important issue. </li> <li>
          Effective mental - health treatment is key to stabilizing and engaging chronic homeless individuals. Sadly, the largest mental - health organization in the Florida is the penal system, resulting in a system that is financially ineffective and a poor substitute
          for a treatment programs. </li> </ul> <p>
          Innovative partnerships between agencies and providers are necessary to fill the gaps in our healthcare and homeless system, as advocated by Miami - Dade County Associate Administrative Judge Steve Leifman, who provided the keynote address at the Homeless Forum. One successful example of this is the Lazarus Project, a collaboration between Miami Homes For All, Camillus Health Concern, the Miami - Dade County Homeless Trust and Legal Services of Greater Miami, focused on providing street medicine to the chronically homeless to engage them into care. </p><p>
          The GMCC has always prioritized the issue of homelessness in our community, demonstrated particularly by its role in the creation of the Miami - Dade County Homeless Trust and Carrfour Supportive Housing.If our community is to rank among world - class cities, it must be socially and economically viable
          for all of our residents and workers to thrive here. </p><p>
          In order
          for us to achieve and maintain vibrancy, Miami - Dade’ s business leaders should embrace the“ shared value” concept, upholding the ability
          for businesses to generate economic value that also produces value
          for society by addressing its challenges. </p>

          <p> BOBBIE IBARRA IS EXECUTIVE DIRECTOR OF MIAMI HOMES FOR ALL, A COALITION FOR THE HOMELESS AND ALSO SERVES AS CHAIR OF THE GREATER MIAMI CHAMBER OF COMMERCE’ S COMMUNITY GROWTH GROUP. </p>
        </div>
      </Main>
    );
  }
}

export default AboutPage;
