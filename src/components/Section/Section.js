import { Container } from './Section.styled';

export const Section = ({ title, children }) => (
  <Container>
    <h2>{title}</h2>
    {children}
  </Container>
);
