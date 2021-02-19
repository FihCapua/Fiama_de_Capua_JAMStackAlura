import styled from 'styled-components';

export const FooterWrapper = styled.div`
    background-color: ${function(props) {
        return props.theme.colors.primary.main.color
    }};
    display: flex;
    justify-content: center;
`;

FooterWrapper.Icons = styled.div`
    background-color: ${function(props) {
        return props.theme.colors.tertiary.light.color
    }};
    padding: 10px 20px;
    
`;