import { Layout } from 'antd';
import { Button, Card } from 'antd';
import GallerySection from './components/GallerySection';
import { Expertise } from './components/Expertise';

const { Content } = Layout;

const sections = [
  {
    title: "Purpose",
    text: "To provide and maintain the highest standard of orthotic, prosthetic, and rehabilitation care, in a scientific and professional environment for all age groups.",
    imgSrc: "https://tse2.mm.bing.net/th/id/OIP.b-q3vxUzBsxp41JhgSr9uQHaE8?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
    alt: "Purpose image representing care and professionalism",
  },
  {
    title: "Goal",
    text: "To assure the best possible rehabilitation outcome for every individual referred to our center for orthotic, prosthetic, and rehabilitation services.",
    imgSrc: "https://lsom.uthscsa.edu/rehab/wp-content/uploads/sites/139/2018/09/iStock-503663810.jpg",
    alt: "Goal image depicting patient progress",
  },
  {
    title: "Objectives",
    textList: [
      "Utilize latest technologies and partnerships with leading manufacturers.",
      "Serve children, adults, and seniors with personalized solutions.",
    ],
    imgSrc: "https://prognocis.com/wp-content/uploads/2022/01/young-medical-specialists-high-five-2048x1367.jpg",
    alt: "Objectives image showing teamwork and care",
  },
];

export default function Home() {
  return (
    <Layout className="min-h-screen bg-gray-50">
      <section className="flex flex-col min-h-svh -my-12 md:flex-row md:items-center md:justify-center gap-8">
        <div className="order-2 md:order-1 md:w-1/2 pt-5">
          <GallerySection />
        </div>
        <div className="order-1 md:order-2 flex flex-col items-center justify-center gap-4 md:w-1/2">
          <h1 className="text-2xl md:text-5xl font-bold text-blue-400 text-center my-6 !mt-20">
            Welcome to Atrafi Medical Center
          </h1>
          <p className="max-w-2xl text-center text-lg text-blue-950">
            Atrafi is dedicated to providing and maintaining the highest quality of comprehensive orthotic and prosthetic (O&P) and rehabilitation care for our patients in a scientific and professional environment.
          </p>
          <div className="flex gap-4 justify-center my-4">
            <Button type="primary" size="large" href="/services">
              View Services
            </Button>
            <Button type="default" size="large" href="/contact">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Purpose, Goal, Objectives Section */}

      <section className="mt-16 px-5 py-15 space-y-16 bg-blue-50/90">
        {sections.map(({ title, text, textList, imgSrc, alt }, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-center max-w-5xl mx-auto ${
              idx % 2 === 1 ? "md:flex-row-reverse" : ""
            } gap-6`}
          >
            <img
              src={imgSrc}
              alt={alt}
              className="w-full md:w-1/2 h-64 object-cover rounded shadow-2xl p-2 bg-blue-50"
            />
            <div className="md:w-1/2 text-start md:text-left">
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">{title}</h3>
              {text && <p className="text-blue-950 text-lg">{text}</p>}
              {textList && (
                <ul className="text-lg pl-4 list-disc list-outside text-blue-950">
                  {textList.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </section>


      {/* Services Highlights section */}
      <section className="grid md:grid-cols-3 gap-6 my-15 px-5">
        <Card title="For All Ages" className="shadow-lg bg-blue-50">
          <p>
            Serving children, adults, and seniors with tailored O&amp;P and rehab care, in partnership with doctors and therapists.
          </p>
        </Card>
        <Card title="Comprehensive Care" className="shadow-lg">
          <p>
            Full range of orthotics &amp; prosthetics services, from consultation to treatment, using leading international brands.
          </p>
        </Card>
        <Card title="Excellence &amp; Ethics" className="shadow-lg">
          <p>
            Scientific, professional standards and partnerships ensure the best rehabilitation outcomes for all patients.
          </p>
        </Card>
      </section>
      <Expertise />
    </Layout>
  );
}
