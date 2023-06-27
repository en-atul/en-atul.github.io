import Image from "next/image";
import React from "react";
import { DefaultLayout } from "../../components";
import Logo from "../../public/images/wellnite.jpeg";

import W1 from "../../public/images/app/wellnite/1.webp";
import W2 from "../../public/images/app/wellnite/2.webp";
import W3 from "../../public/images/app/wellnite/3.webp";
import W4 from "../../public/images/app/wellnite/4.webp";
import W5 from "../../public/images/app/wellnite/5.webp";
import W6 from "../../public/images/app/wellnite/6.webp";
import W7 from "../../public/images/app/wellnite/7.webp";
import W8 from "../../public/images/app/wellnite/8.webp";

const skills = [
  {
    label: "Reactjs",
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
    label: "Jest",
    borderColor: "border-red-800",
  },
  {
    label: "React Testing Library",
    borderColor: "border-red-500",
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
    label: "MongoDB",
    borderColor: "border-green-500",
  },
  {
    label: "Storybook",
    borderColor: "border-pink-500",
  },

  {
    label: "rxjs",
    borderColor: "border-pink-500",
  },

  {
    label: "Nodejs",
    borderColor: "border-green-600",
  },
];

const app = [
  {
    path: W1,
    title: "Dashboard",
  },
  {
    path: W2,
    title: "Appointment Duration",
  },
  {
    path: W3,
    title: "Select Provider for Appointment",
  },
  {
    path: W4,
    title: "Select Appointment Date",
  },
  {
    path: W5,
    title: "Appointment Booked",
  },
  {
    path: W6,
    title: "Upcoming Appointment",
  },
  {
    path: W7,
    title: "Appointment Call With Provider",
  },
  {
    path: W8,
    title: "Plans",
  },
];

