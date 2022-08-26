import { Text } from "@nextui-org/react";
import React from "react";
const ProductListComponent = () => {
  const products = [
    {
      id: 1,
      name: "Full height hoodie ",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1614214191247-5b2d3a734f1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 2,
      name: "Typo line t-shirt",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1572495673508-62a6b369c380?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      imageAlt: "A cool and minimal typo line theme hoodie with a cool text",
      price: "$55",
      color: "Black",
    },
    {
      id: 3,
      name: "Full height hoodie ",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1555019173-9d073f524ded?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 4,
      name: "Typo line t-shirt",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      imageAlt: "A cool and minimal typo line theme hoodie with a cool text",
      price: "$55",
      color: "Black",
    },
    {
      id: 5,
      name: "Full height hoodie ",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1572986339313-6fb01aa14717?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 6,
      name: "Full height hoodie ",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1545081576-53cc6518383c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=438&q=80",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 7,
      name: "Full height hoodie ",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1573742262768-2693bc5b65e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 8,
      name: "Full height hoodie ",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1545081576-53cc6518383c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=438&q=80",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    ];

  return (
    <>
      <div className="container m-auto">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight ">
            Hoodies
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 transition duration-500 lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-rose-400">
                      <span href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </span>
                    </h3>
                    <Text h5 className="mt-1 text-sm text-rose-300">
                      {product.color}
                    </Text>
                  </div>
                  <Text h5 className="text-sm font-medium">
                    {product.price}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductListComponent;
