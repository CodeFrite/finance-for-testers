import styles from "./index.module.css";

export type TermDefinitionProps = {
  term: string;
  children: string;
};

const TermDefinition: React.FC<TermDefinitionProps> = (props: TermDefinitionProps) => {
  return (
    <div className={styles["term-definition"]}>
      <div className={styles.term}>{props.term}</div>
      <div className={styles.definition}>{props.children}</div>
    </div>
  );
};

export default TermDefinition;