export default function Wellnite() {
  return (
    <DefaultLayout>
      <div className="container mx-auto p-10">
        <Image
          src={Logo}
          width={100}
          height={100}
          alt="wellnite logo"
          priority
          placeholder="blur"
        />
        <a
          href="https://wellnite.com"
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
            <p>Wellnite Website</p>
          </article>
        </a>

        <p className="mt-10 text-gray-700">
          Wellnite is a mental health platform, aim&apos;s to make high-quality
          mental healthcare accessible to everyone. Wellnite makes it accessible
          and frictionless for everyone to take action and overcome anxiety and
          depression.
        </p>

        <h3 className="mt-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
          My Responsibilities
        </h3>
        <ul className="list-disc pl-4">
          <li>
            Mentor junior/team members for technical guidance, overcome
            challenges, assist in problem-solving and provide guidance to help
            them grow and develop their skills.
          </li>
          <li>
            Stay updated with the latest industry trends and best practices in
            web development, and proactively contribute ideas to improve
            development processes.
          </li>
          <li>
            Analyzed existing software implementations to identify areas
            requiring improvement.
          </li>
          <li>
            Published NPM package to overcome the issues such as clear site
            data, frontend environment variables management etc.
          </li>
          <li>
            Contributed ideas and suggestions in team meetings and delivered
            updates on deadlines, designs and enhancements.
          </li>
          <li>
            Consulted with engineering team members to determine system loads
            and develop improvement plans.
          </li>
          <li>Unit & Integration test for performance, capabilities.</li>
          <li>
            Write endpoints collaborating with engineering team members to
            optimize system loads and develop improvement plans.
          </li>
          <li>
            Review code, debug problems, and resolve issues, ensure high-quality
            deliverables.
          </li>
        </ul>

        <article className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16">
          <section>
            <p className="font-semibold text-xl underline">
              Submit Provider&apos;s Billing Timesheet Bi-Monthly
            </p>
            <p>
              To accurately calculate a provider&apos;s billable hours, we rely
              on multiple data sources. First, we gather all the appointments
              for the given month from Acuity, a powerful scheduling tool
              designed for businesses. Acuity enables us to extract valuable
              information such as appointment details, including duration and
              unique identifiers.
              <br />
              In addition to retrieving appointment data, we also verify the
              active status of the providers and cross-reference it with the
              corresponding billing IDs. This ensures that we have comprehensive
              and up-to-date information for our calculations.
              <br />
              Once we have collected all the necessary data, we conduct thorough
              checks to determine whether each appointment should be considered
              billable or not. We take into account various factors, such as
              duration and unique identifiers associated with each appointment,
              which assist us in accurately assessing their billable status.
              <br />
              Upon identifying the billable appointments, we proceed to submit
              the total billable hours to <strong>LetsDeel</strong> This
              convenient platform enables us to streamline the payment process
              for the providers, allowing the payer to remit payment with a
              single click. This eliminates the need for individual payments and
              simplifies the overall payment experience.
              <br />
              By leveraging Acuity, analyzing relevant data, and utilizing the
              efficiency of <strong>LetsDeel</strong>, we ensure accurate
              billing and facilitate seamless payment transactions for the
              providers.
            </p>
          </section>
          <section>
            <p className="font-semibold text-xl underline">
              Show Provider&apos;s Billing history / Current Month Billable
              hours
            </p>
            <p>
              To ensure a smooth and transparent billing process for our
              providers, we have implemented a system where we gather and store
              their billing details in our company&apos;s database at the time
              of submission. These details are then sent to{" "}
              <strong>LetsDeel</strong>, a platform we utilize for billing
              purposes. By retaining this information in our database, we can
              leverage it to offer providers access to their billing history,
              enabling them to track their appointment details without the need
              to contact company&apos;s staff or billing team.
              <br /> <br />
              The availability of billing history empowers providers to stay
              informed about their financial transactions and verify the
              accuracy of their billing records. Should they encounter any
              discrepancies or missing details in their billing history or have
              questions about billable hours for the current month, providers
              can promptly reach out to the dedicated billing team for
              clarification or resolution. This proactive approach ensures that
              any errors or misunderstandings can be rectified before they
              escalate or cause inconvenience.
              <br /> <br />
              By providing access to billing history and facilitating easy
              communication with the billing team, we aim to deliver a seamless
              experience for the providers. This transparency builds trust and
              confidence in the company, reinforcing their association with us.
              It also demonstrates the commitment to maintaining accurate and
              reliable billing processes, enhancing the overall satisfaction and
              long-term relationship with the providers.
            </p>
          </section>
          <section>
            <p className="font-semibold text-xl underline">
              Add Chat functionality for Providers and Members
            </p>
            <p>
              This project has the objective of implementing a robust
              communication system between providers and members. The primary
              goal is to improve and streamline interactions among providers,
              members, and Wellnite staff, ultimately enhancing the overall
              experience for all parties involved.
              <br />
              The scope of this communication feature includes providing an
              optional toggle for providers, granting them the flexibility to
              activate or deactivate the feature according to their preferences
              and requirements. The chat functionality not only facilitates
              real-time communication but also enables seamless file sharing.
              Additionally, to ensure efficient communication, email
              notifications can be sent when either provider is offline,
              ensuring that no messages go unanswered. This feature addresses a
              longstanding need within the organization.
              <br />
              As part of the implementation, integration with{" "}
              <strong>CometChat</strong> is being explored to cater to the
              specific requirements of service providers. This integration will
              enhance the capabilities and effectiveness of the communication
              feature.
              <br />
              By implementing this comprehensive communication system, Wellnite
              aims to optimize interactions, improve provider-member engagement,
              and ultimately enhance the overall efficiency and experience
              within the platform.
            </p>
          </section>

          <section>
            <p className="font-semibold text-xl underline">
              Provider&apos;s Referral Program
            </p>
            <p>
              Goal of this feature is to motivate providers, promote
              collaboration, and ultimately achieve mission of making mental
              healthcare universally accessible irrespective of their location
              and insurance coverage by incentivize their use, rewarding and
              compensating providers for their participation.
              <br />
              Through the Wellnite Partners and Mission Incentive Program,
              providers can earn rewards and compensation while contributing to
              the mission of making mental healthcare accessible. Providers will
              earn Wellbits for their progress achieved through the Wellnite
              platform. These Wellbits can be exchanged for cash or various
              perks.
              <br />
              The program follows the Wellnite Collaborative Model, which offers
              providers the opportunity to earn more, save more, and have
              greater time and flexibility in delivering high-quality mental
              healthcare online. By participating in this model, providers
              actively contribute to the mission of accessibility. For every 10
              Wellbits earned, providers can exchange them for $1 in value.
              <br />
              Within the program, providers have two types of colleagues: those
              referred by the provider who have signed a contract with Wellnite,
              and associates who are assigned to the provider for supervision
            </p>
          </section>
          <section>
            <p className="font-semibold text-xl underline">Track Call Logs</p>
            <p>
              The primary objective of tracking call logs is to streamline the
              process of resolving member issues, enabling us to swiftly
              identify and address problems while minimizing the inconvenience
              caused to the members. By maintaining a comprehensive record of
              call logs, we can efficiently provide members with accurate and
              relevant explanations for the difficulties they encountered,
              without imposing unnecessary burdens on their time or requesting
              redundant information.
              <br />
              <br />
              When tracking call logs, we collect essential information such as
              the precise time at which a member joined and left the call, the
              duration of the call, the device utilized, the associated IP
              address, the operating system in use, the specific browser
              employed (including its version), as well as pertinent details
              regarding the member and their service provider. This wealth of
              data empowers us to perform thorough analyses, troubleshoot
              effectively, and offer tailored solutions to enhance the overall
              member experience.
            </p>
          </section>

          <section>
            <p className="font-semibold text-xl underline">
              Frontend Cache Control
            </p>
            <p>
              The cache control feature plays a crucial role in ensuring a
              smooth browsing experience for users by allowing us to effectively
              clear the cached data stored in their web browsers. This feature
              is particularly important when deploying updates or changes to our
              application.
              <br />
              To implement this feature, we employ a strategy where we update
              the package version with each deployment. This version update
              serves as a trigger to prompt the browser to re-fetch the latest
              version of the application and discard any outdated cached data.
              By leveraging XMLHttpRequests (XMLHttps) requests, we compare the
              old application version stored in the browser&apos;s cache with
              the newly released version. If the two versions differ, it
              indicates that an update has occurred.
              <br />
              Upon detecting a version mismatch, we initiate the clearing of the
              browser&apos;s cache. This process ensures that users receive the
              most up-to-date version of our application, eliminating any
              potential compatibility issues or discrepancies caused by outdated
              cached data. By proactively managing the cache through this
              mechanism, we strive to provide users with a seamless and
              optimized browsing experience, enhancing their satisfaction and
              minimizing any disruptions or inconsistencies that may arise from
              cached content.
            </p>
          </section>

          <section>
            <p className="font-semibold text-xl underline">
              Optimize Image before Upload
            </p>
            <p>
              To address the issue of delays during the upload of
              high-resolution photos, we have implemented a solution to optimize
              the image quality and size before transmitting them to the server.
              This optimization process ensures that users can enjoy a seamless
              and efficient experience while uploading their photos.
              <br />
              High-resolution photos, with their larger file sizes, can often
              cause delays during the upload process. By optimizing the image
              quality and size, we reduce the amount of data that needs to be
              transmitted, resulting in faster upload times and a smoother user
              experience.
              <br />
              The optimization process involves compressing the image files
              without significantly compromising their visual quality. This is
              achieved by employing techniques such as resizing the image
              dimensions, reducing the color depth, and employing efficient
              image compression algorithms. These optimizations help to strike a
              balance between file size reduction and preserving the essential
              visual details of the image.
              <br />
              By optimizing the image quality and size before uploading, we
              alleviate the burden on both the user&apos;s device and the
              server. Users no longer have to wait for extended periods to
              upload large files, and the server can process the optimized
              images more quickly and efficiently. This optimization approach
              enhances the overall usability of the application, providing users
              with a seamless experience when uploading their high-resolution
              photos.
              <br />
              In summary, by optimizing image quality and size before uploading,
              we proactively tackle the issue of delays during high-resolution
              photo uploads. Through techniques like compression and resizing,
              we strike a balance between reducing file sizes and maintaining
              visual quality. This optimization process significantly improves
              the upload speed, ensuring that users can smoothly and swiftly
              share their photos without experiencing frustrating delays.
            </p>
          </section>

          <section>
            <p className="font-semibold text-xl underline">Release Notes</p>
            <p>
              Goal was to make the user-specific release notes feature which
              will plays a crucial role in keeping our users informed about the
              latest updates and changes in our application. With the
              implementation of a Role-Based Access Control (RBAC) method, we
              recognized the need to create our own release notes feature. This
              allows us to tailor the release notes specifically for each user,
              ensuring they receive relevant information based on their roles
              and permissions.
              <br />
              By developing our own release notes feature, we have the
              capability to include and communicate all major, minor, and patch
              changes that have been implemented over time. This ensures that
              our users stay up-to-date with the new features, improvements, bug
              fixes, and any other important updates we release.
              <br /> <br />
              The RBAC method enables us to personalize the release notes for
              each user by considering their specific roles within the
              application. For example, administrators might receive
              comprehensive release notes that cover all changes, while regular
              users might receive a condensed version that focuses on
              user-facing features and enhancements. This approach ensures that
              users receive relevant information without overwhelming them with
              details that may not be applicable to their specific role or usage
              of the application.
              <br /> <br /> By providing user-specific release notes, we enhance
              the overall user experience and keep our users engaged and
              informed about the continuous progress and updates of the
              application. This feature serves as a valuable communication
              channel to bridge the gap between our development team and the
              end-users, enabling transparency and fostering a sense of
              involvement in the evolution of the application.
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
              I&apos;d created a package which helps to decrypt the vault keys
              into the .env file on build time, so that it can be use easily on
              run time.
              <br />
              The .env.vault file serves as an encrypted container for your
              secrets, decrypting them on-demand during the application&apos;s
              boot process. This process relies on a DOTENV_KEY environment
              variable that you set on your cloud platform or server. By
              following this approach, even if there is a breach in security and
              an attacker gains access to your decryption key, they will only
              obtain the key itself, not the actual secrets. For the attacker to
              access your secrets, they would need to compromise additional
              security measures, such as gaining access to your codebase,
              locating the .env.vault file, and decrypting its contents. This
              adds significant complexity and time-consuming efforts for
              potential attackers.
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
              decrypting them just-in-time during the application&apos;s boot
              process, the technique minimizes the impact of a potential breach,
              as attackers would need to overcome multiple barriers to access
              the actual secrets. Creating environment-specific .env files and
              generating the .env.vault file ensures that the secrets remain
              confidential and reduces the risk associated with storing
              sensitive information.
            </p>
          </section>
          <section>
            <p className="font-semibold text-xl underline">
              Record Audio Message
            </p>
            <p>
              To enable the Send Audio Message feature, we implemented a process
              that involves requesting permission from the user&apos;s browser
              using the <strong>navigator.mediaDevices.getUserMedia</strong>{" "}
              API. This permission allows us to access the user&apos;s
              microphone and record audio, providing them with the ability to
              perform various actions such as play, pause, stop, cancel, and
              resume recording. Additionally, users can preview their recorded
              audio using the createObjectURL function.
              <br /> <br />
              By requesting permission to access the user&apos;s microphone, we
              ensure that they have control and consent over the recording
              process. This permission is necessary to capture audio input and
              facilitate the recording functionality within our application.
              Once permission is granted, users can utilize the provided
              features to record and manipulate audio as needed.
              <br /> <br />
              The implementation allows users to perform actions like play,
              pause, stop, cancel, and resume recording, providing them with
              flexibility and control over the audio recording process. They can
              preview their recorded audio using the createObjectURL function,
              which generates a URL that can be used to play the audio back
              within the application.
              <br /> <br />
              This feature enhances the user experience by enabling them to send
              audio messages within chat or other communication functionalities.
              It adds a dynamic and interactive element to conversations,
              allowing users to convey their thoughts, emotions, or information
              using recorded audio instead of solely relying on text-based
              messages.
            </p>
          </section>

          <section className="flex flex-col justify-end">
            <p className="text-xl text-blue-600">etc...</p>
          </section>
        </article>

        <h3 className="mt-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
          Team Members
        </h3>
        <ul className="list-disc pl-4">
          <li>Orinayo Oyelade</li>
          <li>Victory Osikwheme</li>
          <li>Atul Kumar</li>
          <li>David Adeleye</li>
          <li>Andrew Ogaga</li>
          <li>Wilfred</li>
          <li>Peter Ogaga</li>
          <li>Micheal</li>
          <li>Juan Llerena</li>
          <li>Annika Bautista</li>
        </ul>

        <h3 className="mt-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
          Services Provide by Wellnite to their members
        </h3>
        <section className="flex flex-wrap justify-start items-center gap-5 mt-4">
          <article className="px-4 py-1 rounded-full border border-gray-300">
            Book Appointment
          </article>
          <article className="px-4 py-1 rounded-full border border-gray-300">
            Video Call
          </article>
          <article className="px-4 py-1 rounded-full border border-gray-300">
            Plan Manage
          </article>
          <article className="px-4 py-1 rounded-full border border-gray-300">
            Cancel Subscription
          </article>
        </section>
        <h3 className="mt-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
          App Overview
        </h3>
        <section className="wrapper w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {app.map((s, idx) => (
            <article
              key={idx}
              className="item w-full h-72 relative flex flex-col mb-7"
            >
              <div className="relative w-full h-full">
                <Image
                  src={s.path}
                  layout="fill"
                  alt={s.title}
                  priority
                  placeholder="blur"
                />
              </div>
              <p className="text-center my-3">{s.title}</p>
            </article>
          ))}
        </section>

        <h3 className="mt-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
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
