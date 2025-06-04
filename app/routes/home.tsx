import { Main } from "~/pages/Main";
import Layout from "~/layout/Layout";

export function meta() {
  return [
    { title: "English Corner Academy" },
    { name: "description", content: "Welcome to English Corner Academy!" },
    { name: "keywords", content: "English, Academy, Learning, Education" },
    { name: "author", content: "English Corner Academy Team" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { charset: "UTF-8" },
    { name: "msapplication-starturl", content: "/" },	
  ];
}

export default function Home() {
  return(<Layout><Main /></Layout>);
}
