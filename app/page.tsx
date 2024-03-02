import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const projectList = [
    {
      title: 'Peregrine',
      description: 'A clone of Twitter',
      link: 'https://github.com/lsnsol/peregrine'
    },
    {
      title: 'LFR Swarm',
      description: 'Swarm of LFR Robots',
      link: 'https://github.com/lsnsol/LFRSwarm'
    },
    {
      title: 'Snippets',
      description: 'Snippets of Code for utilities',
      link: 'https://github.com/lsnsol/snippets'
    },
    {
      title: 'Kubernetes',
      description: 'How to Kubernetes',
      link: 'https://github.com/lsnsol/kubernetes'
    },
    {
      title: 'Kafka Spring Docker',
      description: 'A sample of Kafka Spring and Docker',
      link: 'https://github.com/lsnsol/kafka_spring_docker'
    },
    {
      title: 'Mongo Crud',
      description: 'A JS based Mongo CRUD',
      link: 'https://github.com/lsnsol/mongo-crud'
    },
    {
      title: 'Firebase Web App',
      description: 'A sample implementation of Firebase',
      link: 'https://github.com/lsnsol/firebase-web-app'
    },
    {
      title: 'Concepts of Java',
      description: 'Concepts of Java',
      link: 'https://github.com/lsnsol/conceptsOfJava'
    },
    {
      title: 'Sample C Programs',
      description: 'Sample C Programs',
      link: 'https://github.com/lsnsol/Sample-C-Programs'
    },
    {
      title: 'RNN Sample',
      description: 'A sample code of RNN',
      link: 'https://github.com/lsnsol/rnn_sample'
    },
    {
      title: 'SNN Sample',
      description: 'A Sample code of SNN',
      link: 'https://github.com/lsnsol/snn-sample'
    },
    {
      title: 'Mini JDBC',
      description: 'Sample JDBC Connection',
      link: 'https://github.com/lsnsol/Mini-JDBC'
    },
    {
      title: 'Java School Libray Project',
      description: 'School Libray Project in Java',
      link: 'https://github.com/lsnsol/Java-School-Library-Project'
    },
    {
      title: 'Mini File Copier',
      description: 'Copying files from Folder to Folder in Java',
      link: 'https://github.com/lsnsol/Mini-File-Copier'
    },
    {
      title: 'Mini Railway Booking System',
      description: 'Railway Booking Application in Java',
      link: 'https://github.com/lsnsol/Mini-Railway-Booking-System'
    },
    {
      title: 'Mini Doctor Booking System',
      description: 'Doctor Booking System in Java',
      link: 'https://github.com/lsnsol/Mini-Doctor-Booking'
    },
    {
      title: 'Mini CRUD JDBC AngularJS',
      description: 'Sample CRUD JDBC AngularJS',
      link: 'https://github.com/lsnsol/Mini-CRUD-JDBC-AngularJs'
    },
    {
      title: 'Mini College',
      description: 'College Data Record Collection in Java',
      link: 'https://github.com/lsnsol/Mini-College'
    },
    {
      title: 'Mini Doctor Booking System',
      description: 'Doctor Booking System in Java',
      link: 'https://github.com/lsnsol/Mini-Doctor-Booking'
    },
    {
      title: 'Mini Banking System',
      description: 'Banking System in Java',
      link: 'https://github.com/lsnsol/Mini-Banking-System'
    },
    {
      title: 'Cab Booking System',
      description: 'Cab Booking based on JSP Java',
      link: 'https://github.com/lsnsol/JSP-Java-Based-Cab-Booking-System'
    },
    {
      title: 'Gene Selection Technique',
      description: 'Gene Selection Technique using Wrapper Approach',
      link: 'https://github.com/lsnsol/A-Novel-Gene-Selection-Technique-Using-Wrapper-Approach-on-Microarray-Gene-Expression-Data'
    },
    {
      title: 'Comments Classification',
      description: 'Comments Classification based on NLP',
      link: 'https://github.com/lsnsol/NLP-Based-Comments-Classification'
    }
  ]

  return (
    <div>
      <div className="mt-5 text-xl">
        <div className="flex justify-center items-center p-5">
          <p><img src="assets/sol_dark_1080_circle.png" height={100} width={100} alt="LSN Solutions Logo" title="Sol White Logo" /></p>
          <h2 className="flex flex-row pl-10 text-3xl">Hi there 👋 greetings from &nbsp;<p className="font-bold"> Solutions </p></h2>
        </div>
        <hr />
        <div className="p-5">
          <p>LSN Solutions aims to provide all-around solutions to your technical problems. It will include sample POCs on various day-to-day problems from a technology perspective. These will include but not limited to:</p>
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
        {projectList.map((item) =>
          <Link href={item.link} passHref={true} key={item.title}>
            <div className="p-5 w-96">
              <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
              </div>
              <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="p-2">
                  <div className="text-gray-900 font-bold text-xl mb-2">{item.title}</div>
                  <p className="text-gray-700 text-base">{item.description}</p>
                </div>
              </div>
            </div >
          </Link>
        )}
      </div>
    </div>
  );
}
