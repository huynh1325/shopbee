import Header from "./Header";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="context">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
