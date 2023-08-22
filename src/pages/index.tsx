import { Button } from '@/components/button';
import type { FunctionComponent } from 'react';
import { NextSeo } from 'next-seo';
import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    height: 100dvh;
    width: 100%;

    background: linear-gradient(-45deg, #f79d5c, #a23b72, #122932, #00916e);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`;

const Display = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    max-width: 100vw;
    padding: 1rem;
    text-align: center;

    h1,
    h2 {
        padding: 0px;
        margin: 0px;
    }

    h1 {
        font-size: 4rem;
        font-weight: 800;
        line-height: 1;
    }
    h2 {
        max-width: 48rem;
        font-size: 1.25rem;
        font-weight: 400;
        line-height: 1.45;
        opacity: 0.75;

        span {
            font-weight: 600;
            text-decoration: underline;
        }
    }
`;

const Actions = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
`;

interface HomePageProps {}
const HomePage: FunctionComponent<HomePageProps> = ({}) => {
    return (
        <Container>
            <NextSeo
                titleTemplate="%s"
                title="Next.js starter template"
                description="Ready-to-go Next.js starter template using the battle-tested pages router."
                canonical="https://nextjs-starter.nordcom.io/"
                additionalMetaTags={[
                    {
                        property: 'keywords',
                        content: ['nextjs', 'nextjs-starter', 'next-starter', 'react', 'react-starter'].join(', ')
                    }
                ]}
            />

            <Display>
                <h1>Hello Next.js World!</h1>
                <h2>
                    Welcome to{' '}
                    <Link href="https://github.com/NordcomInc/nextjs-starter/" target="_blank">
                        @nordcom/nextjs-starter
                    </Link>
                    , the Next.js starter template that&apos;s instantly ready-to-go and based on the battle-tested
                    pages router.
                </h2>

                <Actions>
                    <Button
                        href="https://github.com/new?owner=NordcomInc&template_name=nextjs-starter&template_owner=NordcomInc"
                        secondary
                    >
                        Get Started
                    </Button>
                    <Button href="https://github.com/NordcomInc/nextjs-starter">Learn More</Button>
                </Actions>
            </Display>
        </Container>
    );
};

export default HomePage;
