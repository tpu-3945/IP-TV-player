import Header from "./Header";

const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-grow container mx-auto p-4 md:p-6">{children}</main>
  </div>
);

export default Layout;
