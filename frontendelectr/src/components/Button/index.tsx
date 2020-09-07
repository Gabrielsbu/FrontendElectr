import styled from 'styled-components';

interface Props {
    outlined?: boolean; 
}

export default styled.button<Props>`
    background: ${ (props) => (props.outlined ? 'var(--color-secondary)' : 'var(--color-secondary)')};
    color: ${ (props) => (props.outlined? 'var(--color-primary)': 'var(--color-secondary)')};
    border: ${ (props) => (props.outlined? '1px solid var(--color-secondary)': 'none')};

    padding: 16px;
    border-radius: 25px;

    font-weight: bold;
    font-size: 15px;

    cursor: pointer;
    outline: 0;

    
`