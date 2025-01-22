import { Container, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from '../../styles/FooterLinks.module.css';
import Logo from '../logo/Logo';
import { FooterData } from './FooterData';

function Footer() {
    const groups = FooterData.map((group) => {
        const links = group.links.map((link, index) => (
            <Link to={link.link} key={index}>
                <Text component="a" key={link.label} className={classes.link}>
                    {link.label}
                </Text>
            </Link>
        ));
        
        return (
            <div className={classes.wrapper} key={group.title}>
                <Text className={classes.title}>{group.title}</Text>
                {links}
            </div>
        );
    });

    return (
        <footer className={classes.footer}>
            <Container className={classes.inner} size="xxl">
                <div className={classes.logo}>
                    <Logo />
                    <Text size="xs" c="dimmed" className={classes.description}>
                        The World's #1 Decentralized Luxury Transportation Marketplace
                    </Text>
                </div>
                <div className={classes.groups}>{groups}</div>
            </Container>
            <Container className={classes.afterFooter} size="xxl">
                <Text c="dimmed" size="sm">
                    &copy; {new Date().getFullYear()} Pasarawa. All rights reserved.
                </Text>
            </Container>
        </footer>
    );
}

export default Footer;