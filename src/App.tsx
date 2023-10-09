import './style.css'
import Header from './components/header'
import Footer from './components/footer'
import Catalog from './components/catalog'
import Board from './components/board'
import Sales from './components/sales'

function App () {
	return(
		<div className="wrapper">
			<Header />
			<Board />
			<Catalog />
			<Sales />
			<Footer />
			</div>
	);
}

export default App;