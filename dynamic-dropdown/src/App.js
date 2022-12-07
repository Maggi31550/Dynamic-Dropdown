
import 'bootstrap/scss/bootstrap.scss';
import './style.sass'
import DropdownComponent from './components/DropdownComponent';
import FoodComponent from './components/FoodComponent';
import {useState} from 'react'
import MenuData from './data/MenuData';

function App() {
	const [foods, setFoods] = useState(MenuData);

	const changeFoodData = (e)=>{
		const category = e.target.value
		

		if (category ==='เมนูทั้งหมด'){
			setFoods(MenuData)
		}else{
			const result = MenuData.filter((element)=>{
				return element.menu === category
			})
			setFoods(result)
		}
	}
	return (
		<div >
			<DropdownComponent changeFoodData={changeFoodData}/>
			<div className='row g-3 my-1'>
				{foods.map((data,index)=>{
					return <FoodComponent key={index} {...data}/>
				})}
			</div>
			
		</div>
	);
}

export default App;
