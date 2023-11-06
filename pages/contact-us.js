import { Layout } from "@/src/components";
import ContactForm from "@/src/components/form/Form";

const contact = () => {
  return (
    <Layout
      navbarStyles="lg:bg-white shadow-sm"
      navbarStyles2="lg:bg-white shadow-sm"
    >
      <main className="w-full pt-32 lg:pt-48">
        <ContactForm />
      </main>
    </Layout>
  );
};

export default contact;
