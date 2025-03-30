"use client";
import React, { useState, useEffect } from "react";
import mermaid from "mermaid";

type InteractiveMermaidProps = {};

const InteractiveMermaid = () => {
  const [hoverText, setHoverText] = useState("Hover over a node or connection!");

  // Mapping nodes and connections to specific descriptions
  const descriptions: { [key: string]: string } = {
    A: "Start of the process",
    B: "Decision point: Choose Yes or No",
    OK: "Continuing the process after Yes",
    D: "Process stops after No",
    "A-->B": "Transition from Start to Decision",
    "B-->C": "Decision leads to Continue",
    "B-->D": "Decision leads to Stop",
  };

  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });

    // Function to add hover listeners after Mermaid renders
    const attachHoverListeners = () => {
      document.querySelectorAll(".node, .edgeLabel").forEach((element) => {
        console.log(element);
        const text = element.id; // Get node/edge text
        if (text && descriptions[text]) {
          element.addEventListener("mouseenter", () => setHoverText(descriptions[text]));
          element.addEventListener("mouseleave", () =>
            setHoverText("Hover over a node or connection!")
          );
        }
      });
    };

    // Observe Mermaid rendering and apply event listeners
    const observer = new MutationObserver(() => {
      attachHoverListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });
    mermaid.run();

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Mermaid Graph */}
      <pre className="mermaid">
        {`
        graph LR
          A --- B
          B-->C["OK"]
          B-->D["Cancel"];
          `}
      </pre>

      {/* Custom text display */}
      <div className="p-4 mt-4 bg-gray-200 rounded text-center">{hoverText}</div>
    </div>
  );
};

export default InteractiveMermaid;
