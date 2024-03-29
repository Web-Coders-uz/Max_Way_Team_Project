import React from 'react';
import Style from "./Cards.module.scss";
import MaxiBox from '../MaxiBox/MaxiBox';
import Klab from '../Klab/Klab';
import Lavash from '../Lavash/Lavash';
import Shaurma from '../Shaurma/Shaurma';
import Donar from '../Donar/Donar';
import Panini from '../Panini/Panini';
import Burger from '../Burger/Burger';
import HotDog from '../Hot_Dog/HotDog';
import Gazaklar from '../Gazaklar/Gazaklar';
import Ichimliklar from '../Ichimliklar/Ichimliklar';
import Desertlar from '../Desertlar/Desertlar';
import Souslar from '../Souslar/Souslar';
import Tamadilar from '../Tamaddilar/Tamadilar';
import { useTranslation } from 'react-i18next';

const Cards = () => {
    const { t } = useTranslation();
    return (
        <div className={Style.Cards_Conainer}>
            <h1 id='MaxiBox'>{t("MaxiBox")}</h1>
            <MaxiBox />
            <h1 id='Klab'>{t("Klab")}</h1>
            <Klab />
            <h1 id='Lavash'>{t("Lavash")}</h1>
            <Lavash />
            <h1 id='Shaurma'>{t("Shaurma")}</h1>
            <Shaurma />
            <h1 id='Donar'>{t("Donar")}</h1>
            <Donar />
            <h1 id='Panini'>{t("Panini")}</h1>
            <Panini />
            <h1 id='Burger'>{t("Burger")}</h1>
            <Burger />
            <h1 id='HotDog'>{t("HotDog")}</h1>
            <HotDog />
            <h1 id='Gazaklar'>{t("Sneklar")}</h1>
            <Gazaklar />
            <h1 id='Ichimlik'>{t("Ichimliklar")}</h1>
            <Ichimliklar />
            <h1 id='Desertlar'>{t("Desertlar")}</h1>
            <Desertlar />
            <h1 id='Souslar'>{t("Souslar")}</h1>
            <Souslar />
            <h1 id='Tamaddilar'>{t("Tamaddilar")}</h1>
            <Tamadilar />
        </div>
    )
}

export default Cards