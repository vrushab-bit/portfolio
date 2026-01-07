import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";
import Header from "@/components/Header";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Education from "@/components/Education";
import Skils from "@/components/Skils";
import OpenSource from "@/components/OpenSource";
import Achievements from "@/components/Achievements";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16 print:p-12">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <Header />
        <Section>
          <About />
        </Section>
        <Section>
          <WorkExperience />
        </Section>
        <Section>
          <Education />
        </Section>
        <Section>
          <OpenSource />
        </Section>
        <Section>
          <Achievements />
        </Section>
        <Section>
          <Skils />
        </Section>
      </section>

      <CommandMenu
        links={[
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
