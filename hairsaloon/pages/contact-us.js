import Layout from "../components/layout/layout";
import ContactUsForm from "../components/contact-us/contact-us-form/ContactUsForm";
import ContactSection from "../components/contact-us/contact-section/ContactSection";
import ContactUsHeader from "../components/contact-us/contact-us-header/ContactUsHeader";
import ContactUsLocations from "../components/contact-us/contact-us-locations/ContactUsLocations";

export default function ContactUs() {
  return (
    <Layout>
      <section class="dark-gray min-h-[920px] flex xl:items-end relative">
        {/* <div id="googleMap" class="absolute top-0 left-0 w-full h-full"></div> */}
        <div class="myContainer lg:pt-[220px] pt-[110px]  pb-[50px] text-white">
          <ContactUsHeader />
          <ContactUsForm />
          <ContactSection />
          <ContactUsLocations />
        </div>
      </section>
    </Layout>
  );
}
