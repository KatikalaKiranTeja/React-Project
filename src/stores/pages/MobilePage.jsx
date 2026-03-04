import React, { useState } from 'react'
import {mobileData} from '../data/mobiles'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { getProductBrand, getProductImage, getProductModel } from '../utils/productHelpers'

function MobilePage() {
    const [selectedProduct,setSelectedProduct] = useState([])
    const uniqueCompanies = [...new Set(mobileData.map((item) => item.company))]

    const companyHandler = (mango)=>{
        if(selectedProduct.includes(mango)){
            setSelectedProduct(selectedProduct.filter(item=>item !== mango))
        }
        else{
            setSelectedProduct([...selectedProduct,mango])
        }
    }

    const filteredProduct = selectedProduct.length===0?
        mobileData : mobileData.filter((orange)=>selectedProduct.includes(orange.company))

  return (
        <>
        <Navbar/>
            <div className="fullpage">
                
        <div className="pro-selected">
            {uniqueCompanies.map((company)=>{
                return(
                    <div className='pro-input' key={company}>
                        <label>
                            <input
                            className="company-checkbox"
                            type="checkbox" 
                            checked = {selectedProduct.includes(company)}
                            onChange={()=>companyHandler(company)}
                            />
                            {company}
                        </label>
                    </div>
                )
            })}
        </div>
            <div className="pageSection">
                {
                    filteredProduct.map((item)=>{
                        return(
                            <div key={item.id}>
                                <Link to={`/mobiles/${item.id}`}>
                                    <div className="pageImg">
                                        <img src={getProductImage(item)} alt={item.model} />
                                    </div>
                                </Link>
                                <div className="proModel">
                                    {getProductBrand(item)}, {getProductModel(item)}
                                </div>
                                <div className="proPrice">${item.price}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </>
  )
}

export default MobilePage
