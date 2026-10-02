"use client"

export function PlaceholderViewer() {
  return (
    <div style={{
      width: "100%",
      maxWidth: "720px",
      margin: "0 auto",
      padding: "3rem 2rem",
      fontFamily: "'DM Sans', 'Inter', system-ui, -apple-system, sans-serif",
      color: "var(--foreground, #1a1a1a)",
      lineHeight: 1.8,
    }}>
      {/* Title */}
      <h1 style={{
        fontSize: "2.25rem",
        fontWeight: 700,
        lineHeight: 1.3,
        marginBottom: "0.75rem",
        letterSpacing: "-0.02em",
      }}>
        The Art of Building Beautiful Interfaces
      </h1>

      {/* Meta */}
      <p style={{
        color: "var(--muted-foreground, #888)",
        fontSize: "0.875rem",
        marginBottom: "2rem",
        paddingBottom: "1.5rem",
        borderBottom: "1px solid var(--border, #e5e7eb)",
      }}>
        Published on October 2, 2026 · 5 min read
      </p>

      {/* Intro paragraph */}
      <p style={{ marginBottom: "1.5rem", fontSize: "1.0625rem" }}>
        Great user interfaces don't just happen — they're the result of careful thought,
        iterative design, and a deep understanding of the people who will use them. In this
        post, we'll explore the principles behind crafting interfaces that feel{" "}
        <em>intuitive</em>, <strong>delightful</strong>, and truly premium.
      </p>

      {/* Heading 2 */}
      <h2 style={{
        fontSize: "1.5rem",
        fontWeight: 600,
        marginTop: "2.5rem",
        marginBottom: "1rem",
        letterSpacing: "-0.01em",
      }}>
        Start with Purpose
      </h2>

      <p style={{ marginBottom: "1.5rem", fontSize: "1.0625rem" }}>
        Every design decision should serve a purpose. Before reaching for the latest
        trend or adding another animation, ask yourself:{" "}
        <em>"Does this help the user accomplish their goal?"</em>
      </p>

      {/* Blockquote */}
      <blockquote style={{
        borderLeft: "3px solid var(--primary, #18181b)",
        paddingLeft: "1.25rem",
        margin: "1.5rem 0",
        fontStyle: "italic",
        color: "var(--muted-foreground, #666)",
        fontSize: "1.0625rem",
      }}>
        "Design is not just what it looks like and feels like. Design is how it works."
        <br />
        <span style={{ fontSize: "0.875rem", fontStyle: "normal" }}>— Steve Jobs</span>
      </blockquote>

      {/* Heading 2 */}
      <h2 style={{
        fontSize: "1.5rem",
        fontWeight: 600,
        marginTop: "2.5rem",
        marginBottom: "1rem",
        letterSpacing: "-0.01em",
      }}>
        Key Principles
      </h2>

      {/* Bullet list */}
      <ul style={{
        marginBottom: "1.5rem",
        paddingLeft: "1.5rem",
        fontSize: "1.0625rem",
      }}>
        <li style={{ marginBottom: "0.5rem" }}>
          <strong>Consistency</strong> — Reuse patterns so users can predict behavior
        </li>
        <li style={{ marginBottom: "0.5rem" }}>
          <strong>Hierarchy</strong> — Guide the eye with size, weight, and spacing
        </li>
        <li style={{ marginBottom: "0.5rem" }}>
          <strong>Feedback</strong> — Every action should have a visible response
        </li>
        <li style={{ marginBottom: "0.5rem" }}>
          <strong>Simplicity</strong> — Remove everything that isn't essential
        </li>
      </ul>

      {/* Code block */}
      <h2 style={{
        fontSize: "1.5rem",
        fontWeight: 600,
        marginTop: "2.5rem",
        marginBottom: "1rem",
        letterSpacing: "-0.01em",
      }}>
        A Quick Example
      </h2>

      <p style={{ marginBottom: "1rem", fontSize: "1.0625rem" }}>
        Here's a simple React component that embodies these principles:
      </p>

      <pre style={{
        backgroundColor: "var(--muted, #f4f4f5)",
        borderRadius: "8px",
        padding: "1.25rem",
        overflowX: "auto",
        fontSize: "0.875rem",
        lineHeight: 1.6,
        fontFamily: "'Geist Mono', 'Fira Code', monospace",
        marginBottom: "1.5rem",
        border: "1px solid var(--border, #e5e7eb)",
      }}>
        <code>{`function Button({ children, variant = "primary" }) {
  return (
    <button className={\`btn btn-\${variant}\`}>
      {children}
    </button>
  );
}`}</code>
      </pre>

      {/* Horizontal rule */}
      <hr style={{
        border: "none",
        borderTop: "1px solid var(--border, #e5e7eb)",
        margin: "2.5rem 0",
      }} />

      {/* Closing */}
      <h2 style={{
        fontSize: "1.5rem",
        fontWeight: 600,
        marginBottom: "1rem",
        letterSpacing: "-0.01em",
      }}>
        Wrapping Up
      </h2>

      <p style={{ marginBottom: "1.5rem", fontSize: "1.0625rem" }}>
        Building beautiful interfaces is a craft that combines technical skill with
        empathy. By focusing on <strong>purpose</strong>, <strong>consistency</strong>,
        and <strong>simplicity</strong>, you can create experiences that users genuinely
        enjoy.
      </p>

      <p style={{
        color: "var(--muted-foreground, #888)",
        fontSize: "0.875rem",
        marginTop: "3rem",
        paddingTop: "1.5rem",
        borderTop: "1px solid var(--border, #e5e7eb)",
      }}>
        Thanks for reading. If you found this helpful, share it with a fellow developer. ✨
      </p>
    </div>
  )
}
