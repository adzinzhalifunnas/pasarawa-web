import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import '@mantine/carousel/styles.css';

const images = [
    'https://miro.medium.com/v2/resize:fit:1400/0*MkKqjOUyIv0cdUwH.png',
    'https://i.insider.com/5d544b0721214c04f14718cc?width=1200&format=jpeg',
    'https://media.architecturaldigest.com/photos/5b9691509cd13621bf9b559b/16:9/w_2991,h_1682,c_limit/JPrice_Lamborghini_MCW18-1755.jpg',
    'https://miro.medium.com/v2/resize:fit:1400/0*MkKqjOUyIv0cdUwH.png',
    'https://i.insider.com/5d544b0721214c04f14718cc?width=1200&format=jpeg',
    'https://media.architecturaldigest.com/photos/5b9691509cd13621bf9b559b/16:9/w_2991,h_1682,c_limit/JPrice_Lamborghini_MCW18-1755.jpg',
    'https://miro.medium.com/v2/resize:fit:1400/0*MkKqjOUyIv0cdUwH.png',
    'https://i.insider.com/5d544b0721214c04f14718cc?width=1200&format=jpeg',
    'https://media.architecturaldigest.com/photos/5b9691509cd13621bf9b559b/16:9/w_2991,h_1682,c_limit/JPrice_Lamborghini_MCW18-1755.jpg',
];

function CarouselImage() {
    return (
        <div style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%' }}>
            <Carousel
                withIndicators
                height={200}
                slideSize={{ base: '100%', sm: '100%', md: '33.333333%' }}
                slideGap={{ base: 0, sm: 'sm' }}
                loop
                align="start"
            >
            {images.map((image, index) => (
                <Carousel.Slide key={index}>
                    <Image key={index} src={image} alt={`Slide ${index + 1}`} style={{ objectPosition: 'center' }} />
                </Carousel.Slide>
            ))}
            </Carousel>
        </div>
    );
}

export default CarouselImage;