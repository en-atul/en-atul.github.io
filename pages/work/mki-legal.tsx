import Image from "next/image";
import React from "react";
import { DefaultLayout } from "../../components";

import Logo from "../../public/images/mki-legal.jpeg";

import E1 from "../../public/images/app/mkilegal/estate/1.png";
import E2 from "../../public/images/app/mkilegal/estate/2.png";
import E3 from "../../public/images/app/mkilegal/estate/3.png";

import F1 from "../../public/images/app/mkilegal/familylaw/1.png";
import F2 from "../../public/images/app/mkilegal/familylaw/2.png";

const skills = [
  {
    label: "Reactjs",
    borderColor: "border-cyan-500",
  },
  {
    label: "React Native",
    borderColor: "border-cyan-500",
  },
  {
    label: "ReduxToolkit",
    borderColor: "border-purple-500",
  },
  {
    label: "TailwindCSS",
    borderColor: "border-cyan-500",
  },
  {
    label: "Typescript",
    borderColor: "border-blue-500",
  },
  {
    label: "Javascript",
    borderColor: "border-yellow-500",
  },
  {
    label: "Firebase",
    borderColor: "border-yellow-500",
  },
  {
    label: "Firebase Cloud Functions",
    borderColor: "border-yellow-500",
  },
  {
    label: "Nodejs",
    borderColor: "border-green-600",
  },
];

const estateApp = [
  {
    path: E1,
    title: "Login Page",
  },
  {
    path: E2,
    title: "Invite Admin Page",
  },
  {
    path: E3,
    title: "Policy Details & Update Page",
  },
];

const familylawApp = [
  {
    path: F1,
    title: "Login Page",
  },
  {
    path: F2,
    title: "Invite Admin Page",
  },
];

