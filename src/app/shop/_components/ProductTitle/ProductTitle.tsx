"use client";

import "./ProductTitle.scss";
import Link from "next/link";
import { useSelect } from "@/hooks/useSelect";
import { GetProductsQuery } from "@/graphql/client";
import { Typography, SelectColor } from "@/components";

interface ProductTitleProps {
  product: GetProductsQuery["products"][number];
}

const ProductTitle = ({ product }: ProductTitleProps) => {
  const colors = product.Colors.map(({ color, HEX }) => ({ color, HEX }));
  const { currentIndex, set: setCurrentIndex } = useSelect(colors);

  return (
    <li className="product-title">
      <Link
        className="product-title__link-container"
        href={`/shop/${product.documentId}`}
      >
        <div>
          <img
            width={`100%`}
            src={`http://localhost:1337${product.Colors[currentIndex].photo[0].url}`}
            alt="product image"
          />
        </div>
        <Typography variant="title-2" tag="h4">
          {product.name}
        </Typography>
      </Link>

      <div className="product-title__content-container">
        <Typography variant="sub-title" tag="span">
          {product.category}
        </Typography>
        <section>
          <SelectColor
            options={colors}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
          <span>${product.price}</span>
        </section>
      </div>
    </li>
  );
};

export { ProductTitle };
