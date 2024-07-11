import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chicken from './Chicken'
import Greeting from './Greeting'
import Die from './Die';
import ListPicker from './ListPicker'
import DiceRollGame from './DiceRollGame'
import Header from './Header'
import Colorlist from './Colorlist'
import Slotmachine from './Slotmachine'
import ShoppingList from './shoppinList'
import PropertyList from './PropertyList'
import HandleClick from './buttonClick'
import FormComponent from './form'
import Clicker from './Clicker'
import Counter from './counter'
import Bgcolor from './bgColor'
import Colors from './Colors'

const data = [
  {id:1,item:'eggs', quantity:10 , complete:false},
  {id:2,item:'milk', quantity:4 , complete:true},
  {id:3,item:'chicken breasts', quantity:4 , complete:false},
  {id:4,item:'carrots', quantity:6 , complete:true},
]

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

const colors = [
  "#E53935",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",
];

function App() {
  return (
    <>
    {/* <Colors colors={colors}/> */}

    {/* <Bgcolor/> */}
    {/* <Counter/> */}
    {/* <ShoppingList items={data}/> */}
     {/* <Greeting name="Rohan"/> */}
    {/* <Clicker msg='Hiii!!!' buttonText='Please!, TextMe!!'/> */}
    {/* <FormComponent/>
    <HandleClick/> */}
      {/* <PropertyList data={properties}/> */}
      <DiceRollGame/>
      <DiceRollGame/>
      <DiceRollGame/>
    {/* <Slotmachine val1='🍒' val2='🍒' val3='🍒' />
      <ShoppingList items={data}/>
    <div >
      <Header text='DiceRoll Game' color='magenta'/>

      <Colorlist colors={['red', 'orange' , 'pink', 'blue']}/>
    </div> 
    <ListPicker values={[1,2,3]}/>
    <ListPicker values={[1,2,3,4,5,6]}/>
    <ListPicker values={["a","b","c","d","e","f"]}/>
    <ListPicker values={["a","b",1,2,3]}/>
     <ListPicker values={{a:1, b:2}}/>
    
    <Die numSides={20}/>
    <Die />
    <Die numSides={10}/>
     <Greeting name="Shanaya"/>Greeter(name)
      <Greeting name="Zoya"/>
      <Greeting name="Resi"/> 
      */}
    </>
  )
}

export default App
