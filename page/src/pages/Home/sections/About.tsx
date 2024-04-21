import { SectionDivider } from "@/components/SectionDivider";

export const About: React.FC = () => {
  return (
    <section id="about" className="md:mt-24 pb-16">
      <SectionDivider title="Sobre mim" />

      <p className="text-base">
        Desenvolvedor Full Stack cuja experiência abrange desde a concepção até
        a entrega de produtos de software robustos e escaláveis, com foco na
        experiência do usuário, eficiência no desenvolvimento e qualidade do
        código.
      </p>

      <div className="flex gap-4 mt-4">
        <strong className="text-6xl text-primary">4+</strong>
        <p>
          Anos de experiência, nos quais tive o privilégio de trabalhar em
          diversos projetos desafiadores e contribuir para o sucesso de várias
          iniciativas.
        </p>
      </div>
    </section>
  );
};
