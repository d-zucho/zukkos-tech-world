import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Head>
        <title>Zukkos Tech World</title>
      </Head>
      <header>@todo: Navbar</header>
      <main className='main-container'>{children}</main>
      <footer>@todo insert footer</footer>
    </div>
  )
}

export default Layout
