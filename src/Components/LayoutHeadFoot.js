import Footer from './Footer';

export default function LayoutWithHeaderFooter({ children }) {
  return (
    <>
      {children}
      <Footer/>
    </>
  );
}