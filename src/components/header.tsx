import logo from "../img/logo.svg"
import user from "../img/user.svg"
import group from "../img/Group.svg"
import like from "../img/like.svg"
import basket from "../img/basket.svg"

function Header() {
	return (
		 <header className="header">
			 <div className="header__top top-header">
			 <div className="top-header__container">
				 <ul className="header__menu">
					 <li className="header__item">О нас</li>
					 <li className="header__item">Оплата и доставка</li>
					 <li className="header__item">Новости</li>
					 <li className="header__item">Контакты</li>
				 </ul>
				 <div className="header__account">
					 <img src={user} alt="" className="header__logouser" />
					 <a href="" className="header__user">
					 Личный кабинет
					 </a>
				 </div>
			 </div>
			 </div>
			 <div className="header__body body-header">
			 <div className="body-header__container">
				 <img src={logo} alt="" className="header__logoshop" />
				 <div className="header__searchholder">
					 <input
					 autoComplete="off"
					 type="text"
					 data-error="Ошибка"
					 placeholder="Поиск"
					 className="searchholder__input"
					 />
				 </div>
				 <div className="header__actions">
					 <div className="header__city">
					 <img src="./img/Location.svg" alt="" className="header__location" />
					 <div className="header__moscow">Москва</div>
					 </div>
					 <div className="header__phone">
					 <div className="header__numbers">8-800-777-49-67</div>
					 <div className="header__call">Заказать звонок</div>
					 </div>
					 <img src={group} alt="" className="header__group" />
					 <img src={like} alt="" className="header__like" />
					 <img src={basket} alt="" className="header__basket" />
					 <div className="header__buy">
					 <div className="header__rub">0 р.</div>
					 <div className="header__sale">Оформить заказ</div>
					 </div>
				 </div>
			 </div>
			 </div>
			 <div className="header__catalog catalog-header">
			 <div className="catalog-header__container">
				 <ul className="header__catalogmenu">
					 <li className="header__catalogitem">Каталог ножей</li>
					 <li className="header__catalogitem">Клинковое оружие</li>
					 <li className="header__catalogitem">Сувенирные изделия</li>
					 <li className="header__catalogitem">Фонари ARMYTEK</li>
					 <li className="header__catalogitem">Сопуствующие товары</li>
				 </ul>
			 </div>
			 </div>
		 </header>
	);
 }
 
 export default Header;