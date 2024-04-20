import { Button } from "@/components/ui/button";

export const Banner: React.FC = () => {
  return (
    <section
      id="banner"
      className="flex flex-col md:flex-row-reverse justify-center md:gap-8 gap-12 md:mt-12 h-[calc(100vh-80px)] md:h-auto items-center md:items-start"
    >
      <figure className="w-full flex justify-center">
        <img
          className="rounded-full w-full max-w-64 md:max-w-[400px] flex justify-center"
          src="https://avatars.githubusercontent.com/u/13500056?v=4"
          alt="Walisson Silva: homem pardo, com óculos e barba preta; cabelo preto e baixo. Estou com uma camisa polo branca e numa sala com um parede branca que contém alguns quadriculados com grama verde."
        />
      </figure>

      <div className="text-center md:text-left">
        <hgroup>
          <h1 className="text-lg font-normal mb-2">Olá, eu sou</h1>
          <h2 className="text-primary text-5xl font-medium">Walisson Silva</h2>
        </hgroup>
        <p className="text-sm mt-4">
          Desenvolvedor Full Stack cuja experiência abrange desde a concepção
          até a entrega de produtos de software robustos e escaláveis, com foco
          na experiência do usuário, eficiência no desenvolvimento e qualidade
          do código.
        </p>

        <Button className="mt-6">Currículo</Button>
      </div>
    </section>
  );
};
