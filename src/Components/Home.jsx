import illustration from "../assets/ilustration.svg";
import dot from "../assets/dot.svg";
import client1 from "../assets/clients/client1.svg";
import client2 from "../assets/clients/client2.svg";
import client3 from "../assets/clients/client3.svg";
import client4 from "../assets/clients/client4.svg";
import client5 from "../assets/clients/client5.svg";
import client6 from "../assets/clients/client6.svg";
import client7 from "../assets/clients/client7.svg";
import association from "../assets/community/association.svg";
import clubs from "../assets/community/clubs.svg";
import membership from "../assets/community/membership.svg";


const Home = () => {
  return (
    <section>
    <div className="w-full h-[599px] grid grid-cols-2 place-items-center gap-[104px]">
      <div className="ml-[144px] w-[657px] h-[276px]">
        <h1 className="text-[#4D4D4D] font-semibold text-[64px] leading-[76px]">
          Lessons and insights{" "}
          <span className="text-primary block">from 8 years</span>
        </h1>
        <p className="pt-[16px] pb-[32px]">
          Where to grow your business as a photographer: site or social
          media?
        </p>
        <button className="w-[128px] h-[52px] rounded bg-primary text-white">
          Register
        </button>
      </div>
      <div className="mr-[144px] w-[391px] h-[407px]">
        <img src={illustration} alt="..." />
      </div>
      <div className="flex flex-row gap-2 col-span-2 mb-10">
        <span>
          <img src={dot} alt="..." />
        </span>
        <span className="opacity-[30%]">
          <img src={dot} alt="..." />
        </span>
        <span className="opacity-[30%]">
          <img src={dot} alt="..." />
        </span>
      </div>
    </div>

    <div className="flex flex-col items-center gap-4">
      <div className="w-[1110px] h-[76px] flex flex-col gap-2 items-center">
        <h2 className="text-[#4D4D4D] text-[36px] leading-[44px] font-semibold">
          Our Clients
        </h2>
        <p className="text-[#717171] text-[16px] leading-6">
          We have been working with some Fortune 500+ clients
        </p>
      </div>
      <div className="w-[1152px] h-[98px]">
        <div className="w-full h-full grid grid-cols-7 place-items-center mx-5">
          <img src={client1} alt="..." />
          <img src={client2} alt="..." />
          <img src={client3} alt="..." />
          <img src={client4} alt="..." />
          <img src={client5} alt="..." />
          <img src={client6} alt="..." />
          <img src={client7} alt="..." />
        </div>
      </div>
    </div>

    <div className="w-full h-[416px] grid grid-rows-2 gap-4 place-items-center ">
      <div className="w-full h-[120px] flex flex-col items-center gap-2 ">
        <div className="w-[542px] h-[88px] text-center">
          <h2 className="font-semibold text-4xl leading-[44px] text-[#4D4D4D]">
            Manage your entire community in a single system
          </h2>
        </div>
        <div>
          <p className="text-[#717171] text-[16px] leading-6">
            Who is Nextcent suitable for?
          </p>
        </div>
      </div>

        <div className="h-[280px] w-full px-[114px] grid grid-cols-3 place-items-center ">
          <div className="w-[299px] h-[260px] flex flex-col gap-2 px-8 py-6 ">
            <div className="flex flex-col items-center gap-4 text-center">
              <img src={membership} alt="..." />
              <h3 className="text-[#4D4D4D] font-bold text-[28px] leading-9">
                Membership Organisations
              </h3>
            </div>
            <p className="text-center text-[#717171] text-[14px] leading-5">
              Our membership management software provides full automation
              of membership renewals and payments
            </p>
          </div>
          <div className="w-[299px] h-[260px] flex flex-col gap-2 px-8 py-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <img src={association} alt="..." />
              <h3 className="text-[#4D4D4D] font-bold text-[28px] leading-9">
                National Associations
              </h3>
            </div>{" "}
            <p className="text-center text-[#717171] text-[14px] leading-5">
              Our membership management software provides full automation
              of membership renewals and payments
            </p>
          </div>
          <div className="w-[299px] h-[260px] flex flex-col gap-2 px-8 py-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <img src={clubs} alt="..." />
              <h3 className="text-[#4D4D4D] font-bold text-[28px] leading-9">
                Clubs And Groups
              </h3>
            </div>{" "}
            <p className="text-center text-[#717171] text-[14px] leading-5">
              Our membership management software provides full automation
              of membership renewals and payments
            </p>
          </div>
        </div>
      </div>
  </section>
  )
}

export default Home
