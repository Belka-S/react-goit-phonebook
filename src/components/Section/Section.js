import { Container } from './Section.styled';

export const Section = ({ mainTitle, title, children }) => (
  <Container>
    {mainTitle && <h1>{mainTitle}</h1>}
    {title && <h2>{title}</h2>}
    {children}
  </Container>
);
