import Image from "next/image";
import Link from "next/link";
import Projects from "../public/assets/projectList.json";

export default function Home() {
  return (
    <div>
      <div className="mt-5 text-xl">
        <div className="flex justify-center items-center p-5">
          <p><Image src="/assets/sol_dark_1080_circle.png" height={100} width={100} alt="LSN Solutions Logo" title="Sol White Logo" /></p>
          <h2 className="flex flex-row pl-10 text-3xl">Hi there 👋 greetings from &nbsp;<p className="font-bold"> Solutions </p></h2>
        </div>
        <hr />
        <div className="p-5">
          <p>Solutions aims to provide all-around solutions to your technical problems. It will include sample POCs on various day-to-day problems from a technology perspective. These will include but not limited to:</p>
        </div>
        <div className="flex flex-wrap p-5 w-fit space-x-4 font-bold">
          <div>Node</div>
          <div>Python</div>
          <div>HTML</div>
          <div>CSS</div>
          <div>SCSS</div>
          <div>Bootstrap</div>
          <div>Angular</div>
          <div>Arduino</div>
          <div>Raspberry Pi</div>
          <div>Blue Pill STM-32</div>
          <div>Java</div>
          <div>C</div>
          <div>React</div>
          <div>Git</div>
          <div>Github</div>
          <div>Firebase</div>
          <div>MongoDB</div>
          <div>WSL</div>
          <div>Linux</div>
          <div>Android</div>
          <div>Gradle</div>
          <div>Yarn</div>
          <div>Jenkins</div>
          <div>Bitbucket</div>
          <div>Javascript</div>
          <div>SQL</div>
          <div>No SQL</div>
          <div>Google Cloud</div>
          <div>AWS</div>
          <div>Kubernetes</div>
        </div>
        <div className="p-5 space-y-2">
          <p>These are, to begin with, and will include more as we progress further down.</p>
          <p>We are open to collaborating with like-minded people and providing POCs and solutions to various problems in day-to-day life pertaining to technology.</p>
        </div>
        <hr />
        <div className="flex justify-center text-5xl mt-16 p-5">
          List of Samples
        </div>
      </div>
      <div className="p-5 flex flex-wrap justify-center w-fit">
        {Projects.projectList.map((project) =>
          <Link href={project.link} passHref={true} key={project.title}>
            <div className="p-5 w-96">
              <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
              </div>
              <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="p-2">
                  <div className="text-gray-900 font-bold text-xl mb-2">{project.title}</div>
                  <p className="text-gray-700 text-base">{project.description}</p>
                </div>
              </div>
            </div >
          </Link>
        )}
      </div>
    </div>
  );
}
