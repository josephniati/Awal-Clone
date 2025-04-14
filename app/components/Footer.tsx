const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white text-center py-4 mt-auto'>
      <p className='text-sm'>
        &copy; {new Date().getFullYear()} Music Exchange
      </p>
    </footer>
  );
};

export default Footer;
