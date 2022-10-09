import type { NextPage } from "next";
import { CurrentlyAt, DefaultLayout, Experience, Footer } from "../components";
import { About } from "../components/About";
import { Contact } from "../components/Contact";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <CurrentlyAt />
      <Experience />
      <About />
      {/* <Contact /> */}
      <Footer />
    </DefaultLayout>
  );
};

export default Home;
{
  /* <main className={styles.main}>
       
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */
}
