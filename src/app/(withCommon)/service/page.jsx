import ServiceHeader from "@/components/pages/ServicePage/Header/Header";
import OurServices from "@/components/pages/ServicePage/OurServices/OurServices";
import Container from "@/components/ui/Container";

const ServicePage = () => {
  return (
    <Container className="pt-32 pb-20">
      <ServiceHeader />

      <OurServices />

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">
          Ready to Grow Your Business?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Contact us today to learn how we can help you succeed online.
        </p>
        <button className="custom-primary-btn py-5">Get in Touch</button>
      </div>
    </Container>
  );
};

export default ServicePage;
