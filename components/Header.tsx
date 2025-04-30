import Link from 'next/link';
import styled from 'styled-components';

const StyledHeader = styled.header`
    position: fixed;
    width: 100%;
    text-align: center;
    background-color:rgb(255, 255, 255);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
    z-index: 100;
    padding-bottom: 0.5%;
`;

const StyledH1 = styled.h1`
    margin: 0;
    padding: 10px;
    color: green;
    font-size: 2rem;
`;

const StyledLink = styled(Link)`
    margin-right: 20px;
    font-size: 1.25rem;
    color: green;
    &:hover {
        text-decoration: underline;
    }
`;

export default function Header() {
    
    return (
        <StyledHeader>
            <StyledH1>Leafer</StyledH1>
            <nav>
                <StyledLink href="/">Home</StyledLink>
                <StyledLink href="/search">Search</StyledLink>
                <StyledLink href="/strain_of_the_day">Strain of the day</StyledLink>
            </nav>
        </StyledHeader>
    );
}