/**
 * Converts markdown text to plain text by removing all markdown syntax
 * while preserving the actual content.
 */
export function markdownToText(markdown: string): string {
  return (
    markdown
      // Remove headers
      .replace(/#{1,6}\s/g, "")
      // Remove bold/italic markers
      .replace(/(\*\*|__)(.*?)\1/g, "$2")
      .replace(/(\*|_)(.*?)\1/g, "$2")
      // Remove links but keep the text
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      // Remove images
      .replace(/!\[([^\]]*)\]\([^)]+\)/g, "")
      // Remove code blocks
      .replace(/```[\s\S]*?```/g, "")
      // Remove inline code
      .replace(/`([^`]+)`/g, "$1")
      // Remove blockquotes
      .replace(/^\s*>\s*/gm, "")
      // Remove horizontal rules
      .replace(/^[-*_]{3,}$/gm, "")
      // Remove list markers
      .replace(/^[-*+]\s/gm, "")
      .replace(/^\d+\.\s/gm, "")
      // Remove extra newlines
      .replace(/\n{3,}/g, "\n\n")
      .trim()
  );
}
