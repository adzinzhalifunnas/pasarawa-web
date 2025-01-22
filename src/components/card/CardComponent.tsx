import { Card, Text, Badge, Button, Group } from '@mantine/core';

interface CardProps {
    title: string;
    description: string;
    status: string;
    isShipped: boolean;
    price: number;
    seller: string;
}

function CardComponent({ title, description, status, isShipped, price, seller }: CardProps) {
    return (
        <Card shadow="sm" padding="sm" radius="sm" withBorder>
            <Card.Section>
            </Card.Section>
            <Group justify="space-between" mt="md">
                <Text fw={500}>
                    {title}
                </Text>
                <Badge color={status === "Sold" ? "red" : status === "Available" ? "green" : "orange"}>
                    {status.substring(0, 6)} {status.length > 6 && "..."}
                </Badge>
            </Group>
            {status === "Sold" && (
                <Group justify="justify" mt="xs">
                    <Badge color={isShipped ? "green" : "orange"}>
                        {isShipped ? "Shipped" : "Packaged"}
                    </Badge>
                    <Badge color={isShipped && status === "Sold" ? "green" : status !== "Sold" ? "orange" : "blue"}>
                        {isShipped && status === "Sold" ? "Completed" : !isShipped && status === "Sold" ? "Ongoing" : "Not Sold"}
                    </Badge>
                </Group>
            )}
            {status !== "Sold" && (
                <Group justify="justify" mt="xs">
                    <Badge color="white">
                    </Badge>
                </Group>
            )}
            <Text size="sm" c="dimmed" mt="xs" mb="sm">
                {description.substring(0, 100)}...
            </Text>
            <Button fullWidth mt="md" radius="md" color={status === "Sold" ? "red" : status === "Available" ? "blue" : "orange"} onClick={() => alert(title + " by " + seller + ", sorry for the detail & do transaction still in progress, please wait for the next update!")}>
                {price.toLocaleString()} WEI
            </Button>
        </Card>
    );
}

export default CardComponent;