export interface VideoI {
    id: number;
    thumbnailPath: string;
    videoPath?: string;
    title: string;
    description: string;
}

export const VIDEOS: Array<VideoI> = [
    {
        id: 0,
        thumbnailPath: '/assets/gallery/first.jpg',
        title: 'Nice Trees Video',
        description: 'Some lovely footage of nice trees that we want to show'
    },
    {
        id: 1,
        thumbnailPath: '/assets/gallery/second.jpg',
        title: 'Video Title 1',
        description: 'Some lovely footage of nice trees'
    },
    {
        id: 2,
        thumbnailPath: '/assets/gallery/third.jpg',
        title: 'Video Title 2',
        description: 'Some lovely footage of nice trees'
    },
    {
        id: 3,
        thumbnailPath: '/assets/gallery/second.jpg',
        title: 'Video Title 3',
        description: 'Some lovely footage of nice trees'
    },
    {
        id: 4,
        thumbnailPath: '/assets/gallery/third.jpg',
        title: 'Video Title 4',
        description: 'Some lovely footage of nice trees'
    },
    {
        id: 5,
        thumbnailPath: '/assets/gallery/first.jpg',
        title: 'Video Title 5',
        description: 'Some lovely footage of nice trees'
    },
    {
        id: 6,
        thumbnailPath: '/assets/gallery/third.jpg',
        title: 'Video Title 6',
        description: 'Some lovely footage of nice trees'
    },
    {
        id: 7,
        thumbnailPath: '/assets/gallery/first.jpg',
        title: 'Video Title 7',
        description: 'Some lovely footage of nice trees'
    },
    {
        id: 8,
        thumbnailPath: '/assets/gallery/second.jpg',
        title: 'Video Title 8',
        description: 'Some lovely footage of nice trees'
    },
];
