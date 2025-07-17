import Image from "next/image";
import {
  BrainCogIcon,
  EyeIcon,
  GlobeIcon,
  MonitorSmartphoneIcon,
  ServerCogIcon,
  ZapIcon,
} from "lucide-react";
import Demo from "@/assets/images/replace.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const features = [
  {
    name: "Store your PDF Documents",
    description: "Keep all your PDF files securely stored and easily acessible anytime, anywhere.",
    icon: GlobeIcon
  },
  {
    name: "Fast Responses",
    description: "Expirience fast answers to your questions, ensuring you get the information you need quickly.",
    icon: ZapIcon
  },
  {
    name: "Chat Memorization",
    description: "JUDAH remembers previous intreractions, providing a personalised and seamless experience.",
    icon: BrainCogIcon
  },
  {
    name: "Interactive PDF Viewer",
    description: "Engage with your PDF like never before using JUDAH's interactive viewer.",
    icon: EyeIcon
  },
  {
    name: "Cloud Backup",
    description: "Rest assured knowing your files are safely backed up to the cloud 😉.",
    icon: ServerCogIcon
  },
  {
    name: "Responsive Across Devices",
    description: "Acess and chat with your PDF files seamlessly on any device.",
    icon: MonitorSmartphoneIcon
  },
]

export default function Home() {
  return (
    <main className="flex-1 bg-gradient-to-tl from-black to-yellow-500 overflow-scroll p-2 lg:p-5">
      <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
        {/* TOP SECTION */}
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-yellow-500">Your AI Document Companion.</h2>

            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-600 sm:text-6xl ">Transfrom PDF's Into Interractive Converstions </p>

            <p className="mt-6 text-lg leading-8 text-gray-500">
              Introducing {" "}
              <span className="font-bold text-yellow-500">JUDAH PDF.</span>
              <br />
              <br /> Upload your documents, and JUDAH PDF will answer
              questions, sumarize content, and answer all your Q's. Ideal for
              everyone- Designed for students, <span className="text-yellow-500">
                JUDAH PDF
              </span>{" "}
              turns static documents into {" "}
              <span className="font-bold">dynamic conversations</span>,
              enhancing productivity 10x.
            </p>
          </div>

          <Button asChild className="mt-10">
            <Link href='/dashboard'> Get Started</Link>
          </Button>
        </div>
        {/* DEMO IMAGE */}
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Image
              alt="Judah screenshot"
              src={Demo}
              width={2432}
              height={1442}
              className="mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            />
            <div aria-hidden="true" className="relative">
              <div className="absolute bottom-0 -inset-x-32 bg-gradient-to-t from-white/90 pt-[5%]" />
            </div>
          </div>
        </div>

        {/* FUNCTIONS */}
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid grid-cols-1 max-w-2xl gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16 ">
            {features.map(feature => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-gray-500">
                  <feature.icon
                    aria-hidden='true'
                    className="absolute left-1 top-1 h-5 w-5 text-yellow-500"
                  />
                </dt>

                <dd>{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </main>
  );
}
