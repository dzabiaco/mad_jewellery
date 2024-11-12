import React, { FC } from 'react';
type ContentType = {
    pretitle: string;
    title: string;
    image: string;
    content: string;
};

interface PrefooterSectionProps {
    content: ContentType;
}

const PrefooterSection: FC<PrefooterSectionProps> = ({ content }) => {
    return (
        <div className="container">
            <div className="relative px-4 py-8 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-8 place-items-center">

                    <div className="space-y-4 text-left max-w-lg">
                        <div className="text-gray-700 text-xs font-normal">
                            {content?.pretitle}
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900 decoration-4">
                                {content?.title}
                            </h1>
                        </div>
                        <div className="text-base text-gray-600">
                            <p>
                                {content?.content}
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <img
                            src={content?.image}
                            alt="Amatto furniture sample"
                            className="w-full max-w-md lg:max-w-lg h-auto"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrefooterSection;