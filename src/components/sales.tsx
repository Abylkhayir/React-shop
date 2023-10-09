import Scale from '../img/scales.svg'
import Like from '../img/like.svg'
import Star from '../img/star.svg'
import Foxknife from '../img/classicknife.svg'

function Sales() {
	return(
		<div className="sales">
			<div className="sales__container _container">
				<div className="sales__title">
					<div className="sales__sales">Хиты продаж</div>
					<div className="sales__catalog">Перейти в каталог</div>
				</div>
				<div className="sales__chooses">
					<div className="sales__onechoose">
						<img src={Foxknife} alt="" className="sales__img" />
						<div className="sales__fox">Нож Лиса</div>
						<div className="sales__onesub">
							<div className="sales__size">95х18</div>
							<div className="sales__compound">Орех, Алюминий</div>
						</div>
						<div className="sales__twosub">
							<div className="sales__stars">
								<img src={Star} alt="" className="sales__star" />
								<img src={Star} alt="" className="sales__star" />
								<img src={Star} alt="" className="sales__star" />
								<img src={Star} alt="" className="sales__star" />
								<img src={Star} alt="" className="sales__star" />
							</div>
							<div className="sales__review">12 отзывов</div>
						</div>
						<div className="sales__span"><span></span></div>
						<div className="sales__cash">
							<div className="sales__money">2 719 р.</div>
							<div className="sales__icons">
								<img src={Scale} alt="" className="sales__iconone" />
								<img src={Like} alt="" className="sales__icontwo" />
							</div>
						</div>
						<button className="sales__button">В корзину</button>
					</div>
					<div className="sales__onechoose">
						<img src={Foxknife} alt="" className="sales__img" />
						<div className="sales__fox">Нож Лиса</div>
						<div className="sales__onesub">
							<div className="sales__size">95х18</div>
							<div className="sales__compound">Орех, Алюминий</div>
						</div>
						<div className="sales__twosub">
							<div className="sales__stars">
								<img src={Star} alt="" className="sales__star" />
								<img src={Star} alt="" className="sales__star" />
								<img src={Star} alt="" className="sales__star" />
								<img src={Star} alt="" className="sales__star" />
								<img src={Star} alt="" className="sales__star" />
							</div>
							<div className="sales__review">12 отзывов</div>
						</div>
						<div className="sales__span"><span></span></div>
						<div className="sales__cash">
							<div className="sales__money">2 719 р.</div>
							<div className="sales__icons">
								<img src={Scale} alt="" className="sales__iconone" />
								<img src={Like} alt="" className="sales__icontwo" />
							</div>
						</div>
						<button className="sales__button">В корзину</button>
					</div>
					<div className="sales__onechoose">
						<img src={Foxknife} alt="" className="sales__img" />
						<div className="sales__fox">Нож Лиса</div>
						<div className="sales__onesub">
							<div className="sales__size">95х18</div>
							<div className="sales__compound">Орех, Алюминий</div>
						</div>
						<div className="sales__twosub">
							<div className="sales__stars">
								<img src={Star} alt="" className="sales__star" />
								<img src={Star} alt="" className="sales__star" />
								<img src={Star} alt="" className="sales__star" />
								<img src={Star} alt="" className="sales__star" />
								<img src={Star} alt="" className="sales__star" />
							</div>
							<div className="sales__review">12 отзывов</div>
						</div>
						<div className="sales__span"><span></span></div>
						<div className="sales__cash">
							<div className="sales__money">2 719 р.</div>
							<div className="sales__icons">
								<img src={Scale} alt="" className="sales__iconone" />
								<img src={Like} alt="" className="sales__icontwo" />
							</div>
						</div>
						<button className="sales__button">В корзину</button>
					</div>
					<div className="sales__onechoose">
						<img src={Foxknife} alt="" className="sales__img" />
						<div className="sales__fox">Нож Лиса</div>
						<div className="sales__onesub">
							<div className="sales__size">95х18</div>
							<div className="sales__compound">Орех, Алюминий</div>
						</div>
						<div className="sales__twosub">
							<div className="sales__stars">
								<img src={Star} alt="" className="sales__star" />
								<img src={Star} alt="" className="sales__star" />
								<img src={Star} alt="" className="sales__star" />
								<img src={Star} alt="" className="sales__star" />
								<img src={Star} alt="" className="sales__star" />
							</div>
							<div className="sales__review">12 отзывов</div>
						</div>
						<div className="sales__span"><span></span></div>
						<div className="sales__cash">
							<div className="sales__money">2 719 р.</div>
							<div className="sales__icons">
								<img src={Scale} alt="" className="sales__iconone" />
								<img src={Like} alt="" className="sales__icontwo" />
							</div>
						</div>
						<button className="sales__button">В корзину</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Sales;