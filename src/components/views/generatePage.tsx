import React from 'react';

export type TPageData = {
    heading?: string;
    content?: string;
};

export default (pageData: TPageData) => {
    return (
        <section>
            <h2>{pageData.heading}</h2>
            <p>{pageData.content}</p>
        </section>
    );
};
