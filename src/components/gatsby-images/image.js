import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export const Image = ({src}) => {
    return (
        <>
            {src === 1 ? (
                <StaticImage src="../../assets/images/kenge-chair-one.jpg" alt="kenge chair" />
            ): src === 2 ? (
                <StaticImage src="../../assets/images/kenge-chair-two.jpg" alt="kenge chair" />
            ): src === 3 ? (
                <StaticImage src="../../assets/images/kenge-chair-three.jpg" alt="kenge chair" />
            ): src === 4 ? (
                <StaticImage src="../../assets/images/jua-decks-one.jpg" alt="jua decks" />
            ): src === 5 ? (
                <StaticImage src="../../assets/images/jua-decks-two.jpg" alt="jua decks" />
            ): src === 6 ? (
                <StaticImage src="../../assets/images/jua-decks-three.jpg" alt="jua decks" />
            ): src === 7 ? (
                <StaticImage src="../../assets/images/kitanda-nyota-one.jpg" alt="kitanda nyota" />
            ): src === 8 ? (
                <StaticImage src="../../assets/images/kitanda-nyota-two.jpg" alt="kitanda nyota" />
            ): src === 9 ? (
                <StaticImage src="../../assets/images/kitanda-nyota-three.jpg" alt="kitanda nyota" />
            ): src === 10 ? (
                <StaticImage src="../../assets/images/mashirbirya-table-one.jpg" alt="mashirbirya table" />
            ): src === 11 ? (
                <StaticImage src="../../assets/images/mashirbirya-table-two.jpg" alt="mashirbirya table" />
            ): src === 12 ? (
                <StaticImage src="../../assets/images/mashirbirya-table-three.jpg" alt="mashirbirya table" />
            ): src === 13 ? (
                <StaticImage src="../../assets/images/pembe-chair-one.jpg" alt="pembe chair" />
            ): src === 14 ? (
                <StaticImage src="../../assets/images/pembe-chair-two.jpg" alt="pembe chair" />
            ): (
                <StaticImage src="../../assets/images/pembe-chair-three.jpg" alt="pembe chair" />
            )}
        </>
    );
}