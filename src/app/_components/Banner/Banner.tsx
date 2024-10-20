import "./Banner.scss";
import { Typography, Button } from "@/components";
import { gql } from "@/graphql/client";
import Link from "next/link";

const Banner = async () => {
  const { homePage } = await gql.getHomePage();
  return (
    <section className="banner">
      <video
        src={`http://localhost:1337${homePage.banner.media[0].url}`}
        width={"100%"}
        autoPlay
        muted
        loop
      />
      <article>
        <Typography tag="h1" variant="title-1">
          {homePage.banner.title}
        </Typography>
        <Button view='outlined' size='l'>{homePage.banner.Link.title}</Button>
      </article>
    </section>
  );
};

export { Banner };
