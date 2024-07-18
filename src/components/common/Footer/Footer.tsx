function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className="text-center py-3 border-top border-danger-subtle">
      © {date} Our E-commerce. All rights reserved.
    </div>
  );
}

export default Footer;
