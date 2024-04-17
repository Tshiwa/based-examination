import React, {useState} from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import products from '../Componets/Assets/Products';
import { ItemOp } from '../Componets/Item_op/ItemOp';

export const Books = () => {
  const [searchTerm,setSearchTerm] = useState("");
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className='Books'>
        <div className="container">
          <div className="bottom">
              <div className="search--bar">
                  <input type="text" placeholder='Type here' onChange={(event)=>{
                      setSearchTerm(event.target.value)
                  }}/>
              </div>
          </div>
            <h2>All category</h2>
            <Carousel responsive={responsive} className='carousel'>
                {products.filter((item)=>{
                  if(searchTerm === '') {
                    return item;
                  } else if(item.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
                    return item;
                  }
                }).map((item,i)=>{
                        return <ItemOp key={i} id={item.id} title={item.title} image={item.image} author={item.author} price={item.price}/>
                    })}
            </Carousel>
            <h2>Poems</h2>
            <Carousel responsive={responsive} className='carousel'>
                {products.filter((item)=>{
                  if(searchTerm === '') {
                    return item;
                  } else if(item.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
                    return item;
                  }
                }).map((item,i)=>{
                        return <ItemOp key={i} id={item.id} title={item.title} image={item.image} author={item.author} price={item.price}/>
                    })}
            </Carousel>
            <h2>Quotes</h2>
            <Carousel responsive={responsive} className='carousel'>
                {products.filter((item)=>{
                  if(searchTerm === '') {
                    return item;
                  } else if(item.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
                    return item;
                  }
                }).map((item,i)=>{
                        return <ItemOp key={i} id={item.id} title={item.title} image={item.image} author={item.author} price={item.price}/>
                    })}
            </Carousel>
            <div className='btn'>
                <button>Exploire More</button>
            </div>
        </div>
    </div>
  )
}
