import React from "react";
import styled from "styled-components";
import TDLogoBuilding from "../assets/Images/building.jpg";
import Myfloor from "../assets/Images/16floor.jpg";
import InnovationChallenge  from "../assets/Images/challenge.jpg";
import BankLogo from "../assets/Images/banklogo.png";

const BlogWrapper = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 2rem 1rem;
  color: ${(props) => props.theme.text};
  font-family: "Karla", sans-serif;
  line-height: 1.8;
`;

const Title = styled.h1`
  font-size: 6rem;
  font-weight: 950;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Date = styled.p`
  font-size: 1.1rem;
  opacity: 0.6;
  text-align: center;
  margin-bottom: 2rem;
`;

const Image = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  margin: 2rem 0;
  border-radius: 10px;
`;

const Section = styled.section`
  margin-bottom: 2rem;
  font-size: 1.2rem;
`;


const InternshipBlog = () => {
  return (
    <BlogWrapper>
      <Title>Data Science Intern -</Title>
      <img src={BankLogo} alt="TD Bank Logo" style={{ width: "50%", margin: "1rem auto", display: "block"}} />
      <Date>January – April 2025</Date>

      <Section>
        <p>
        During Summer 2025, I had the opportunity to intern as a Data Science Intern at TD Bank Group, where I worked with the Collections Analytics team. It was a transformative experience that blended technical skill-building with real-world business impact. I explored tools like Databricks, Tableau, and SQL to extract meaningful insights from financial datasets and contributed to the decision-making processes behind account recovery and risk analytics.

        </p>
      </Section>

      <Image src={TDLogoBuilding} alt="My desk at TD Bank" />

      <Section>
        <p>
        One of the most memorable highlights was my participation in TD's Innovation Challenge. Collaborating with fellow interns across departments, we brainstormed a solution to enhance customer engagement during the collections process. The challenge pushed us to think creatively, pitch our ideas to senior leadership, and understand how innovation happens within a corporate environment.

        </p>
      </Section>

      <Image src={Myfloor} alt="My Team at TD Bank" />

      <Section>
        <p>
          A major project I worked on during my internship was centered around Debt Sales Analysis. I performed exploratory and descriptive analysis on delinquent accounts, identifying trends in payment behavior, recovery likelihood, and write-off patterns. This involved working with complex datasets across different product categories—like prime, non-prime, and recreational loans. I also contributed to automating the Monthly Operating Report (MOR) dashboards using SQL and Tableau, helping the team save time and improve reporting accuracy.


        </p>
      </Section>

      <Image src={InnovationChallenge} alt="Innovation Challenge" />

      <Section>
        <p>
        Beyond the technical work, this experience taught me how to communicate insights effectively, collaborate within large teams, and navigate ambiguity in data. I’m grateful for the mentorship and support I received, and I’m walking away with a stronger foundation in data science, along with a deeper understanding of how large financial institutions use data to drive decisions.


        </p>
      </Section>

      <Section>
        <p>
          Overall, the internship strengthened both my technical foundation and
          my confidence as an aspiring data scientist. I’m grateful to my
          mentors and teammates who made it such a great learning experience.
        </p>
      </Section>
    </BlogWrapper>
  );
};

export default InternshipBlog;
