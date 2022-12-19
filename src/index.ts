import { BackToTop, DocsContainerHOC, TableOfContents } from "./components";

const withTableOfContents: any = () => ({
  docs: {
    container: DocsContainerHOC,
  },
});

export { BackToTop, DocsContainerHOC, TableOfContents, withTableOfContents };
