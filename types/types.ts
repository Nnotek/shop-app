type imageType = {
    src: string;
    alt: string;
};

export type shopItemDataType = {
    [key: string]: {
        title: string;
        price: string;
        images: imageType[];
        details: string;
        size: string[];
    };
};

export type cartItemDataType = {
    id: string;
    title: string;
    price: number;
    size: string;
    image: imageType;
};