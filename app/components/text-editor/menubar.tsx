"use client"

import { Toggle } from "@/components/ui/toggle"
import { AlignCenter, AlignJustify, AlignLeft, AlignRight, BoldIcon, Heading1, Heading2, Heading3, Highlighter, ItalicIcon, Strikethrough, Text } from "lucide-react"
import type { Editor } from '@tiptap/core'


interface MenubarProps {
  editor: Editor | null
}


export default function Menubar({ editor }: MenubarProps) {

  if (!editor) {
    return null
  }



  const MenuButtons = [
    {
      name: "Heading 1",
      tag: "toggle-h1",
      icon: <Heading1 />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run()
    },
    {
      name: "Headin 2",
      tag: "toggle-h2",
      icon: <Heading2 />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run()
    },
    {
      name: "Heading 3",
      tag: "toggle-h3",
      icon: <Heading3 />,
      onClick: () => editor.chain().focus().setParagraph().run()
    },
    {
      name: "Paragraph",
      tag: "toggle-paragraph",
      icon: <Text />,
      onClick: () => editor.chain().focus().setParagraph().run()
    },
    {
      name: "Strike",
      tag: "toggle-strike",
      icon: <Strikethrough />,
      onClick: () => editor.chain().focus().toggleStrike().run()
    },
    {
      name: "Highlight",
      tag: "toggle-highlight",
      icon: <Highlighter />,
      onClick: () => editor.chain().focus().toggleHighlight().run()
    },
    {
      name: "Left align",
      tag: "toggle-leftAlign",
      icon: <AlignLeft />,
      onClick: () => editor.chain().focus().setTextAlign('left').run()
    },
    {
      name: "Center Align",
      tag: "toggle-centerAlign",
      icon: <AlignCenter />,
      onClick: () => editor.chain().focus().setTextAlign('center').run()
    },
    {
      name: "Right align",
      tag: "toggle-rightAlign",
      icon: <AlignRight />,
      onClick: () => editor.chain().focus().setTextAlign('right').run()
    },
    {
      name: "Justify align",
      tag: "toggle-justifyAlign",
      icon: <AlignJustify />,
      onClick: () => editor.chain().focus().setTextAlign('justify').run()
    },

    {
      name: "Italic",
      tag: "toggle-italic",
      icon: <ItalicIcon />,
      onClick: () => editor.chain().focus().toggleItalic().run()
    },
    {
      name: "Bold",
      tag: "toggle-bold",
      icon: <BoldIcon />,
      onClick: () => editor.chain().focus().toggleBold().run()
    }
  ]

  return (
    <div className="control-group">
      {/* <div className="button-group">
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
        >
          H1
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
        >
          H2
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
        >
          H3
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive('paragraph') ? 'is-active' : ''}
        >
          Paragraph
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'is-active' : ''}
        >
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'is-active' : ''}
        >
          Italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive('strike') ? 'is-active' : ''}
        >
          Strike
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          className={editor.isActive('highlight') ? 'is-active' : ''}
        >
          Highlight
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
        >
          Left
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
        >
          Center
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
        >
          Right
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('justify').run()}
          className={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}
        >
          Justify
        </button>
      </div> */}

      <div className="flex justify-start items-center gap-2">

        {MenuButtons.map((button) => (
          <Toggle variant="default" aria-label={button.tag} onClick={button.onClick}>
            {button.icon}
            {/* {button.name} */}
          </Toggle>

        ))}
      </div>

    </div>
  )
}