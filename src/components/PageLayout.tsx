import styled from 'styled-components';
import colors from "../styles/colors.ts";

interface PageLayoutProps {
  children: React.ReactNode;
  backgroundOpacity?: number;
}

function PageLayout({ children, backgroundOpacity = 1 }: PageLayoutProps) {
  return <StyledPageLayout $opacity={backgroundOpacity}>{children}</StyledPageLayout>;
}

export default PageLayout;

const StyledPageLayout = styled.div<{ $opacity: number }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 2rem;
    background-color: ${({ $opacity }) => `rgba(27, 42, 65, ${$opacity})`};
    color: ${colors.white};
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
`;
