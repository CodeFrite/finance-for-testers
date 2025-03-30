"use client"; // Needed for interactivity in Next.js App Router

import { useEffect, useState } from "react";
import mermaid from "mermaid";

type MDTableOfContentProps = {
  headings: {
    depth: number;
    title: string;
  }[];
};

const MDTableOfContent = (props: MDTableOfContentProps) => {
  const [graphDefinition, setGraphDefinition] = useState("");

  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });

    if (props.headings.length > 0) {
      // Convert headings into Mermaid mind map format
      let graph = "mindmap\n  root((Documentation))\n";

      props.headings.forEach(({ depth, title }) => {
        const indent = "  ".repeat(depth); // Create indentation based on heading level
        graph += `${indent}  ${title}\n`;
      });

      setGraphDefinition(graph);
    }

    // Run Mermaid to render the graph
    setTimeout(() => mermaid.run(), 100);
  }, [props.headings]);

  return (
    <div>
      <pre className="mermaid">{graphDefinition}</pre>
    </div>
  );
};

export default MDTableOfContent;