export default function MKILegal() {
  return (
    <DefaultLayout>
      <div className="container mx-auto p-10">
        <Image
          src={Logo}
          width={100}
          height={100}
          alt="mki legal logo"
          priority
          placeholder="blur"
        />
        <a
          href="https://www.perthemploymentlawyers.com.au/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
          <article className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>
            <p>MKI Legal Website</p>
          </article>
        </a>
        <p className="mt-10 text-gray-700">
          MKI Legal is a law firm specialising in employment law and family law.
        </p>

        <h3 className="mt-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-gray-500">
          Services Provide by MKI Legal
        </h3>
        <section className="flex justify-start items-center space-x-5 mt-4">
          <article className="px-4 py-1 rounded-full border border-gray-300">
            Helps Divorced/Separated Couples in Splitting Assets/Debts
          </article>
          <article className="px-4 py-1 rounded-full border border-gray-300">
            Helps in Creating Will & Cremations in Australia
          </article>
        </section>

        <h3 className="mt-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-gray-500">
          My Responsibilities
        </h3>
        <ul className="list-disc pl-4">
          <li>Ensuring web design is optimized for smartphones</li>
          <li>Write reusable components that can be used in the future</li>
          <li>Applying best practices and standard operating procedures</li>
          <li>fix critical bugs</li>
          <li>Optimizing web pages for maximum speed and scalability</li>
          <li>Maintaining brand consistency throughout the design</li>
          <li>Developing features to enhance the user experience</li>
          <li>Create Packages for future use</li>
          <li>Unit & Integration test for performance, capabilities.</li>
          <li>Write endpoints</li>
          <li>Stay up to date with current best practices</li>
        </ul>

        <article className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16">
          <section>
            <p className="font-semibold text-xl underline">ChatGPT</p>
            <p>
              To optimize the subscription cost associated with ChatGPT, we
              implemented a solution on our company's website that utilizes
              ChatGPT API's stream functionality. This implementation allows all
              users to access and utilize ChatGPT seamlessly while minimizing
              the overall subscription expenses.
              <br />
              By leveraging the stream functionality provided by the ChatGPT
              API, we ensure that multiple users can interact with the model
              simultaneously without incurring additional costs for each
              individual user session. This approach enables us to maximize the
              utilization of the ChatGPT resources while keeping the
              subscription expenses in check.
              <br />
              The stream functionality of the ChatGPT API allows for a
              persistent connection to the model, enabling real-time and
              interactive conversations. Instead of making separate API calls
              for each user interaction, which would result in higher
              subscription costs, the stream functionality facilitates a
              continuous connection between the user and the model. This means
              that multiple users can engage in conversations without the need
              for individual API calls for each message exchange.
              <br />
              By implementing this solution on our company's website, we ensure
              that all users can seamlessly access and utilize ChatGPT for their
              needs without incurring additional expenses. This optimization
              allows us to make efficient use of the ChatGPT subscription,
              minimizing costs while maintaining a high level of user
              satisfaction.
            </p>
          </section>

          <section>
            <p className="font-semibold text-xl underline">
              Record Audio and Transcribe
            </p>
            <p>
              To enable the "Record & Transcribe Audio" feature, we have
              implemented a comprehensive process that begins with requesting
              permission from the user's browser using the
              "navigator.mediaDevices.getUserMedia" API. This permission grants
              us access to the user's microphone, enabling the recording of
              audio. Users can then perform a range of actions, including play,
              pause, stop, cancel, and resume recording, providing them with
              complete control over the audio capture process. Moreover, they
              have the option to preview their recorded audio using the
              "createObjectURL" function, which generates a URL allowing them to
              listen to the audio within our application.
              <br /> <br />
              By requesting permission to access the user's microphone, we
              prioritize user control and consent, ensuring they have full
              oversight of the recording process. This permission is crucial for
              capturing high-quality audio input and facilitating the recording
              functionality seamlessly within our application. Once users grant
              permission, they gain access to a suite of features that empower
              them to record and manipulate audio according to their
              requirements.
              <br /> <br />
              Our implementation allows users to effortlessly navigate actions
              such as playing, pausing, stopping, canceling, and resuming their
              audio recordings. This flexibility and control enhance the overall
              audio recording experience, catering to individual preferences and
              needs. Additionally, users can utilize the "createObjectURL"
              function to preview their recorded audio, providing them with a
              valuable tool to assess the quality and content of their
              recordings within the application.
              <br />
              <p>
                Once users are satisfied with their recorded audio, our system
                enables them to transcribe it. Leveraging APIs, we seamlessly
                transform the audio into text, ensuring a smooth and efficient
                transcription process. This transcription capability facilitates
                the extraction of meaningful and actionable information from
                recorded audio, opening up a range of possibilities for users to
                utilize the transcribed text in various contexts.
              </p>
            </p>
          </section>

          <section>
            <p className="font-semibold text-xl underline">
              Secure Environment Variables
            </p>
            <p>
              To ensure the secure handling of sensitive information and avoid
              scattering secrets across various platforms and tools, it is
              recommended to utilize the secure environment variables technique
              using a .env.vault file. This vault works seamlessly with backend
              but our goal was to make it for frontend as well. To achieve this
              I'd created a package which helps to decrypt the vault keys into
              the .env file on build time, so that it can be use easily on run
              time.
              <br />
              The .env.vault file serves as an encrypted container for your
              secrets, decrypting them on-demand during the application's boot
              process. This process relies on a DOTENV_KEY environment variable
              that you set on your cloud platform or server. By following this
              approach, even if there is a breach in security and an attacker
              gains access to your decryption key, they will only obtain the key
              itself, not the actual secrets. For the attacker to access your
              secrets, they would need to compromise additional security
              measures, such as gaining access to your codebase, locating the
              .env.vault file, and decrypting its contents. This adds
              significant complexity and time-consuming efforts for potential
              attackers.
              <br />
              The implementation of this technique involves three
              straightforward steps:
              <ul className="my-10">
                <li>
                  Create .env.ENVIRONMENT files:
                  <br />
                  In addition to the standard .env file used for development,
                  create separate .env.ci, .env.staging, and .env.production
                  files. If you have a custom environment, append its name to
                  the file (e.g., .env.prod). These files should contain the
                  respective secrets just as you would include them in your
                  regular .env files. However, it is essential to ensure that
                  these files are not committed to your code repository.
                </li>
                <li>
                  Generate the .env.vault file:
                  <br />
                  Execute the build command to generate the .env.vault file.
                  This can be done using the following command:
                  <br />
                  <br />
                  <code className="bg-black text-white px-5 py-2 rounded-lg">
                    npx dotenv-vault local build
                  </code>
                  <br />
                  <br />
                  When executed, this command reads the contents of each .env.*
                  file, encrypts them, and inserts the encrypted versions into
                  the .env.vault file.
                </li>
              </ul>
              <br />
              In summary, the use of a .env.vault file with encrypted secrets
              provides an added layer of security. By encrypting the secrets and
              decrypting them just-in-time during the application's boot
              process, the technique minimizes the impact of a potential breach,
              as attackers would need to overcome multiple barriers to access
              the actual secrets. Creating environment-specific .env files and
              generating the .env.vault file ensures that the secrets remain
              confidential and reduces the risk associated with storing
              sensitive information.
            </p>
          </section>

          <section className="flex flex-col justify-end">
            <p className="text-xl text-blue-600">etc...</p>
          </section>
        </article>

        <h1 className="mt-8 text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-gray-500">
          Projects
        </h1>
        <ul className="list-decimal pl-7 mt-4 space-y-5">
          <li>
            <span className="flex">
              Estate |&nbsp;
              <a
                href="https://www.estatesplus.com.au/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                <article className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                    />
                  </svg>
                  <p>Website</p>
                </article>
              </a>
            </span>
            <p className="my-3 text-gray-700">
              Estate Plus helps With Probate, Letters of Admininstration
              Creating Your Will & Cremations in Australia.
            </p>
            <h3 className="mt-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
              App Overview
            </h3>
            <section className="wrapper w-full flex flex-wrap gap-4 mt-4 justify-center">
              {estateApp.map((s, idx) => (
                <article
                  key={idx}
                  className="item w-[30%] h-[450px] relative flex flex-col mb-7"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={s.path}
                      layout="fill"
                      alt={s.title}
                      quality={1}
                      placeholder="blur"
                    />
                  </div>
                  <p className="text-center my-3">{s.title}</p>
                </article>
              ))}
            </section>
            <h3 className="mt-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-gray-500">
              Team Members
            </h3>
            <ul className="list-disc pl-4">
              <li>Atul Kumar (Frontend Developer)</li>
              <li>James Threfall (UI/UX)</li>
            </ul>
          </li>
          <li>
            <span className="flex">
              Family Law Assist |&nbsp;
              <a
                href="https://online.familylawassist.com.au/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                <article className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                    />
                  </svg>
                  <p>Website</p>
                </article>
              </a>
            </span>{" "}
            <p className="my-3 text-gray-700">
              Family Law Assist helps Australian people settle the assets &
              debts, between the partners after divorce. It provides services
              like consent orders, legal representation, and negotiation.
            </p>
            <h3 className="mt-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
              App Overview
            </h3>
            <section className="wrapper w-full flex flex-wrap gap-4 mt-4 justify-center">
              {familylawApp.map((s, idx) => (
                <article
                  key={idx}
                  className="item w-[30%] h-[450px] relative flex flex-col mb-7"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={s.path}
                      layout="fill"
                      alt={s.title}
                      quality={1}
                      placeholder="blur"
                    />
                  </div>
                  {/* <p className="text-center my-3">{s.title}</p> */}
                </article>
              ))}
            </section>
            <h3 className="mt-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-gray-500">
              Team Members
            </h3>
            <ul className="list-disc pl-4">
              <li>Atul Kumar (Frontend Developer)</li>
              <li>James Threfall (UI/UX)</li>
            </ul>
          </li>
        </ul>
        <h3 className="mt-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-gray-500">
          Team Members
        </h3>
        <ul className="list-disc pl-4">
          <li>Atul Kumar (FullStack Developer)</li>
        </ul>

        <h3 className="mt-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-gray-500">
          Development Stack
        </h3>
        <section className="mt-4 flex flex-wrap gap-4">
          {skills.map((skill, idx) => (
            <article
              key={idx}
              className={`px-4 py-2 border-2 ${skill.borderColor} rounded-full`}
            >
              {skill.label}
            </article>
          ))}
        </section>
      </div>
    </DefaultLayout>
  );
}
