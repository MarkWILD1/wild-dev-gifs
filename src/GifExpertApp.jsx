import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Caballeros del zodiaco' ]);

    const onAddCategory = (newCategory) => {

        if( categories.includes(newCategory) ) return;
        //console.log(newCategory);
        setCategories( [newCategory, ...categories] );
        //categories.push(newCategory)

        //setCategories([ ...categories, inputValue ]) //1ra forma de hacerlo
        //setCategories(cat => [ ...cat, 'Evangelium']);
    }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory
            onNewCategory={ event => onAddCategory(event) } 
            //setCategories={ setCategories }/>
        />

        { 
            categories.map( ( category ) => (
                <GifGrid 
                    key={ category } 
                    category={ category }
                />
            )) 
        }
       
    </>
  )
}
