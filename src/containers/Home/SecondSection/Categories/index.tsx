import React, {useEffect, useState} from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    const fetchData = async () => {
        const req = await fetch('http://103.179.254.140:4444/categories')
        console.log('this req', req)
        const res = await req.json()
        setCategories(res.data);
    }

    useEffect(() => {
        fetchData();
    }, []);
    
    return (
        <>
            <h3 className="text-heading-3 text-gray-100 font-label font-bold pt-14 mb-8">
                Kategori Tempat
            </h3>
            <div className="flex justify-between">
                {categories.map((x, index) => (
                    <CategoryCard key={index} item={x} />
                ))}
            </div>
        </>


    )
}

export default Categories