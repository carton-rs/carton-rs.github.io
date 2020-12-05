import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Carton</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className="md:w-1/2 mx-auto">
                <section className="mt-16 pl-8 pr-8">
                    <h1 className="text-5xl text-gray-600 dark:text-gray-200">Carton</h1>
                    <div className="text-lg text-gray-500 dark:text-gray-300 mt-2">
                        <p>
                            Welcome to the Carton homepage.
                            Currently, this page is still in development.
                            It is still being worked on, and will have more information in the future.
                            Come back soon!
                        </p>
                        <p className="mt-4">
                            In the mean time, here are some links to some useful resources:
                        </p>
                        <ul className="list-disc list-inside">
                            <li><Link href="https://github.com/carton-rs/carton"><a className="hover:underline text-blue-500">Github Repository</a></Link></li>
                            <li><Link href="https://crates.io/crates/carton"><a className="hover:underline text-blue-500">Rust Crate</a></Link></li>
                            <li><Link href="https://docs.rs/carton/0.1.0"><a className="hover:underline text-blue-500">API Documentation</a></Link></li>
                            <li><Link href="/book"><a className="hover:underline text-blue-500">Book</a></Link></li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>
        // <div className={styles.container}>
        //   <Head>
        //     <title>Create Next App</title>
        //     <link rel="icon" href="/favicon.ico" />
        //   </Head>
        //
        //   <main className={styles.main}>
        //     <h1 className={styles.title}>
        //       Welcome to <a href="https://nextjs.org">Next.js!</a>
        //     </h1>
        //
        //     <p className={styles.description}>
        //       Get started by editing{' '}
        //       <code className={styles.code}>pages/index.js</code>
        //     </p>
        //
        //     <div className={styles.grid}>
        //       <a href="https://nextjs.org/docs" className={styles.card}>
        //         <h3>Documentation &rarr;</h3>
        //         <p>Find in-depth information about Next.js features and API.</p>
        //       </a>
        //
        //       <a href="https://nextjs.org/learn" className={styles.card}>
        //         <h3>Learn &rarr;</h3>
        //         <p>Learn about Next.js in an interactive course with quizzes!</p>
        //       </a>
        //
        //       <a
        //         href="https://github.com/vercel/next.js/tree/master/examples"
        //         className={styles.card}
        //       >
        //         <h3>Examples &rarr;</h3>
        //         <p>Discover and deploy boilerplate example Next.js projects.</p>
        //       </a>
        //
        //       <a
        //         href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        //         className={styles.card}
        //       >
        //         <h3>Deploy &rarr;</h3>
        //         <p>
        //           Instantly deploy your Next.js site to a public URL with Vercel.
        //         </p>
        //       </a>
        //     </div>
        //   </main>
        //
        //   <footer className={styles.footer}>
        //     <a
        //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       Powered by{' '}
        //       <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        //     </a>
        //   </footer>
        // </div>
    )
}
