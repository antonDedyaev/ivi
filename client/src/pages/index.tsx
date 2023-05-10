import Slider from '@/components/Slider/Slider';
import styles from '@/styles/pages/HomePage.module.scss';
import PostersList from '@/components/posters/PostersList/PostersList';
import { promoMovies } from '@/components/posters/PromoPoster/promoMovies.data';
import { ratingMovies } from '@/components/posters/RatingPoster/ratingMovies.data';
import MainContainer from '@/components/main_container/MainContainer/MainContainer';
import MoviesSection from '@/components/sections/MoviesSection/MoviesSection';
import TopTenSection from '@/components/sections/TopTenSection/TopTenSection';
import SpoilerUI from '@/components/UI/Spoiler/SpoilerUI';
import ShapedLinkUI from '@/components/UI/links/ShapedLink/ShapedLinkUI';
import Image from 'next/image';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale!, ['common', 'footer', 'header', 'mainPage', 'modals'])),
    },
});

function HomePage() {
    const { t } = useTranslation();
    return (
        <MainContainer
            keywords={['homePage', 'iviEtoKryto']}
            title="Онлайн-кинотеатр Иви - фильмы, сериалы и мультфильмы смотреть онлайн бесплатно в хорошем качестве"
            page="home"
        >
            <div className={styles.container}>
                <div className="container">
                    <div className={[styles.container__section, styles.container__section_promo].join(' ')}>
                        <Slider itemType="promo" length={promoMovies.length}>
                            <PostersList posterType="promo" movies={promoMovies} />
                        </Slider>
                    </div>

                    <ShapedLinkUI
                        href="/https://www.ivi.ru/subscribe?redirect_url=%2F"
                        className={styles.container__link}
                        shape="rectangular"
                    >
                        <Image
                            src="https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/lightning.svg"
                            alt=""
                            width={24}
                            height={32}
                        />
                        {t('mainPage:freeSubscriptionButton')}
                    </ShapedLinkUI>

                    <div className={[styles.container__section, styles.container__section_top].join(' ')}>
                        <TopTenSection movies={ratingMovies} />
                    </div>

                    <div className={styles.container__spoiler}>
                        <h2 className={styles.container__title}>{t('mainPage:benefitsSpoiler.header')}</h2>
                        <SpoilerUI shownLines={2} toggleButtonTexts={[t('showSpoiler'), t('hideSpoiler')]}>
                            <>
                                <p>{t('mainPage:benefitsSpoiler.content.0')}</p>
                                <p>{t('mainPage:benefitsSpoiler.content.1')}</p>
                                <p>{t('mainPage:benefitsSpoiler.content.2')}</p>
                                <ol>
                                    <li>{t('mainPage:benefitsSpoiler.benefitsList.0')}</li>
                                    <li>{t('mainPage:benefitsSpoiler.benefitsList.1')}</li>
                                    <li>{t('mainPage:benefitsSpoiler.benefitsList.2')}</li>
                                    <li>{t('mainPage:benefitsSpoiler.benefitsList.3')}</li>
                                    <li>{t('mainPage:benefitsSpoiler.benefitsList.4')}</li>
                                    <li>{t('mainPage:benefitsSpoiler.benefitsList.5')}</li>
                                    <li>{t('mainPage:benefitsSpoiler.benefitsList.6')}</li>
                                    <li>{t('mainPage:benefitsSpoiler.benefitsList.7')}</li>
                                </ol>
                                <p>{t('mainPage:benefitsSpoiler.content.3')}</p>
                            </>
                        </SpoilerUI>
                    </div>

                    <div className={styles.container__section}>
                        <MoviesSection title={t('mainPage:foreignMovies')} movies={ratingMovies} href="/" />
                    </div>

                    <div className={styles.container__section}>
                        <MoviesSection title={t('mainPage:dramas')} movies={ratingMovies} href="/" />
                    </div>
                </div>
            </div>
        </MainContainer>
    );
}

export default HomePage;
