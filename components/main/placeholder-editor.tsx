"use client"

import { useState } from "react"

const toolbarButtons = [
  { group: "history", items: [{ label: "Undo", icon: "↩" }, { label: "Redo", icon: "↪" }] },
  {
    group: "blocks", items: [
      { label: "Heading", icon: "H" },
      { label: "List", icon: "☰" },
      { label: "Quote", icon: "❝" },
      { label: "Code", icon: "</>" },
    ]
  },
  {
    group: "marks", items: [
      { label: "Bold", icon: "B", style: "font-bold" },
      { label: "Italic", icon: "I", style: "italic" },
      { label: "Strike", icon: "S", style: "line-through" },
      { label: "Code", icon: "{}", style: "font-mono" },
      { label: "Underline", icon: "U", style: "underline" },
      { label: "Highlight", icon: "🖍" },
      { label: "Link", icon: "🔗" },
    ]
  },
  {
    group: "script", items: [
      { label: "Superscript", icon: "X²" },
      { label: "Subscript", icon: "X₂" },
    ]
  },
  {
    group: "align", items: [
      { label: "Left", icon: "≡" },
      { label: "Center", icon: "≡" },
      { label: "Right", icon: "≡" },
      { label: "Justify", icon: "≡" },
    ]
  },
]

export function PlaceholderEditor() {
  const [activeButtons, setActiveButtons] = useState<Set<string>>(new Set())

  const toggleButton = (label: string) => {
    setActiveButtons(prev => {
      const next = new Set(prev)
      if (next.has(label)) {
        next.delete(label)
      } else {
        next.add(label)
      }
      return next
    })
  }

  return (
    <div style={{
      width: "100%",
      maxWidth: "720px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
    }}>
      {/* Toolbar */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "2px",
        padding: "6px 12px",
        borderBottom: "1px solid var(--border, #e5e7eb)",
        backgroundColor: "var(--background, #fff)",
        position: "sticky",
        top: 0,
        zIndex: 10,
        flexWrap: "wrap",
        minHeight: "44px",
      }}>
        {toolbarButtons.map((group, gi) => (
          <div key={group.group} style={{ display: "flex", alignItems: "center", gap: "1px" }}>
            {gi > 0 && (
              <div style={{
                width: "1px",
                height: "20px",
                backgroundColor: "var(--border, #e5e7eb)",
                margin: "0 6px",
              }} />
            )}
            {group.items.map((btn) => (
              <button
                key={btn.label}
                title={btn.label}
                onClick={() => toggleButton(btn.label)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "32px",
                  height: "32px",
                  borderRadius: "6px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: activeButtons.has(btn.label)
                    ? "var(--primary-foreground, #fff)"
                    : "var(--foreground, #333)",
                  backgroundColor: activeButtons.has(btn.label)
                    ? "var(--primary, #18181b)"
                    : "transparent",
                  transition: "all 0.15s ease",
                  textDecoration: "style" in btn ? (btn as { style?: string }).style?.includes("line-through") ? "line-through" : undefined : undefined,
                  fontStyle: "style" in btn ? (btn as { style?: string }).style?.includes("italic") ? "italic" : undefined : undefined,
                }}
                onMouseEnter={(e) => {
                  if (!activeButtons.has(btn.label)) {
                    e.currentTarget.style.backgroundColor = "var(--accent, #f4f4f5)"
                  }
                }}
                onMouseLeave={(e) => {
                  if (!activeButtons.has(btn.label)) {
                    e.currentTarget.style.backgroundColor = "transparent"
                  }
                }}
              >
                {btn.icon}
              </button>
            ))}
          </div>
        ))}
      </div>

      {/* Editable content area */}
      <div
        contentEditable
        suppressContentEditableWarning
        style={{
          flex: 1,
          padding: "3rem",
          outline: "none",
          fontFamily: "'DM Sans', 'Inter', sans-serif",
          fontSize: "16px",
          lineHeight: 1.75,
          color: "var(--foreground, #333)",
          overflowY: "auto",
        }}
        data-placeholder="Start writing your blog post..."
        onFocus={(e) => {
          if (e.currentTarget.textContent === "") {
            e.currentTarget.style.setProperty("--show-placeholder", "0")
          }
        }}
      >
        <h1 style={{
          fontSize: "2rem",
          fontWeight: 700,
          marginBottom: "0.5rem",
          lineHeight: 1.3,
          color: "var(--foreground, #1a1a1a)",
        }}>
          Untitled Post
        </h1>
        <p style={{
          color: "var(--muted-foreground, #888)",
          marginBottom: "1.5rem",
        }}>
          Start writing your content here...
        </p>
      </div>
    </div>
  )
}
