import React, { useEffect, useState,useRef } from 'react'

export default function Ecom() {
    const [productID,setProductID]=useState('');
    const [productPrice,setProductPrice]=useState('');
    const [productName,setProductName]=useState('');
    const[listData,setListData]=useState([]);
    const previousInputValue = useRef("");
    
function submit(event){
  event.preventDefault();
}
    function onProductID(event){
        setProductID(event.target.value)
    }
    function onProductprice(event){
        setProductPrice(event.target.value)   
    }
    function onProductName(event){
        setProductName(event.target.value) 
    }
    
      
      console.log(productID,productPrice,productName);
      var parent1=document.getElementById('value')
      var child2=Number(0);
      function listHandler(id,price,name){
        setListData((prevData)=>{
    return [...prevData,
      {id:productID,price: productPrice , name:productName}]
        })
        var child1=document.getElementById('price').value;
        var d=parseInt(child1);
       
        child2=child2+d;
       parent1.innerHTML=child2

      }
      useEffect(()=>{
localStorage.setItem('productID',JSON.stringify(listData))
      },[listData])
      
      
  
  function RemoveData(i){
     const list=listData.filter((elem, id)=>{
      return i!==id;
     })
     setListData(list)
  }
   
  return (
    <div>
    <div>
       
        
            
<form onSubmit={submit}> 
               <label htmlFor="productid">Product ID:</label>
               <input type='number' onChange={onProductID} value={productID}></input>

                <label htmlFor="price">Selling Price:</label>
               <input type='number' id='price'onChange={onProductprice} value={productPrice} ref={previousInputValue}></input>
    
               <label htmlFor="name">Product Name:</label>
                <input type='text' onChange={onProductName} value={productName}></input>
        
            
              <button type="submit" onClick={listHandler} >Add Product</button>
             

</form>
        

     </div>
     <h1>Products</h1>
     <ul id="object">

     </ul>
     <h4>Total Value Worth of Products:</h4>
     <span id="value"> Value display here</span>
    
    {listData !==[] && listData.map((data, index)=>{
      return(
          <ul key={index}>
              <li>
                  <div >{data.id}
                  {data.price}
                  {data.name}</div>
                  
                  <button onClick={()=>RemoveData(index)} >Remove</button>
                 
              </li>
          </ul>
          
      )
  })}
    </div>
  )
}
