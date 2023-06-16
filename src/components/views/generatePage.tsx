import React from 'react';

export type TPageData = {
    heading?: string;
    content?: string;
};

export default (pageData: TPageData) => {
    const { heading, content } = pageData;

    return pageData ? (
        <section>
            {heading && <h2>{heading}</h2>}
            {content && <p>{content}</p>}
        </section>
    ) : (
        <></>
    );
};
