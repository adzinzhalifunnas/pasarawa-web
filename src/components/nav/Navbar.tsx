import { Box, Container, Group, TextInput } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from '../../styles/NavbarMenu.module.css';
import Logo from '../logo/Logo';
import { ConnectButton, RainbowKitProvider, darkTheme} from '@rainbow-me/rainbowkit';
import {
    IconSearch,
} from '@tabler/icons-react'

function Navbar() {
    return (
        <Box className="sticky top-5 z-50 bg-white">
            <header className={classes.header}>
                <Container size="xxl">
                    <Group justify="space-between" h="100%">
                        <Link to="/" className="cursor-pointer">
                            <Logo />
                        </Link>

                        <Box style={{ flex: 1, justifyContent: 'center', margin: '0 6rem' }} visibleFrom="sm">
                            <TextInput
                                radius="sm"
                                size="sm"
                                width="100%"
                                placeholder="Search in Pasarawa"
                                rightSectionWidth={42}
                                leftSection={<IconSearch size={18} stroke={1.5} />}
                                styles={{ input: { width: '100%' } }}
                            />
                        </Box>

                        <Group visibleFrom="sm">
                            <RainbowKitProvider theme={darkTheme({...darkTheme.accentColors.blue})}>
                                <ConnectButton />
                            </RainbowKitProvider>
                        </Group>

                        <Group hiddenFrom="sm">
                            <RainbowKitProvider theme={darkTheme({...darkTheme.accentColors.blue})}>
                                <ConnectButton showBalance={false} chainStatus="icon" accountStatus="avatar" label="Connect" />
                            </RainbowKitProvider>
                        </Group>
                    </Group>
                </Container>
            </header>
        </Box>
    );
}

export default Navbar