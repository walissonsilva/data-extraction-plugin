import { ProjectCard } from "@/components/ProjectCard";
import { SectionDivider } from "@/components/SectionDivider";

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="md:mt-24 pb-16">
      <SectionDivider title="Projetos" />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProjectCard
          thumbnail="https://github.com/walissonsilva/personal-website/raw/main/public/images/screenshot-web.png"
          title="Site Pessoal"
          description="Esta aplicação consiste no meu site pessoal, desenvolvido com o
          Next.js, cujo o intuito é apresentar um pouco mais sobre mim, minhas
          skills, meus projetos, cursos e outros conteúdos que eu tenho o
          interesse que compartilhar na internet."
          externalUrl="https://github.com/walissonsilva/personal-website"
        />

        <ProjectCard
          thumbnail="https://github.com/walissonsilva/upload-ai/raw/main/front/public/screenshots/upload-ai-demo.gif"
          title="Upload AI"
          description="Uma aplicação web que visa gerar insigths de títulos e descrição de
          vídeos a partir de seu conteúdo, utilizando a ChatGPT. O sistema
          permite que o usuário realize upload de vídeos, os quais serão
          convertidos para o formato mp3, tendo em vista que apenas o áudio do
          vídeo será utilizado para que, a partir da sua transcrição, gerada
          pelo modelo Whisper da OpenAI, a ChatGPT possa utilizá-la como input
          para gerar títulos com uma bom SEO, além de uma descrição sucinta do
          vídeo que inclui algumas hashtags com palavras-chave do conteúdo do
          vídeo."
          externalUrl="https://github.com/walissonsilva/upload-ai"
        />
      </section>
    </section>
  );
};
