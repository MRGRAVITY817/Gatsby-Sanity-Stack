import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/SEO';

const SlicemastersPage = ({ data: { person } }) => (
  <>
    <SEO title={person.name} image={person.image.src} />
    <div className="center">
      <Img fluid={person.image.asset.fluid} />
      <h2>
        <span className="mark">{person.name}</span>
      </h2>
    </div>
  </>
);

export const query = graphql`
  query($slug: String!) {
    person: sanityPerson(slug: { current: { eq: $slug } }) {
      name
      id
      description
      image {
        asset {
          fluid(maxWidth: 1000, maxHeight: 750) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;

export default SlicemastersPage;
