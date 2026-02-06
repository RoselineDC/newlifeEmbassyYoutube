"use client";

import React, { useEffect, useState } from "react";
// import HomeTabBar from "./HomeTabBar";
import { productType } from "./constants/data";
// import { client } from "@/sanity/lib/client";
import { Loader2 } from "lucide-react";
// import NoProductsAvailable from "./NoProductsAvailable";
// import { AnimatePresence } from "motion/react";
// import {motion} from "motion/react"
// import ProductCard from "./productCard"
// import { Product } from "@/sanity.types";



const SundayService = () => {
//   const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(
    productType[0]?.title ?? ""
  );

  const query = `*[_type == "product" && variant == $variant] | order(name desc){
    ...,
    "categories": categories[]->title
  }`;

//   useEffect(() => {
//     if (!selectedTab) return;

//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const response = await client.fetch(query, {
//           variant: selectedTab.toLowerCase(),
//         });
//         setProducts(response);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [selectedTab]);

  return (
    <div>
      {/* <HomeTabBar
        selectedTab={selectedTab}
        onTabSelect={setSelectedTab}
      /> */}
{/* 
      {loading ? (
    //     <div className="flex flex-col justify-center items-center py-10 min-h-80 gap-4 bg-shop-lighter-bg w-full mt-10">
    //       <div className="flex items-center space-x-2 text-blue-600">
    //         <Loader2 className="animate-spin w-5 h-5" />
    //         <span>Loading products...</span>
    //       </div>
    //     </div>
    //   ) : products.length ? (
    //    <div className="grid grid-cols2 md:grid-cols-3 lg:grid-cols-5 gape-2.5 mt-10">
    //    {products?.map((product) =>(
    //      <AnimatePresence key={product?._id}>
    //         <motion.div 
    //         layout initial={{opacity: 0.2}}
    //         animate={{opacity:1}}
    //         exit={{opacity:0.2}}

    //         >
          
    //             <ProductCard product={product} />
             
    //           </motion.div>
    //       </AnimatePresence>
       ))} */}
       {/* </div>
      ) : (
        <div className="mt-10 text-center text-gray-500">
         <NoProductsAvailable selectedTab={selectedTab} />
        </div>
      )} */}
    </div>
  );
};

export default SundayService;
