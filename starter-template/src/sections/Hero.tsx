import memoji from "@/assets/images/memoji.png"
import Image from "next/image"
import ArrowDown from "@/assets/icons/arrow-down.svg"

export const HeroSection = () => {
  return <div className="py-32">
    <div className="container">
      <div className="flex flex-col items-center">
        <Image
          src={memoji}
          className="size-[120px]"
          alt="Memoji"
        />
        <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex">
          <div></div>
          <div>Available for new projects</div>
        </div>
      </div>
      <h1>Building Exceptional User Experiences</h1>
      <p>
        I specialize in transforming designs into functional, high-performing web applications. Let's discuss your next project.
      </p>
      <div>
        <button>
          <span>Explore My Work</span>
          <ArrowDown />
        </button>
        <button>
          <span>👋</span>
          <span>Let's Connect</span>
        </button>
      </div>
    </div>
  </div>;
};
