export interface LocationI {
    name: string;
    latitude: number;
    longitude: number;
}

const LOCATIONS: {[key: string]: LocationI} = {
    minnowburn: {
        name: 'Minnowburn - Belfast',
        latitude: 54.546825,
        longitude: -5.9532673
    }
};

export interface VideoI {
    id: number;
    thumbnailPath: string;
    url: string;
    videoPath?: string;
    title: string;
    description_short: string;
    description_long: string;
    isHighlight?: boolean;
    location?: LocationI;
}

export const VIDEOS: Array<VideoI> = [
    {
        id: 0,
        thumbnailPath: '/assets/gallery/first.jpg',
        url: 'https://www.youtube.com/embed/L4WkXVA0Uso',
        title: 'Nice Trees Video',
        description_short: 'Some lovely footage of nice trees that we want to show',
        description_long: 'Some lovely footage of nice trees that we want to show',
        isHighlight: true,
        location: LOCATIONS.minnowburn
    },
    {
        id: 1,
        thumbnailPath: '/assets/gallery/second.jpg',
        url: 'https://www.youtube.com/embed/L4WkXVA0Uso',
        title: 'Video Title 1',
        description_short: 'Some lovely footage of nice trees that we want to show',
        description_long: 'Some lovely footage of nice trees',
        isHighlight: true,
        location: LOCATIONS.minnowburn
    },
    {
        id: 2,
        thumbnailPath: '/assets/gallery/third.jpg',
        url: 'https://www.youtube.com/embed/L4WkXVA0Uso',
        title: 'Video Title 2',
        description_short: 'Some lovely footage of nice trees that we want to show',
        description_long: 'Some lovely footage of nice trees',
        isHighlight: true,
        location: LOCATIONS.minnowburn
    },
    {
        id: 3,
        thumbnailPath: '/assets/gallery/second.jpg',
        url: 'https://www.youtube.com/embed/L4WkXVA0Uso',
        title: 'Video Title 3',
        description_short: 'Some lovely footage of nice trees that we want to show',
        description_long: 'Some lovely footage of nice trees',
        location: LOCATIONS.minnowburn
    },
    {
        id: 4,
        thumbnailPath: '/assets/gallery/third.jpg',
        url: 'https://www.youtube.com/embed/L4WkXVA0Uso',

        title: 'Video Title 4',
        description_short: 'Some lovely footage of nice trees that we want to show',
        description_long: 'Some lovely footage of nice trees',
        location: LOCATIONS.minnowburn
    },
    {
        id: 5,
        thumbnailPath: '/assets/gallery/first.jpg',
        url: 'https://www.youtube.com/embed/L4WkXVA0Uso',
        title: 'Video Title 5',
        description_short: 'Some lovely footage of nice trees that we want to show',
        description_long: 'Some lovely footage of nice trees',
        location: LOCATIONS.minnowburn
    },
    {
        id: 6,
        thumbnailPath: '/assets/gallery/third.jpg',
        url: 'https://www.youtube.com/embed/L4WkXVA0Uso',
        title: 'Video Title 6',
        description_short: 'Some lovely footage of nice trees that we want to show',
        description_long: 'Some lovely footage of nice trees',
        location: LOCATIONS.minnowburn
    },
    {
        id: 7,
        thumbnailPath: '/assets/gallery/first.jpg',
        url: 'https://www.youtube.com/embed/L4WkXVA0Uso',
        title: 'Video Title 7',
        description_short: 'Some lovely footage of nice trees that we want to show',
        description_long: 'Some lovely footage of nice trees',
        location: LOCATIONS.minnowburn
    },
    {
        id: 8,
        thumbnailPath: '/assets/gallery/second.jpg',
        url: 'https://www.youtube.com/embed/L4WkXVA0Uso',
        title: 'Video Title 8',
        description_short: 'Some lovely footage of nice trees that we want to show',
        description_long: 'Some lovely footage of nice trees',
        location: LOCATIONS.minnowburn
    },
];

