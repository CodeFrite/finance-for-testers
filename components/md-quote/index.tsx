type MDQuoteProps = {
  source: string;
  children: string;
};

const MDQuote = (props: MDQuoteProps) => {
  return "quote" + props.source + props.children;
};

export default MDQuote;
