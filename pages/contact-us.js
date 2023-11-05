import { Layout } from "@/src/components";
import Footer from "@/src/components/footer/Footer";
import ContactForm from "@/src/components/form/Form";
import Navbar from "@/src/components/navbar/Navbar";

const contact = () => {
  return (
    <Layout
      navbarStyles="lg:bg-white shadow-md"
      navbarStyles2="lg:bg-white shadow-md"
    >
      <main className="w-full pt-32 lg:pt-48">
        <ContactForm />
      </main>
    </Layout>
  );
};

export default contact;
