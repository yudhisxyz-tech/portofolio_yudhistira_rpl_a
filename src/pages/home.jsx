import Hero from "../components/hero";
import SkillCard from "../components/skillcard";

export default function Home() {
  return (
    <>
      <Hero />

      <section id="skill" className="section">
        <h2>Keahlian Saya</h2>
        <div className="grid">
          <SkillCard
            title="HTML & CSS"
            desc="Membuat tampilan website modern"
            icon="💻"
          />
          <SkillCard
            title="JavaScript"
            desc="Logika dan interaksi"
            icon="⚡"
          />
          <SkillCard
            title="React"
            desc="membangun antarmuka pengguna "
            icon="⚛️"
          />
          <SkillCard
            title="Laravel"
            desc="Backend & API"
            icon="🚀"
          />
        </div>
      </section>
    </>
  );
}
