import MobileLogin from "../assets/content/mobile.svg";
import clubs from "../assets/content/bussines/clubs.svg";
import event from "../assets/content/bussines/event.svg";
import members from "../assets/content/bussines/members.svg";
import payment from "../assets/content/bussines/payment.svg";
import mobilepana from "../assets/content/mobilepana.svg";
import profile from "../assets/content/customer/profile.png";

import client1 from "../assets/clients/client1.svg";
import client2 from "../assets/clients/client2.svg";
import client3 from "../assets/clients/client3.svg";
import client4 from "../assets/clients/client4.svg";
import client5 from "../assets/clients/client5.svg";
import client6 from "../assets/clients/client6.svg";

import laptop1 from "../assets/content/marketing/laptop1.png";
import laptop2 from "../assets/content/marketing/laptop2.png";
import laptop3 from "../assets/content/marketing/laptop3.png";

const Content = () => {
  return (
    <section className="w-full grid grid-rows-5 gap-12 mt-[42px]">
      <div className="h-[433px] grid grid-cols-2 place-items-center px-[144px] ">
        <div>
          <img src={MobileLogin} alt="..." />
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-[#4D4D4D] font-semibold text-4xl leading-[44px] max-w-[500px]">
              The unseen of spending three years at Pixelgrade
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
          </div>
          <div>
            <button className="w-[151px] h-[52px] rounded bg-primary text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 place-items-center px-[144px] py-16">
        <div>
          <h2 className="text-[#4D4D4D] font-semibold text-4xl leading-[44px]">
            Helping a local{" "}
            <span className="text-primary inline-block">
              business reinvent itself
            </span>
          </h2>
          <p className="text-[#18191F] text-[16px] leading-6">
            We reached here with our hard work and dedication
          </p>
        </div>

        <div className="w-[540px] h-[160px] grid grid-cols-2">
          <div className="w-[255px] h-[60px] flex flex-row gap-2">
            <img src={members} alt="" />
            <div>
              <h3 className="text-[#4D4D4D] font-bold text-[28px] leading-9">
                2,245,341
              </h3>
              <span>Members</span>
            </div>
          </div>
          <div className="w-[255px] h-[60px] flex flex-row gap-2">
            <img src={clubs} alt="" />
            <div>
              <h3 className="text-[#4D4D4D] font-bold text-[28px] leading-9">
                46,328
              </h3>
              <span>Clubs</span>
            </div>
          </div>
          <div className="w-[255px] h-[60px] flex flex-row gap-2">
            <img src={event} alt="" />
            <div>
              <h3 className="text-[#4D4D4D] font-bold text-[28px] leading-9">
                828,867
              </h3>
              <span>Event Booking</span>
            </div>
          </div>
          <div className="w-[255px] h-[60px] flex flex-row gap-2">
            <img src={payment} alt="" />
            <div>
              <h3 className="text-[#4D4D4D] font-bold text-[28px] leading-9">
                1,926,436
              </h3>
              <span>Payments</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-ful h-[433px] grid grid-cols-2 place-items-center px-[144px]">
        <div>
          <img src={mobilepana} alt="..." />
        </div>
        <div className="w-[661px] h-[308px] flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-[#4D4D4D] font-semibold text-4xl leading-[44px]">
              How to design your site footer like we did
            </h2>
            <span className="text-[#717171] text-[14px] leading-5">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </span>
          </div>
          <div>
            <button className="w-[151px] h-[52px] rounded bg-primary text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="h-[390px] py-[78px] px-[144px] flex flex-row items-center gap-[78px]">
        <div>
          <img src={profile} width="326px" alt="..." />
        </div>
        <div className="flex flex-col gap-4 max-w-[748px]">
          <h4 className="text-[#717171] font-medium text-[16px] leading-6">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </h4>
          <div className="flex flex-col gap-2">
            <h4 className="text-primary text-xl">Tim Smith </h4>
            <span className="block text-[#89939E] text-[16px] leading-6">
              British Dragon Boat Racing Association
            </span>
          </div>

          <div className="h-[48px] flex flex-row gap-[32px]">
            <div className="flex flex-row gap-[48px]">
              <div>
                <img src={client1} alt="..." />
              </div>
              <div>
                <img src={client2} alt="..." />
              </div>
              <div>
                <img src={client3} alt="..." />
              </div>
              <div>
                <img src={client4} alt="..." />
              </div>
              <div>
                <img src={client5} alt="..." />
              </div>
              <div>
                <img src={client6} alt="..." />
              </div>
            </div>
            <div className="flex items-center">
              <h4 className="text-center text-primary text-xl">
                Meet all costumer{" "}
                <svg
                  width="24"
                  className="inline"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 16.399L19.2929 13.1062C19.6834 12.7156 19.6834 12.0825 19.2929 11.6919L16 8.39905M19 12.399L5 12.399"
                    stroke="#4CAF4F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[506px] flex flex-col px-[144px] gap-4">
        <div className="flex flex-col items-center max-w-[1110px] h-[124px] text-center gap-2">
          <h1 className="font-semibold text-4xl text-[#4D4D4D]">
            Caring is the new marketing
          </h1>
          <p className="max-w-[628px]">
            The Nexcent blog is the best place to read about the latest
            membership insights, trends and more. See who&apos;s joining the
            community, read about how our community are increasing their
            membership income and lot&apos;s more.
          </p>
        </div>

        <div className="h-[366px] grid grid-cols-3 place-items-center gap-4">
          <div className="w-[368px] flex flex-col items-center">
            <img src={laptop1} alt="..." className="rounded-lg " />
            <div className="w-[317px] shadow-bottom h-[176px] mt-[-96px] p-[16px] bg-white flex flex-col items-center text-center gap-4 relative rounded-lg">
              <h4 className="text-xl text-[#717171]">
                Creating Streamlined Safeguarding Processes with OneRen
              </h4>
              <a className="font-semibold text-primary" href="">
                Readmore{" "}
                <svg
                  width="24"
                  className="inline"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 16.399L19.2929 13.1062C19.6834 12.7156 19.6834 12.0825 19.2929 11.6919L16 8.39905M19 12.399L5 12.399"
                    stroke="#4CAF4F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="w-[368px] flex flex-col items-center">
            <img src={laptop2} alt="..." className="rounded-lg " />
            <div className="w-[317px] shadow-bottom h-[176px] mt-[-96px] p-[16px] bg-white flex flex-col items-center text-center gap-4 relative rounded-lg">
              <h4 className="text-xl text-[#717171]">
                Creating Streamlined Safeguarding Processes with OneRen
              </h4>
              <a className="font-semibold text-primary" href="">
                Readmore{" "}
                <svg
                  width="24"
                  className="inline"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 16.399L19.2929 13.1062C19.6834 12.7156 19.6834 12.0825 19.2929 11.6919L16 8.39905M19 12.399L5 12.399"
                    stroke="#4CAF4F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="w-[368px] flex flex-col items-center">
            <img src={laptop3} alt="..." className="rounded-lg " />
            <div className="w-[317px] shadow-bottom h-[176px] mt-[-96px] p-[16px] bg-white flex flex-col items-center text-center gap-4 relative rounded-lg">
              <h4 className="text-xl text-[#717171]">
                Creating Streamlined Safeguarding Processes with OneRen
              </h4>
              <a className="font-semibold text-primary" href="">
                Readmore{" "}
                <svg
                  width="24"
                  className="inline"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 16.399L19.2929 13.1062C19.6834 12.7156 19.6834 12.0825 19.2929 11.6919L16 8.39905M19 12.399L5 12.399"
                    stroke="#4CAF4F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
