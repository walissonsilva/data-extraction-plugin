import { Button } from "@/components/ui/button";

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="md:mt-24 pb-16">
      <div className="flex flex-col items-center md:items-start gap-16 mb-8">
        <hr className="bg-primary h-[2px] w-96 opacity-35" />
        <h3 className="text-center md:text-left text-primary text-4xl font-medium">
          Projetos
        </h3>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <article className="flex flex-col gap-4 bg-accent p-4 rounded-lg border-border border-[1px] border-solid">
          <img
            src="https://github.com/walissonsilva/personal-website/raw/main/public/images/screenshot-web.png"
            alt="Site Pessoal"
            className="rounded-lg w-full h-1/2 object-cover"
          />
          <h4 className="text-primary mt-2 text-xl font-medium">
            Site Pessoal
          </h4>
          <p className="text-muted-foreground line-clamp-3">
            Esta aplicação consiste no meu site pessoal, desenvolvido com o
            Next.js, cujo o intuito é apresentar um pouco mais sobre mim, minhas
            skills, meus projetos, cursos e outros conteúdos que eu tenho o
            interesse que compartilhar na internet.
          </p>

          <Button>
            <a
              href="https://github.com/walissonsilva/personal-website"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver projeto
            </a>
          </Button>
        </article>

        <article className="flex flex-col gap-4 bg-accent p-4 rounded-lg border-border border-[1px] border-solid">
          <img
            src="https://github.com/walissonsilva/upload-ai/raw/main/front/public/screenshots/upload-ai-demo.gif"
            alt="Site Pessoal"
            className="rounded-lg w-full h-1/2 object-cover"
          />
          <h4 className="text-primary mt-2 text-xl font-medium">Upload AI</h4>
          <p className="text-muted-foreground line-clamp-3">
            Uma aplicação web que visa gerar insigths de títulos e descrição de
            vídeos a partir de seu conteúdo, utilizando a ChatGPT. O sistema
            permite que o usuário realize upload de vídeos, os quais serão
            convertidos para o formato mp3, tendo em vista que apenas o áudio do
            vídeo será utilizado para que, a partir da sua transcrição, gerada
            pelo modelo Whisper da OpenAI, a ChatGPT possa utilizá-la como input
            para gerar títulos com uma bom SEO, além de uma descrição sucinta do
            vídeo que inclui algumas hashtags com palavras-chave do conteúdo do
            vídeo.
          </p>

          <Button>
            <a
              href="https://github.com/walissonsilva/upload-ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver projeto
            </a>
          </Button>
        </article>
      </section>
    </section>
  );
};
