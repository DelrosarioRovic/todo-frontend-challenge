"use client";
import Layout from "./components/Layout";
import Container from "./components/Container";

export default function Home() {
  return (
    <div className="max-w-[90rem] m-auto">
      <Layout>
        <Container />
      </Layout>
    </div>
  );
}
