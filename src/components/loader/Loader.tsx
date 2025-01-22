import { Loader as MantineLoader, Center } from "@mantine/core";

function Loader({ size = "lg" }: { size?: "sm" | "md" | "lg" | "xl" }) {
    return (
        <Center style={{ height: "100vh" }}>
            <MantineLoader size={size} color="#4D72F6" />
        </Center>
    );
}

export default Loader;