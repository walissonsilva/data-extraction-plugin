interface SectionDividerProps {
  title: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ title }) => {
  return (
    <div className="flex flex-col items-center md:items-start gap-16 mb-8">
      <hr className="bg-primary h-[2px] w-1/2 md:w-96 opacity-35 block mx-auto" />
      <h3 className="text-center md:text-left text-primary text-4xl font-medium">
        {title}
      </h3>
    </div>
  );
};
