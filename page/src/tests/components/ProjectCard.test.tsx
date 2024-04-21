import { ProjectCard } from "@/components/ProjectCard";
import { render } from "@testing-library/react";

describe("ProjectCard", () => {
  it("should be render correctly", () => {
    const { getByRole } = render(
      <ProjectCard
        title="fake title"
        thumbnail="thumbnail"
        description="fake description"
        externalUrl="fake url"
      />
    );

    expect(getByRole("img")).toBeInTheDocument();
    expect(getByRole("heading", { level: 4 })).toHaveTextContent("fake title");
    expect(getByRole("paragraph")).toHaveTextContent("fake description");
    expect(getByRole("link")).toHaveAttribute("href", "fake url");
    expect(getByRole("link")).toHaveAttribute("target", "_blank");
  });
});
