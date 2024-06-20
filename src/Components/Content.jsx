import MobileLogin from "../assets/content/mobile.svg";
import clubs from "../assets/content/bussines/clubs.svg";
import event from "../assets/content/bussines/event.svg";
import members from "../assets/content/bussines/members.svg";
import payment from "../assets/content/bussines/payment.svg";
import mobilepana from "../assets/content/mobilepana.svg";
import profile from "../assets/content/customer/profile.svg";

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

      <div className="h-[390px] py-[78px] px-[144px]"></div>

      <div></div>
    </section>
  );
};

export default Content;
