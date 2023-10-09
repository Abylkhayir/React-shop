import Boardblades from "../img/busket__knife.svg"
import Check from "../img/check.svg"
import Delivery from "../img/Car.svg"
import Boardplace from "../img/board.svg"
import Price from "../img/percent.svg"

function Board() {
	return(
		<div className="board">
			<div className="board__container _container">
				<div className="board__card">
					<div className="board__info">
						<h1 className="board__title">
						<span>Интернет магазин сертифицированных</span> златоустовских ножей
						</h1>
						<div className="board__subtitle">Добро пожаловать на официальный сайт «ЗЛАТМАКС»! В нашем магазине 
						представлен наиболее широкий выбор Златоустовских ножей от Златоустовских 
						Оружейных Фабрик и компаний, мы являемся официальными поставщиками.</div>
						<div className="board__button"><button>Поподробнее</button></div>
					</div>
					<div className="board__image"><img src={Boardblades} alt="" className="board__imageblades" /></div>
				</div>
				<div className="board__bottom">
					<div className="board__haranty">
						<img src={Check} alt="" className="board__img" />
						<div className="board__bottomtext">Гарантия 100% возврата денежных средств</div>
					</div>
					<div className="board__delivery">
						<img src={Delivery} alt="" className="board__img" />
						<div className="board__bottomtext">Доставка по России, Казахстану и Белоруссии</div>
					</div>
					<div className="board__registry">
						<img src={Boardplace} alt="" className="board__img" />
						<div className="board__bottomtext">Возможность оформление заказа без регистрации.</div>
					</div>
					<div className="board__price">
						<img src={Price} alt="" className="board__img" />
						<div className="board__bottomtext">Скидки постоянным покупателям. </div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Board;