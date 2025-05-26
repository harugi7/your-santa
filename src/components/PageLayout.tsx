import styled from 'styled-components';
import colors from "../styles/colors.ts";

interface PageLayoutProps {
  children: React.ReactNode;
}

function PageLayout({ children }: PageLayoutProps) {
  return <StyledPageLayout>{children}</StyledPageLayout>;
}

export default PageLayout;

const StyledPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  background-color: ${colors.navy};
  color: ${colors.white};
  box-sizing: border-box;
`;
