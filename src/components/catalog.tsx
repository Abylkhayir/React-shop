import huntknife from "../img/hunt-knife.svg";
import armyknife from "../img/army-knife.svg"
import swords from "../img/swords.svg"
import manykitchen from "../img/many-kitchen-knife.svg"
import onekitchen from "../img/one-knife-kitchen.svg"
import threekitchen from "../img/three-kitchen-knife.svg"


function Catalog() {
	return(
		<main className="main">
      <div className="main__knifes knife-main">
        <div className="knife-main__container">
          <div className="main__catalog">
            <div className="main__knifetitle">Каталог Ножей</div>
            <span className="main__knifeline"></span>
            <div className="main__knifeassorti">
              <ul className="main__knifes">
                <li className="main__knifeitem">Разделочные</li>
                <li className="main__knifeitem">Туристические</li>
                <li className="main__knifeitem">Охотничьи</li>
              </ul>
              <img src={huntknife} alt="" className="main__knifeimage" />
            </div>
          </div>
          <div className="main__catalog">
            <div className="main__knifetitle">Среднеклинковое оружие</div>
            <span className="main__knifeline"></span>
            <div className="main__knifeassorti">
              <ul className="main__knifes">
                <li className="main__knifeitem">Разделочные</li>
                <li className="main__knifeitem">Туристические</li>
                <li className="main__knifeitem">Охотничьи</li>
              </ul>
              <img src={armyknife} alt="" className="main__knifeimage" />
            </div>
          </div>
          <div className="main__catalog">
            <div className="main__knifetitle">Длинноклинковое оружие</div>
            <span className="main__knifeline"></span>
            <div className="main__knifeassorti">
              <ul className="main__knifes">
                <li className="main__knifeitem">Разделочные</li>
                <li className="main__knifeitem">Туристические</li>
                <li className="main__knifeitem">Охотничьи</li>
              </ul>
              <img src={swords} alt="" className="main__knifeimage" />
            </div>
          </div>
          <div className="main__catalog">
            <div className="main__knifetitle">Сувенирные изделия</div>
            <span className="main__knifeline"></span>
            <div className="main__knifeassorti">
              <ul className="main__knifes">
                <li className="main__knifeitem">Разделочные</li>
                <li className="main__knifeitem">Туристические</li>
                <li className="main__knifeitem">Охотничьи</li>
              </ul>
              <img src={manykitchen} alt="" className="main__knifeimage" />
            </div>
          </div>
          <div className="main__catalog">
            <div className="main__knifetitle">Сопутствующие товары</div>
            <span className="main__knifeline"></span>
            <div className="main__knifeassorti">
              <ul className="main__knifes">
                <li className="main__knifeitem">Разделочные</li>
                <li className="main__knifeitem">Туристические</li>
                <li className="main__knifeitem">Охотничьи</li>
              </ul>
              <img src={onekitchen} alt="" className="main__knifeimage" />
            </div>
          </div>
          <div className="main__catalog">
            <div className="main__knifetitle">Ножевая мастерская</div>
            <span className="main__knifeline"></span>
            <div className="main__knifeassorti">
              <ul className="main__knifes">
                <li className="main__knifeitem">Разделочные</li>
                <li className="main__knifeitem">Туристические</li>
                <li className="main__knifeitem">Охотничьи</li>
              </ul>
              <img src={threekitchen} alt="" className="main__knifeimage" />
            </div>
          </div>
        </div>
      </div>
    </main>
	);
}

export default Catalog;