import React from 'react';
import { shallow } from 'enzyme';

import BookBox from '../index';

describe('<BookBox />', () => {
    let props;

    beforeEach(() => {
        props = {
            item: {
                id: '3BlbiA4z4n0C',
                title: 'O Guia Prático do Dreamweaver CS3 com PHP, JavaScript e Ajax',
                authors: [
                    'PEDRO REMOALDO',
                ],
                publisher: 'Centro Atlantico',
                industryIdentifiers: [
                    {
                        type: 'ISBN_13',
                        identifier: '9789896150587',
                    },
                    {
                        type: 'ISBN_10',
                        identifier: '9896150583',
                    },
                ],
                readingModes: {
                    text: false,
                    image: true,
                },
                pageCount: 676,
                printType: 'BOOK',
                averageRating: 5,
                ratingsCount: 1,
                maturityRating: 'NOT_MATURE',
                allowAnonLogging: false,
                contentVersion: '1.1.0.0.preview.1',
                imageLinks: {
                    smallThumbnail: 'http://books.google.com/books/content?id=3BlbiA4z4n0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                    thumbnail: 'http://books.google.com/books/content?id=3BlbiA4z4n0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
                },
                language: 'pt',
                previewLink: 'http://books.google.com.br/books?id=3BlbiA4z4n0C&pg=PA32&dq=javascript&hl=&cd=3&source=gbs_api',
                infoLink: 'https://play.google.com/store/books/details?id=3BlbiA4z4n0C&source=gbs_api',
                canonicalVolumeLink: 'https://market.android.com/details?id=book-3BlbiA4z4n0C',
            },
        };
    });

    it('deve renderizar o item recebido', () => {
        props.isLoading = true;

        const renderedComponent = shallow(
            <BookBox {...props} />
        );
        expect(renderedComponent.contains(props.item.title)).toEqual(true);
    });
});
