import { FunctionComponent, ReactNode } from 'react';
import styled, { css } from 'styled-components';

import Link from 'next/link';

const Container = styled.a<{ secondary?: boolean }>`
    padding: 0.75rem 1.25rem;
    border: 0.1rem solid var(--color-foreground);
    border-radius: 0.5rem;
    text-align: center;
    font-weight: 500;

    ${({ secondary }) =>
        secondary &&
        css`
            background: var(--color-foreground);
            color: var(--color-background);
        `}

    &:hover {
        opacity: 0.75;
    }
`;

interface ButtonProps {
    href: string;
    children: ReactNode;
    secondary?: boolean;
}
const Button: FunctionComponent<ButtonProps> = ({ href, children, secondary }) => {
    return (
        <Link href={href} legacyBehavior passHref>
            <Container target="_blank" secondary={secondary}>
                {children}
            </Container>
        </Link>
    );
};

export { Button };
