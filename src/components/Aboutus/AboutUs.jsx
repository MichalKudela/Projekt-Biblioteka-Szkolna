import React from "react";
import './AboutUs.css';
import ImgSrc1 from './../../assets/biblioteka.png';
import ImgSrc2 from './../../assets/biblioteka1.png';

const AboutUs = () =>{
    return(
        <div id='aboutUs'>
        <section className="Gallery">
            <img className="pic" src={ImgSrc1}/>
            <img className="pic" src={ImgSrc2}/>
        </section>
        <p> <b>O nas</b>
            We wrześniu 2001 roku jako pierwsza szkoła w Tychach rozpoczęliśmy   odnotowywać wypożyczenia i zwroty przy pomocy programu bibliotecznego MOL.
            Od stycznia 1999 roku trwały prace przygotowawcze polegające

            na wprowadzeniu do bazy danych całego księgozbioru.

            W październiku 2002 roku rozpoczęła działalność czytelnia internetowa.
        </p>
        <p>
            Więcej na stronie: <a href="https://www.zs4.tychy.edu.pl/p,3,biblioteka" target="_blank">ZS4 Tychy</a> 
        </p>
        <p>
            Aby zobaczyć naszą bibliotekę odwiedź wirtualny spacer i zobacz zakładkę "BIBLIOTEKA": <a href="https://zs4.tychy.edu.pl/SPACER_WIRTUALNY_ZS4_360/" target="_blank">ZS4 Spacer Wirutalny</a>
        </p>
           
      </div>
    );
};

export default AboutUs;