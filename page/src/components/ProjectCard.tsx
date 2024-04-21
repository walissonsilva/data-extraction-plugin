import { Button } from "./ui/button";

interface ProjectCardProps {
  thumbnail: string;
  title: string;
  description: string;
  externalUrl: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  thumbnail,
  title,
  description,
  externalUrl,
}) => {
  return (
    <article className="flex flex-col gap-4 bg-accent p-4 md:p-8 rounded-lg border-border border-[1px] border-solid">
      <header>
        <img
          src={thumbnail}
          alt={title}
          className="rounded-lg w-full aspect-video object-cover"
        />
      </header>

      <main>
        <h4 className="text-primary mt-2 text-xl font-medium">{title}</h4>
        <p className="text-muted-foreground line-clamp-3">{description}</p>
      </main>

      <footer>
        <Button asChild>
          <a href={externalUrl} target="_blank" rel="noopener noreferrer">
            Ver projeto
          </a>
        </Button>
      </footer>
    </article>
  );
};
