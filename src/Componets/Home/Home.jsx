import React, {useState} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import data_product from '../Assets/data';
import { Item } from '../Item/Item';
import './Home.css';




export const Home = () => {
  const [searchTerm,setSearchTerm] = useState("");
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
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
    <div className='home'>
        <div className="container">
          <div className="bottom">
              <div className="search--bar">
                  <input type="text" placeholder='Type here' onChange={(event)=>{
                      setSearchTerm(event.target.value)
                  }}/>
              </div>
          </div>
            <h2>Find Your Book</h2>
            <Carousel responsive={responsive} className='carousel'>
                {data_product.filter((item)=>{
                  if(searchTerm === '') {
                    return item;
                  } else if(item.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
                    return item;
                  }
                }).map((item,i)=>{
                        return <Item key={i} id={item.id} title={item.title} image={item.image} author={item.author} decsription={item.description}/>
                    })}
            </Carousel>
            <div className='btn'>
                <button>Exploire More</button>
            </div>
        </div>
    </div>
  )
}
