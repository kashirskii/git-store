import { gql } from "@/graphql/client";
import { ProductTitle } from "./_components/ProductTitle";
import "./Page.scss";

const ShopPage = async () => {
  const { products } = await gql.getProducts();

  return (
    <main>
      <section className="products-container">
        {products.map((product) => {
          return <ProductTitle key={product.name} product={product} />;
        })}
      </section>
    </main>
  );
};

export default ShopPage;
