import "./styles.css";

const LayoutSetup = () => {
  return (
    <>
      <header>
        <ul className="list">
          <li>link</li>
          <li>link</li>
          <li>link</li>
        </ul>
      </header>
      <main>
        <h1>Hello World</h1>

        <section>
          <p>title</p>
          <ul className="list">
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
          </ul>
        </section>

        <section>
          <div>
            <ul className="cards-list">
              <li className="card">CART CONTENT</li>
              <li className="card">CART CONTENT</li>
              <li className="card">CART CONTENT</li>
              <li className="card">CART CONTENT</li>
              <li className="card">CART CONTENT</li>
              <li className="card">CART CONTENT</li>
              <li className="card">CART CONTENT</li>
              <li className="card">CART CONTENT</li>
              <li className="card">CART CONTENT</li>
              <li className="card">CART CONTENT</li>
              <li className="card">CART CONTENT</li>
              <li className="card">CART CONTENT</li>
              <li className="card">CART CONTENT</li>
              <li className="card">CART CONTENT</li>
              <li className="card">CART CONTENT</li>
            </ul>
          </div>
        </section>
      </main>
      <footer>
        <ul className="list">
          <li>link</li>
          <li>link</li>
          <li>link</li>
        </ul>
      </footer>
    </>
  );
};

export { LayoutSetup };
