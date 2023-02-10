import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

// pages/ssr.js
export default function SSR({ formattedDate }) {
  return (
    <>
      <h1>Server-side rendered page</h1>
      <p>
        This page is server-side rendered. It was rendered on {formattedDate}.
      </p>
      <p>
        <Link href="/">View a static page.</Link>
      </p>
    </>
  );
}

export async function getServerSideProps() {
  const renderDate = Date.now();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "long",
  }).format(renderDate);
  console.log(
    `SSR ran on ${formattedDate}. This will be logged in CloudWatch.`
  );
  return { props: { formattedDate } };
}
