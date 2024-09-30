"use client"
import React, { useEffect, useState } from 'react';

const Meals = () => {
  const [search,setSearch]=useState("apple");
  const [error,setError]=useState([""]);
  const [meals,setMeals]=useState([]);
  const leadDate = async()=>{
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`);
      const data = await res.json();
      console.log(data.meals);
      setMeals(data.meals);
      setError("");
    } catch (error) {
      setError("No data found");
      console.log(error.message)
    }
    
  
  }

  useEffect(()=>{
    leadDate();
  },[search])

  const handler=(e)=>{
    
    setSearch(e.target.value);
  }
  
  return (
    <div className="p-12">
      <h1 className="text-3xl font-semibold text-red-400">Choose Your meals</h1>
      <p>Choose meals of you choice by searhing........</p>
    
      <input
      onChange={handler}
      className="p-4 outline-none border-transparent text-slate-900" 
      type="text"
      placeholder=" search meals...."
      />

      <button className="bg-red-400 p-4">search</button>
      <div className="mt-12 grid grid-cols-3 gap-10">
        {
          meals?.length>0 && !error && meals?.map((meal)=>(
            <div key={meal?.idMeal} className="border-2 p-4">
                <h6>{meal.strMeal}</h6>
                <p>{meal.strInstructions}</p>

            </div>
          ))
        }
        {
          error && <h6>No data found </h6>
        }

      </div>



    </div>


  );
};

export default Meals;